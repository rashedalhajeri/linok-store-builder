export type Language = 'en' | 'ar' | 'fr' | 'zh';

export const translations = {
  en: {
    storeName: "Store Name",
    storeHandle: "@yourstorehandle",
    storeDescription: "Create your professional online store in minutes",
    showMore: "Show more",
    showLess: "Show less",
    location: "Location",
    allProducts: "All",
    bestSellers: "Best Sellers",
    startNow: "Start Now",
    signIn: "Sign In",
    register: "Register",
    searchStore: "Search for a store",
    features: "Features",
    templates: "Templates",
    pricing: "Pricing",
    support: "Support"
  },
  ar: {
    storeName: "اسم المتجر",
    storeHandle: "@اسم_متجرك",
    storeDescription: "أنشئ متجرك الاحترافي في دقائق",
    showMore: "عرض المزيد",
    showLess: "عرض أقل",
    location: "الموقع",
    allProducts: "الكل",
    bestSellers: "الأكثر مبيعاً",
    startNow: "ابدأ الآن",
    signIn: "تسجيل الدخول",
    register: "التسجيل",
    searchStore: "ابحث عن متجر",
    features: "المميزات",
    templates: "القوالب",
    pricing: "الأسعار",
    support: "الدعم"
  },
  fr: {
    storeName: "Nom de la Boutique",
    storeHandle: "@votreboutique",
    storeDescription: "Créez votre boutique professionnelle en quelques minutes",
    showMore: "Voir plus",
    showLess: "Voir moins",
    location: "Emplacement",
    allProducts: "Tout",
    bestSellers: "Meilleures Ventes",
    startNow: "Commencer",
    signIn: "Connexion",
    register: "S'inscrire",
    searchStore: "Rechercher une boutique",
    features: "Fonctionnalités",
    templates: "Modèles",
    pricing: "Tarifs",
    support: "Support"
  },
  zh: {
    storeName: "店铺名称",
    storeHandle: "@您的店铺",
    storeDescription: "几分钟内创建您的专业在线商店",
    showMore: "显示更多",
    showLess: "显示更少",
    location: "位置",
    allProducts: "全部",
    bestSellers: "畅销产品",
    startNow: "立即开始",
    signIn: "登录",
    register: "注册",
    searchStore: "搜索店铺",
    features: "功能特点",
    templates: "模板",
    pricing: "价格",
    support: "支持"
  }
};

export const languageNames = {
  en: "English",
  ar: "العربية",
  fr: "Français",
  zh: "中文"
};

// Most common languages for e-commerce globally
export const recommendedLanguages = [
  { code: 'en', name: 'English', isPopular: true },
  { code: 'ar', name: 'العربية', isPopular: true },
  { code: 'fr', name: 'Français', isPopular: true },
  { code: 'zh', name: '中文', isPopular: true },
  { code: 'es', name: 'Español', isPopular: true },
  { code: 'hi', name: 'हिन्दी', isPopular: true },
  { code: 'pt', name: 'Português', isPopular: true },
  { code: 'id', name: 'Bahasa Indonesia', isPopular: true },
  { code: 'ru', name: 'Русский', isPopular: true },
  { code: 'ja', name: '日本語', isPopular: true }
];