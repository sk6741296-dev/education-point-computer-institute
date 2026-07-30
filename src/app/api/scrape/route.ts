import { NextResponse } from "next/server";
import { ApifyClient } from "apify-client";
import fs from "fs";
import path from "path";

// Helper to download an image
async function downloadImage(url: string, destPath: string): Promise<boolean> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (error) {
    console.error(`Failed to download ${url}:`, error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    // 1. URL Validation
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Invalid URL provided." }, { status: 400 });
    }
    
    const validPatterns = [
      "google.com/maps",
      "maps.google.com",
      "maps.app.goo.gl",
      "goo.gl/maps"
    ];
    
    if (!validPatterns.some(pattern => url.includes(pattern))) {
      return NextResponse.json(
        { error: "Invalid Google Maps URL. Please provide a valid Google Maps link." },
        { status: 400 }
      );
    }

    let finalUrl = url;
    if (!finalUrl.startsWith("http://") && !finalUrl.startsWith("https://")) {
      finalUrl = "https://" + finalUrl;
    }

    const token = process.env.APIFY_API_TOKEN;
    const actorId = process.env.APIFY_ACTOR_ID;
    const timeoutSecs = parseInt(process.env.APIFY_TIMEOUT_SECONDS || "120");

    if (!token || !actorId) {
      return NextResponse.json(
        { error: "Apify credentials are not configured in the server environment." },
        { status: 500 }
      );
    }

    const client = new ApifyClient({ token });
    
    // Configure Apify input
    const maxReviews = parseInt(process.env.MAX_REVIEW_IMAGES || "100");
    const maxImages = parseInt(process.env.MAX_BUSINESS_IMAGES || "100");
    const input = {
      startUrls: [{ url: finalUrl }],
      maxReviews,
      maxImages,
      language: "en"
    };

    // Run the Actor with a timeout using Promise.race
    const runPromise = client.actor(actorId).call(input);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Apify Actor timeout exceeded")), timeoutSecs * 1000)
    );

    const run = (await Promise.race([runPromise, timeoutPromise])) as any;
    
    // Fetch dataset
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    
    if (items.length === 0) {
      return NextResponse.json(
        { error: "No data returned from the Apify Actor for this URL." },
        { status: 404 }
      );
    }

    const place = items[0] as any;
    const businessName = place.title || "Unknown_Business";
    
    // Clean folder name to prevent filesystem issues
    const safeBusinessName = businessName.replace(/[^a-zA-Z0-9 _-]/g, '').trim();
    
    // Generate folder name with timestamp
    const now = new Date();
    const timestamp = now.getFullYear() + "-" + 
      String(now.getMonth() + 1).padStart(2, '0') + "-" + 
      String(now.getDate()).padStart(2, '0') + "_" + 
      String(now.getHours()).padStart(2, '0') + "-" + 
      String(now.getMinutes()).padStart(2, '0') + "-" + 
      String(now.getSeconds()).padStart(2, '0');
      
    const folderName = `${safeBusinessName}_${timestamp}`;
    const downloadsDir = path.join(process.cwd(), "downloads");
    const businessDir = path.join(downloadsDir, folderName);
    
    // Create folders
    const imagesDir = path.join(businessDir, "images");
    const reviewImagesDir = path.join(businessDir, "review-images");
    
    fs.mkdirSync(businessDir, { recursive: true });
    fs.mkdirSync(imagesDir, { recursive: true });
    fs.mkdirSync(reviewImagesDir, { recursive: true });

    // Save raw response for verification
    fs.writeFileSync(path.join(businessDir, "raw-response.json"), JSON.stringify(items, null, 2));

    // Parse business.json
    const businessData = {
      "Business Name": place.title,
      "Rating": place.totalScore,
      "Review Count": place.reviewsCount
    };
    fs.writeFileSync(path.join(businessDir, "business.json"), JSON.stringify(businessData, null, 2));

    // Parse reviews.json
    const reviewsData = (place.reviews || []).map((review: any) => ({
      "Author Name": review.name || null,
      "Rating": review.stars,
      "Comment": review.text || ""
    }));
    fs.writeFileSync(path.join(businessDir, "reviews.json"), JSON.stringify(reviewsData, null, 2));

    // --- Image Downloading Phase 3 ---
    
    let businessImagesFound = 0;
    let businessImagesDownloaded = 0;
    let reviewImagesFound = 0;
    let reviewImagesDownloaded = 0;
    const failedDownloads: string[] = [];
    
    // 1. Business Images Deduplication
    const businessImageUrlsSet = new Set<string>();
    for (const img of (place.imageUrls || [])) {
      if (img) businessImageUrlsSet.add(img);
    }
    const businessImageUrls = Array.from(businessImageUrlsSet);
    businessImagesFound = businessImageUrls.length;

    // 2. Review Images Deduplication
    const reviewImageUrlsSet = new Set<string>();
    for (const review of (place.reviews || [])) {
      for (const img of (review.reviewImageUrls || [])) {
        if (img) reviewImageUrlsSet.add(img);
      }
    }
    const reviewImageUrls = Array.from(reviewImageUrlsSet);
    reviewImagesFound = reviewImageUrls.length;

    // Helper to extract extension or default to .jpg
    const getExt = (urlStr: string) => {
      try {
        const parsed = new URL(urlStr);
        const ext = path.extname(parsed.pathname);
        return ext || '.jpg';
      } catch {
        return '.jpg';
      }
    };

    // Download Business Images
    for (let i = 0; i < businessImageUrls.length; i++) {
      const url = businessImageUrls[i];
      const filename = `image${String(i + 1).padStart(3, '0')}${getExt(url)}`;
      const success = await downloadImage(url, path.join(imagesDir, filename));
      if (success) {
        businessImagesDownloaded++;
      } else {
        failedDownloads.push(url);
      }
    }

    // Download Review Images
    for (let i = 0; i < reviewImageUrls.length; i++) {
      const url = reviewImageUrls[i];
      const filename = `review-image${String(i + 1).padStart(3, '0')}${getExt(url)}`;
      const success = await downloadImage(url, path.join(reviewImagesDir, filename));
      if (success) {
        reviewImagesDownloaded++;
      } else {
        failedDownloads.push(url);
      }
    }

    // Write download-report.json
    const reportData = {
      businessImagesFound,
      businessImagesDownloaded,
      reviewImagesFound,
      reviewImagesDownloaded,
      failedDownloads
    };
    fs.writeFileSync(path.join(businessDir, "download-report.json"), JSON.stringify(reportData, null, 2));

    // Create a ZIP of the generated business folder
    const AdmZip = require("adm-zip");
    const zip = new AdmZip();
    zip.addLocalFolder(businessDir);
    zip.writeZip(path.join(downloadsDir, `${folderName}.zip`));

    return NextResponse.json({ success: true, folder: folderName });
  } catch (error: any) {
    console.error("Scrape Error:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred during scraping." },
      { status: 500 }
    );
  }
}
