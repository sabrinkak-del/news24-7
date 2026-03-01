import React, { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Check } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-black tracking-tighter mb-6">
              חדשות<span className="text-red-500">24/7</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              פורטל החדשות המוביל בישראל. עדכונים שוטפים 24 שעות ביממה, 7 ימים בשבוע. כל מה שחשוב לדעת, בזמן אמת.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-sky-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Sections (Expanded) */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">מדורים</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>חדשות היום</a></li>
              <li><a href="#" className="hover:text-white transition-colors">פוליטיקה וביטחון</a></li>
              <li><a href="#" className="hover:text-white transition-colors">כלכלה ועסקים</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ספורט</a></li>
              <li><a href="#" className="hover:text-white transition-colors">תרבות ובידור</a></li>
              <li><a href="#" className="hover:text-white transition-colors">טכנולוגיה ומדע</a></li>
              <li><a href="#" className="hover:text-white transition-colors">בריאות</a></li>
              <li><a href="#" className="hover:text-white transition-colors">נדל"ן</a></li>
              <li><a href="#" className="hover:text-white transition-colors">דעות ופרשנויות</a></li>
            </ul>
          </div>

          {/* More Info & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">מידע נוסף וצרו קשר</h3>
            <ul className="space-y-3 text-slate-400 mb-6">
              <li><a href="#" className="hover:text-white transition-colors">אודות</a></li>
              <li><a href="#" className="hover:text-white transition-colors">תנאי שימוש</a></li>
              <li><a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a></li>
              <li><a href="#" className="hover:text-white transition-colors">דרושים</a></li>
              <li><a href="#" className="hover:text-white transition-colors">פרסום באתר</a></li>
            </ul>
            
            <div className="space-y-3 text-slate-400 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-blue-500" />
                <span>contact@hadashot247.co.il</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-blue-500" />
                <span>*2407 (מוקד אדום)</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-500" />
                <span>רחוב הברזל 10, תל אביב</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2 inline-block">הרשמה לניוזלטר</h3>
            <p className="text-slate-400 mb-4">קבלו את העדכונים החמים ביותר ישירות למייל שלכם. אנחנו מתחייבים לא לשלוח ספאם.</p>
            
            {isSubscribed ? (
              <div className="bg-green-900/30 border border-green-800 rounded-lg p-4 flex items-center gap-3 text-green-400 animate-in fade-in slide-in-from-bottom-2">
                <div className="bg-green-900 p-2 rounded-full">
                  <Check size={16} />
                </div>
                <div>
                  <p className="font-bold">נרשמת בהצלחה!</p>
                  <p className="text-xs opacity-80">בדקו את המייל לאישור.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="הכנס כתובת אימייל" 
                  className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
                >
                  הרשמה
                </button>
                <p className="text-xs text-slate-500 mt-2 text-center">
                  בלחיצה על הרשמה את/ה מאשר/ת את תנאי השימוש ומדיניות הפרטיות.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div>
            &copy; {new Date().getFullYear()} חדשות 24/7. כל הזכויות שמורות.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">הצהרת נגישות</a>
            <a href="#" className="hover:text-slate-300">מפת אתר</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
