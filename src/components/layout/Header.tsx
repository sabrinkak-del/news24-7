import React from "react";
import { Menu, Search, User, X } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/articles";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const date = new Date().toLocaleDateString("he-IL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-10 items-center justify-between text-xs text-gray-500 border-b border-gray-100">
          <div>{date}</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600">אודות</a>
            <a href="#" className="hover:text-blue-600">צור קשר</a>
            <a href="#" className="hover:text-blue-600">פרסם אצלנו</a>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex h-16 items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-1 text-center lg:text-right lg:flex-none">
            <a href="/" className="text-3xl font-black tracking-tighter text-blue-900">
              חדשות<span className="text-red-600">24/7</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 font-medium">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              <User size={16} />
              <span>התחברות</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white p-4">
          <nav className="flex flex-col gap-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-lg font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {cat.name}
              </a>
            ))}
            <hr className="my-2" />
            <button className="flex items-center gap-2 text-blue-600 font-medium">
              <User size={20} />
              <span>התחברות / הרשמה</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
