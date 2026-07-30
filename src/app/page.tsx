"use client";

import { useState, useEffect } from "react";
import { Download, FolderOpen, Loader2, MapPin, AlertCircle, CheckCircle2, Image as ImageIcon, MessageSquare, Calendar } from "lucide-react";

type DownloadStatus = "Idle" | "Validating" | "Scraping" | "Downloading Images" | "Success" | "Error";

interface CompletedDownload {
  name: string;
  path: string;
  createdDate: string;
  businessImagesDownloaded: number;
  reviewImagesDownloaded: number;
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<DownloadStatus>("Idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [downloads, setDownloads] = useState<CompletedDownload[]>([]);

  useEffect(() => {
    fetchDownloads();
  }, []);

  const fetchDownloads = async () => {
    try {
      const res = await fetch("/api/downloads");
      if (res.ok) {
        const data = await res.json();
        setDownloads(data.downloads || []);
      }
    } catch (err) {
      console.error("Failed to fetch downloads", err);
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) return;
    
    setStatus("Validating");
    setErrorMsg("");
    
    try {
      setStatus("Scraping");
      
      const res = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Failed to download");
      }
      
      setStatus("Success");
      setUrl("");
      fetchDownloads();
      
      setTimeout(() => setStatus("Idle"), 5000);
    } catch (err: any) {
      setStatus("Error");
      setErrorMsg(err.message || "An unexpected error occurred");
    }
  };

  const handleOpenFolder = async (folderName: string) => {
    try {
      await fetch("/api/open-folder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folderName }),
      });
    } catch (err) {
      console.error("Failed to open folder", err);
    }
  };

  return (
    <main className="min-h-screen p-8 md:p-16 flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            StoreSnap Agent
          </h1>
          <p className="text-muted-foreground text-lg">
            Download Google Maps Business data and images locally.
          </p>
        </div>

        {/* Input Section */}
        <div className="glass-card p-6 rounded-2xl space-y-4">
          <label className="block text-sm font-medium text-muted-foreground">
            Google Maps Business URL
          </label>
          <div className="flex gap-3 flex-col sm:flex-row">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://maps.google.com/..."
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={status !== "Idle" && status !== "Success" && status !== "Error"}
              />
            </div>
            <button
              onClick={handleDownload}
              disabled={!url || (status !== "Idle" && status !== "Success" && status !== "Error")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800/50 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 whitespace-nowrap"
            >
              {status === "Validating" || status === "Scraping" || status === "Downloading Images" ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Download className="h-5 w-5" />
              )}
              Download
            </button>
          </div>
          
          {/* Status Indicators */}
          {status !== "Idle" && (
            <div className={`p-4 rounded-xl flex items-center gap-3 ${
              status === "Error" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
              status === "Success" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
              "bg-blue-500/10 text-blue-400 border border-blue-500/20"
            }`}>
              {status === "Error" && <AlertCircle className="h-5 w-5" />}
              {status === "Success" && <CheckCircle2 className="h-5 w-5" />}
              {(status === "Validating" || status === "Scraping" || status === "Downloading Images") && (
                <Loader2 className="h-5 w-5 animate-spin" />
              )}
              
              <div className="flex-1">
                <p className="font-medium">
                  {status === "Validating" && "Validating URL..."}
                  {status === "Scraping" && "Scraping data and downloading images... (This might take a minute)"}
                  {status === "Success" && "Download completed successfully!"}
                  {status === "Error" && "Download Failed"}
                </p>
                {status === "Error" && errorMsg && (
                  <p className="text-sm opacity-80 mt-1">{errorMsg}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Downloads List */}
        <div className="glass-card p-6 rounded-2xl space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FolderOpen className="h-5 w-5 text-purple-400" />
            Completed Downloads
          </h2>
          
          {downloads.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground border border-dashed border-white/10 rounded-xl">
              No downloads yet. Your scraped businesses will appear here.
            </div>
          ) : (
            <div className="space-y-4">
              {downloads.map((download, idx) => {
                // Parse business name from folder name by stripping the timestamp part
                const businessNameMatch = download.name.match(/^(.*?)_\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}$/);
                const businessName = businessNameMatch ? businessNameMatch[1] : download.name;
                
                return (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-slate-900/40 border border-white/5 rounded-xl hover:bg-slate-900/60 transition-colors gap-4">
                    <div className="flex-1 space-y-2 overflow-hidden">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg truncate text-white">{businessName}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{new Date(download.createdDate).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <ImageIcon className="h-3.5 w-3.5" />
                          <span>{download.businessImagesDownloaded} Business Images</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MessageSquare className="h-3.5 w-3.5" />
                          <span>{download.reviewImagesDownloaded} Review Images</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleOpenFolder(download.name)}
                      className="w-full sm:w-auto px-4 py-2.5 bg-white/5 hover:bg-white/10 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap border border-white/10"
                    >
                      <FolderOpen className="h-4 w-4" />
                      Open Folder
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
