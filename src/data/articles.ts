export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  isBreaking?: boolean;
}

export const categories = [
  { id: "politics", name: "פוליטיקה", color: "bg-blue-600" },
  { id: "economy", name: "כלכלה", color: "bg-green-600" },
  { id: "tech", name: "טכנולוגיה", color: "bg-purple-600" },
  { id: "sports", name: "ספורט", color: "bg-orange-600" },
  { id: "world", name: "עולם", color: "bg-red-600" },
  { id: "culture", name: "תרבות", color: "bg-pink-600" },
];

export const mainArticle: Article = {
  id: "main-1",
  title: "המהפכה הירוקה: ישראל מובילה בחדשנות אנרגטית עם פרויקט הענק בנגב",
  summary: "פרויקט האנרגיה הסולארית החדש בנגב צפוי לספק חשמל למאות אלפי בתי אב ולהפחית משמעותית את זיהום האוויר. מומחים טוענים: זהו צעד היסטורי למשק האנרגיה הישראלי.",
  category: "tech",
  author: "דניאל כהן",
  date: "2024-03-15T10:00:00",
  imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
  isBreaking: false,
};

export const subArticles: Article[] = [
  {
    id: "sub-1",
    title: "הבורסה בתל אביב רושמת עליות שערים חדות",
    summary: "מדד ת\"א 35 עלה ב-2.5% בעקבות דוחות כספיים חיוביים של חברות הטכנולוגיה הגדולות.",
    category: "economy",
    author: "מיכל לוי",
    date: "2024-03-15T09:30:00",
    imageUrl: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
  },
  {
    id: "sub-2",
    title: "נבחרת ישראל בכדורגל מתכוננת למשחק המכריע",
    summary: "המאמן הלאומי אופטימי לקראת המפגש מול איטליה במוקדמות היורו.",
    category: "sports",
    author: "יוסי בניון",
    date: "2024-03-15T08:45:00",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "sub-3",
    title: "תערוכת האמנות החדשה שכבשה את תל אביב",
    summary: "מוזיאון תל אביב מציג תערוכה רטרוספקטיבית לאמן הבינלאומי המוערך.",
    category: "culture",
    author: "נועה שחר",
    date: "2024-03-14T18:00:00",
    imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=2041&auto=format&fit=crop",
  },
  {
    id: "sub-4",
    title: "משבר האקלים: ועידת הפסגה בפריז נפתחה",
    summary: "מנהיגי העולם מתכנסים לדון בצעדים דחופים לצמצום פליטת גזי החממה.",
    category: "world",
    author: "רונן ברגמן",
    date: "2024-03-14T16:20:00",
    imageUrl: "https://images.unsplash.com/photo-1569163139599-0f4517e36b51?q=80&w=2070&auto=format&fit=crop",
  },
];

export const latestNews: Article[] = [
  {
    id: "latest-1",
    title: "משרד החינוך מפרסם את רפורמת הבגרויות החדשה",
    summary: "שינויים משמעותיים במבנה הבחינות ובשיטת הלימוד בתיכונים.",
    category: "politics",
    author: "שירה גולן",
    date: "2024-03-15T11:15:00",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
  },
  {
    id: "latest-2",
    title: "אפל משיקה את האייפון החדש: כל החידושים",
    summary: "מצלמה משופרת, סוללה חזקה יותר ועיצוב חדשני.",
    category: "tech",
    author: "עידן בן טובים",
    date: "2024-03-15T10:45:00",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop",
  },
  {
    id: "latest-3",
    title: "הפועל ירושלים זכתה בגביע המדינה בכדורסל",
    summary: "ניצחון דרמטי בהארכה מול מכבי תל אביב.",
    category: "sports",
    author: "אבי סגל",
    date: "2024-03-14T22:30:00",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
  },
  {
    id: "latest-4",
    title: "הסרט הישראלי החדש שמועמד לאוסקר",
    summary: "הבמאי הצעיר כובש את הוליווד עם יצירה מרגשת.",
    category: "culture",
    author: "יאיר רוה",
    date: "2024-03-14T20:00:00",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "latest-5",
    title: "האינפלציה בארה\"ב יורדת במפתיע",
    summary: "הנתונים המעודדים עשויים להוביל להורדת ריבית מוקדמת.",
    category: "economy",
    author: "גיא בן סימון",
    date: "2024-03-14T19:15:00",
    imageUrl: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "latest-6",
    title: "סופת שלגים נדירה פוקדת את ירושלים",
    summary: "הבירה נצבעה בלבן, הלימודים בוטלו.",
    category: "world",
    author: "דני רופ",
    date: "2024-03-14T08:00:00",
    imageUrl: "https://images.unsplash.com/photo-1483664852095-d6cc6870705d?q=80&w=2070&auto=format&fit=crop",
  },
];

export const techArticles: Article[] = [
  {
    id: "tech-1",
    title: "בינה מלאכותית: העתיד כבר כאן",
    summary: "כיצד ה-AI משנה את שוק העבודה העולמי.",
    category: "tech",
    author: "רוני דהן",
    date: "2024-03-13T14:00:00",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "tech-2",
    title: "סייבר: מתקפה רחבת היקף על בנקים באירופה",
    summary: "האקרים דורשים כופר בביטקוין.",
    category: "tech",
    author: "אמיר רז",
    date: "2024-03-13T12:00:00",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "tech-3",
    title: "רכב חשמלי: טסלה מורידה מחירים בישראל",
    summary: "התחרות בשוק הרכב מתחממת.",
    category: "tech",
    author: "דני קושמרו",
    date: "2024-03-12T16:00:00",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "tech-4",
    title: "סטארטאפ ישראלי נמכר במיליארד דולר",
    summary: "האקזיט הגדול של השנה בתחום הסייבר.",
    category: "tech",
    author: "ענבל אור",
    date: "2024-03-12T10:00:00",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  },
];

