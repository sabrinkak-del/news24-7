import React from "react";
import { Article, categories } from "@/data/articles";
import { Badge } from "@/components/ui/Badge";
import { Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { he } from "date-fns/locale";

interface HeroArticleProps {
  article: Article;
}

export const HeroArticle: React.FC<HeroArticleProps> = ({ article }) => {
  const category = categories.find((c) => c.id === article.category);

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg h-[500px] w-full">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      <div className="absolute bottom-0 right-0 p-8 w-full md:w-2/3 lg:w-1/2 text-white">
        <Badge className={`mb-4 ${category?.color} text-white border-none`}>
          {category?.name}
        </Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 drop-shadow-md">
          {article.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 line-clamp-2 mb-6 font-medium">
          {article.summary}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span className="font-bold text-white">{article.author}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>
              {formatDistanceToNow(new Date(article.date), {
                addSuffix: true,
                locale: he,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
