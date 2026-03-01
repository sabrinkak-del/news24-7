import React from "react";
import { Article, categories } from "@/data/articles";
import { Badge } from "@/components/ui/Badge";
import { Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { he } from "date-fns/locale";

interface ArticleCardProps {
  article: Article;
  variant?: "vertical" | "horizontal";
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = "vertical" }) => {
  const category = categories.find((c) => c.id === article.category);

  if (variant === "horizontal") {
    return (
      <div className="flex gap-4 group cursor-pointer">
        <div className="relative w-1/3 aspect-video overflow-hidden rounded-lg shrink-0">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-bold ${category?.color.replace("bg-", "text-")}`}>
              {category?.name}
            </span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock size={12} />
              {formatDistanceToNow(new Date(article.date), {
                addSuffix: true,
                locale: he,
              })}
            </span>
          </div>
          <h3 className="text-lg font-bold leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="group cursor-pointer flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden rounded-xl mb-4 shadow-sm">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className={`absolute top-3 right-3 ${category?.color} text-white border-none shadow-md`}>
          {category?.name}
        </Badge>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
          <span className="font-semibold text-gray-900">{article.author}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {formatDistanceToNow(new Date(article.date), {
              addSuffix: true,
              locale: he,
            })}
          </span>
        </div>
        <h3 className="text-xl font-bold leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
          {article.summary}
        </p>
      </div>
    </div>
  );
}