export const sportsArticles: Article[] = [
  {
    id: "sports-1",
    title: "מכבי תל אביב החתימה חלוץ זר חדש",
    summary: "השחקן הברזילאי צפוי לנחות מחר בישראל ולעבור בדיקות רפואיות.",
    category: "sports",
    author: "נדב צנציפר",
    date: "2024-03-15T12:00:00",
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "sports-2",
    title: "אליפות העולם באתלטיקה: שיא עולם חדש בריצת 100 מטר",
    summary: "האצן הג'מייקני עצר את השעון על 9.55 שניות והדהים את העולם.",
    category: "sports",
    author: "אבינעם פורת",
    date: "2024-03-14T20:00:00",
    imageUrl: "https://images.unsplash.com/photo-1552674605-469523f54050?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "sports-3",
    title: "הדרבי התל אביבי: הכרטיסים אזלו תוך דקות",
    summary: "טירוף לקראת המשחק הגדול בבלומפילד בשבת הקרובה.",
    category: "sports",
    author: "משה שיינמן",
    date: "2024-03-14T10:00:00",
    imageUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "sports-4",
    title: "טניס: ג'וקוביץ' זכה בטורניר ווימבלדון",
    summary: "הטניסאי הסרבי גבר על יריבו הספרדי בגמר מותח של 5 מערכות.",
    category: "sports",
    author: "סער גיט",
    date: "2024-03-13T18:00:00",
    imageUrl: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2070&auto=format&fit=crop",
  },
];

export const economyArticles: Article[] = [
  {
    id: "economy-1",
    title: "בנק ישראל העלה את הריבית ב-0.5%",
    summary: "הנגיד מסביר: \"האינפלציה עדיין גבוהה, חייבים לפעול בנחישות\".",
    category: "economy",
    author: "גד ליאור",
    date: "2024-03-15T16:00:00",
    imageUrl: "https://images.unsplash.com/photo-1565514020176-dbf2277cc165?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "economy-2",
    title: "מחירי הדיור ממשיכים לעלות: זינוק של 10% בשנה",
    summary: "הלמ\"ס מפרסמת נתונים מדאיגים על שוק הנדל\"ן.",
    category: "economy",
    author: "הילה ציאון",
    date: "2024-03-14T14:00:00",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: "economy-3",
    title: "השקל מתחזק מול הדולר והאירו",
    summary: "המסחר במט\"ח נפתח במגמה חיובית למטבע המקומי.",
    category: "economy",
    author: "יוסי הטוני",
    date: "2024-03-13T09:00:00",
    imageUrl: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
  },
  {
    id: "economy-4",
    title: "רשת המרכולים הגדולה הודיעה על הוזלת מחירים",
    summary: "סל הקניות לחג צפוי להיות זול יותר השנה.",
    category: "economy",
    author: "מירב קריסטל",
    date: "2024-03-12T11:00:00",
    imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2038&auto=format&fit=crop",
  },
];

export const politicsArticles: Article[] = [
  {
    id: "politics-1",
    title: "הכנסת אישרה את התקציב בקריאה ראשונה",
    summary: "לאחר דיון סוער שנמשך אל תוך הלילה, חברי הכנסת הצביעו בעד.",
    category: "politics",
    author: "מורן אזולאי",
    date: "2024-03-15T02:00:00",
    imageUrl: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2033&auto=format&fit=crop",
  },
  {
    id: "politics-2",
    title: "סקר מנדטים חדש: הליכוד מתחזק, יש עתיד נחלשת",
    summary: "לו הבחירות היו נערכות היום, כך הייתה נראית המפה הפוליטית.",
    category: "politics",
    author: "עמית סגל",
    date: "2024-03-14T20:00:00",
    imageUrl: "https://images.unsplash.com/photo-1529101091760-6149d4c46b29?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "politics-3",
    title: "שר החוץ ייפגש עם מזכיר המדינה האמריקאי",
    summary: "השניים ידונו באתגרים הביטחוניים במזרח התיכון.",
    category: "politics",
    author: "איתמר אייכנר",
    date: "2024-03-13T15:00:00",
    imageUrl: "https://images.unsplash.com/photo-1540910419868-474947cebacb?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: "politics-4",
    title: "המחאה נגד הרפורמה המשפטית מתחדשת",
    summary: "מארגני המחאה הודיעו על הפגנת ענק במוצאי שבת בקפלן.",
    category: "politics",
    author: "סיון חילאי",
    date: "2024-03-12T19:00:00",
    imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop",
  },
];

export const breakingNews = [
  "ראש הממשלה יכנס מסיבת עיתונאים הערב ב-20:00",
  "רעידת אדמה בעוצמה 5.2 הורגשה בצפון הארץ",
  "הדולר ממשיך לטפס: שער יציג 3.85 ש\"ח",
  "פקקי ענק בכביש החוף בעקבות תאונה",
];
