import React from "react";
import { breakingNews } from "@/data/articles";
import { Bell } from "lucide-react";

export function Ticker() {
  return (
    <div className="bg-red-600 text-white overflow-hidden py-2 relative flex items-center">
      <div className="absolute right-0 top-0 bottom-0 bg-red-700 px-4 z-10 flex items-center gap-2 font-bold shadow-lg">
        <Bell size={16} className="animate-pulse" />
        <span className="hidden sm:inline">מבזקים</span>
      </div>
      
      <div className="whitespace-nowrap animate-marquee flex items-center gap-8 pr-32 w-max min-w-full shrink-0">
        {breakingNews.map((news, index) => (
          <span key={index} className="inline-flex items-center gap-2 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-white rounded-full opacity-70"></span>
            {news}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {breakingNews.map((news, index) => (
          <span key={`dup-${index}`} className="inline-flex items-center gap-2 text-sm font-medium">
            <span className="w-1.5 h-1.5 bg-white rounded-full opacity-70"></span>
            {news}
          </span>
        ))}
      </div>
    </div>
  );
}
