import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = 'en';
  
  private translations: {[key: string]: {[key: string]: string}} = {
    en: {
      'login': 'Login',
      'username': 'Username',
      'password': 'Password',
      'dashboard': 'Dashboard',
      'overview': 'Overview',
      'employees': 'Employees',
      'departments': 'Departments',
      'reports': 'Reports',
      'settings': 'Settings',
      'logout': 'Logout',
      'totalEmployees': 'Total Employees',
      'employeeManagement': 'Employee Management',
      'addEmployee': 'Add Employee',
      'name': 'Name',
      'email': 'Email',
      'department': 'Department',
      'position': 'Position',
      'actions': 'Actions',
      'edit': 'Edit',
      'delete': 'Delete',
      'selectLanguage': 'Select Language',
      'register': 'Register',
      'fullName': 'Full Name',
      'confirmPassword': 'Confirm Password',
      'profile': 'Profile'
    },
    hi: {
      'login': 'लॉगिन',
      'username': 'उपयोगकर्ता नाम',
      'password': 'पासवर्ड',
      'dashboard': 'डैशबोर्ड',
      'overview': 'अवलोकन',
      'employees': 'कर्मचारी',
      'departments': 'विभाग',
      'reports': 'रिपोर्ट',
      'settings': 'सेटिंग्स',
      'logout': 'लॉगआउट',
      'totalEmployees': 'कुल कर्मचारी',
      'employeeManagement': 'कर्मचारी प्रबंधन',
      'addEmployee': 'कर्मचारी जोड़ें',
      'name': 'नाम',
      'email': 'ईमेल',
      'department': 'विभाग',
      'position': 'पद',
      'actions': 'कार्य',
      'edit': 'संपादित करें',
      'delete': 'हटाएं',
      'selectLanguage': 'भाषा चुनें',
      'register': 'पंजीकरण',
      'fullName': 'पूरा नाम',
      'confirmPassword': 'पासवर्ड की पुष्टि करें',
      'profile': 'प्रोफाइल'
    },
    ta: {
      'login': 'உள்நுழைவு',
      'username': 'பயனர் பெயர்',
      'password': 'கடவுச்சொல்',
      'dashboard': 'டாஷ்போர்டு',
      'overview': 'கண்ணோட்டம்',
      'employees': 'ஊழியர்கள்',
      'departments': 'துறைகள்',
      'reports': 'அறிக்கைகள்',
      'settings': 'அமைப்புகள்',
      'logout': 'வெளியேறு',
      'totalEmployees': 'மொத்த ஊழியர்கள்',
      'employeeManagement': 'ஊழியர் மேலாண்மை',
      'addEmployee': 'ஊழியர் சேர்க்க',
      'name': 'பெயர்',
      'email': 'மின்னஞ்சல்',
      'department': 'துறை',
      'position': 'பதவி',
      'actions': 'செயல்கள்',
      'edit': 'திருத்து',
      'delete': 'நீக்கு',
      'selectLanguage': 'மொழி தேர்வு',
      'register': 'பதிவு',
      'fullName': 'முழு பெயர்',
      'confirmPassword': 'கடவுச்சொல் உறுதி',
      'profile': 'விவரம்'
    },
    te: {
      'login': 'లాగిన్',
      'username': 'వినియోగదారు పేరు',
      'password': 'పాస్‌వర్డ్',
      'dashboard': 'డాష్‌బోర్డ్',
      'overview': 'అవలోకనం',
      'employees': 'ఉద్యోగులు',
      'departments': 'విభాగాలు',
      'reports': 'నివేదికలు',
      'settings': 'సెట్టింగులు',
      'logout': 'లాగ్ అవుట్',
      'totalEmployees': 'మొత్తం ఉద్యోగులు',
      'employeeManagement': 'ఉద్యోగి నిర్వహణ',
      'addEmployee': 'ఉద్యోగిని జోడించు',
      'name': 'పేరు',
      'email': 'ఇమెయిల్',
      'department': 'విభాగం',
      'position': 'స్థానం',
      'actions': 'చర్యలు',
      'edit': 'సవరించు',
      'delete': 'తొలగించు',
      'selectLanguage': 'భాష ఎంచుకోండి',
      'register': 'నమోదు',
      'fullName': 'పూర్తి పేరు',
      'confirmPassword': 'పాస్‌వర్డ్ నిర్ధారణ',
      'profile': 'ప్రొఫైల్'
    }
  };

  languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' }
  ];

  setLanguage(lang: string) {
    this.currentLanguage = lang;
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  translate(key: string): string {
    return this.translations[this.currentLanguage][key] || key;
  }
}