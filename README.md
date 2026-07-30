# StoreSnap Agent

## Purpose
StoreSnap Agent is a local-first application designed to extract and archive business data, reviews, and high-quality images from Google Maps. It serves as a developer tool to download rich location datasets seamlessly without needing to manually inspect pages or scrape images one by one.

## Features
- **URL Validation**: Verifies standard Google Maps location URLs before processing.
- **Data Scraping**: Uses Apify to extract rich data (business name, rating, total reviews).
- **Review Archival**: Saves raw, unedited user reviews exactly as provided.
- **Image Downloading**: Automatically streams and downloads both business gallery images and review-attached images without quality loss.
- **Automated Zipping**: Bundles the entire downloaded dataset into a portable ZIP file upon completion.
- **Local Dashboard**: Offers a sleek, glassmorphic UI to manage and open local downloaded folders.

## Requirements
- Node.js (v18+)
- An active [Apify](https://apify.com/) account
- Windows/macOS/Linux environment

## Installation
1. Clone this repository to your local machine.
2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables
The application requires an Apify API token and Actor configuration. Create a `.env.local` file in the root of the project with the following keys.

### Example `.env.local`
```env
APIFY_API_TOKEN=your_apify_api_token_here
APIFY_ACTOR_ID=compass/crawler-google-places
APIFY_TIMEOUT_SECONDS=120
MAX_BUSINESS_IMAGES=100
MAX_REVIEW_IMAGES=100
```

## How to Run
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Paste a supported Google Maps URL into the input field and click "Download".

## Supported Input
The application accepts standard Google Maps Place URLs.
### Example Google Maps URL:
`https://www.google.com/maps/place/Empire+State+Building/@40.7484405,-73.9856644,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259a9b3117469:0xd134e199a405a163!8m2!3d40.7484405!4d-73.9856644!16zL20vMDJuZHA`

## Folder Structure
```text
storesnapai/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── downloads/
│   │   │   ├── open-folder/
│   │   │   └── scrape/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── downloads/                  # Auto-generated destination for local scraping
├── public/
├── package.json
├── tailwind.config.ts
└── .env.local                  # Environment variables (not committed)
```

## Output Files
When a scrape is successful, the app generates a timestamped folder inside `downloads/` containing:
- `business.json`: Core business details (Name, Rating, Review Count).
- `reviews.json`: The complete list of unedited reviews.
- `raw-response.json`: The raw JSON payload from the Apify actor.
- `download-report.json`: Analytics of found vs. downloaded images and failures.
- `images/`: Directory containing all high-resolution business gallery images.
- `review-images/`: Directory containing all images attached to user reviews.
- `<Business_Name>_YYYY-MM-DD_HH-MM-SS.zip`: A compressed archive of the entire folder.

### Example Output (`business.json`)
```json
{
  "Business Name": "Empire State Building",
  "Rating": 4.7,
  "Review Count": 127669
}
```
