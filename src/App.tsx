import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroArticle } from "@/components/news/HeroArticle";
import { ArticleCard } from "@/components/news/ArticleCard";
import { Sidebar } from "@/components/news/Sidebar";
import { Ticker } from "@/components/news/Ticker";
import { 
  mainArticle, 
  subArticles, 
  latestNews, 
  techArticles, 
  sportsArticles,
  economyArticles,
  politicsArticles
} from "@/data/articles";
import { ChevronLeft } from "lucide-react";

function SectionHeader({ title, color = "bg-blue-600" }: { title: string; color?: string }) {
  return (
    <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-2">
      <h2 className={`text-2xl font-bold border-r-4 ${color} pr-3`}>{title}</h2>
      <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1">
        לכל הכתבות
        <ChevronLeft size={16} />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      
      <main className="pb-16">
        {/* Ticker */}
        <div className="container mx-auto px-4 py-4">
          <Ticker />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <HeroArticle article={mainArticle} />
            </div>
            <div className="flex flex-col gap-6">
              {subArticles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="horizontal" />
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column (Main Feed) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Latest News */}
              <section>
                <SectionHeader title="חדשות אחרונות" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {latestNews.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>

              {/* Politics Section */}
              <section>
                <SectionHeader title="פוליטיקה" color="bg-blue-600" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {politicsArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>

              {/* Economy Section */}
              <section>
                <SectionHeader title="כלכלה" color="bg-green-600" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {economyArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>

              {/* Tech Section */}
              <section>
                <SectionHeader title="טכנולוגיה ומדע" color="bg-purple-600" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {techArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>

              {/* Sports Section */}
              <section>
                <SectionHeader title="ספורט" color="bg-orange-600" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  {sportsArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>

              {/* Ad Banner */}
              <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 text-gray-400 font-medium">
                שטח פרסום
              </div>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-1">
              <Sidebar articles={latestNews.slice(0, 5)} />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
