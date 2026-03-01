import React from "react";
import { Article } from "@/data/articles";
import { ArticleCard } from "./ArticleCard";
import { ArrowLeft } from "lucide-react";

interface SidebarProps {
  articles: Article[];
}

export function Sidebar({ articles }: SidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Trending Section */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold border-r-4 border-blue-600 pr-3">הכי נקראים</h3>
        </div>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="flex gap-4 items-start">
                <span className="text-3xl font-black text-gray-200 leading-none group-hover:text-blue-200 transition-colors">
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                    {article.title}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {article.category} • {article.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-blue-900 text-white p-6 rounded-xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 rounded-full -ml-12 -mb-12 opacity-50"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">הצטרפו לניוזלטר שלנו</h3>
          <p className="text-blue-200 text-sm mb-6">כל העדכונים החשובים ישירות למייל, מדי בוקר.</p>
          <button className="w-full bg-white text-blue-900 font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
            הרשמה מהירה
            <ArrowLeft size={16} />
          </button>
        </div>
      </div>

      {/* Ad Placeholder */}
      <div className="bg-gray-200 h-[300px] rounded-xl flex items-center justify-center text-gray-400 font-medium border-2 border-dashed border-gray-300">
        פרסומת
      </div>
    </aside>
  );
}
