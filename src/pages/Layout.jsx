
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Phone, Mail, MapPin, Moon, Sun, Globe } from 'lucide-react';
import { useTranslation } from './components/translations';

export default function Layout({ children, currentPageName }) {
  const { t, language, isRTL } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
      document.documentElement.setAttribute('dir', savedLanguage === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', savedLanguage);
    } else {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    setCurrentLanguage(newLanguage);
    document.documentElement.setAttribute('dir', newLanguage === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', newLanguage);
    localStorage.setItem('language', newLanguage);
    window.location.reload();
  };

  const navLinks = [
    { name: t.nav.home, page: 'Home' },
    { name: t.nav.about, page: 'About' },
    { name: t.nav.services, page: 'Services' },
    { name: t.nav.sectors, page: 'Sectors' },
    { name: t.nav.whyUs, page: 'WhyUs' },
    { name: t.nav.blog, page: 'Blog' },
    { name: t.nav.contact, page: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');
        
        * {
          font-family: 'Cairo', sans-serif;
        }
        
        :root {
          --primary-blue: #1A3B6C;
          --primary-orange: #F26522;
          --light-gray: #F5F5F5;
        }
        
        .gradient-overlay {
          background: linear-gradient(135deg, rgba(26, 59, 108, 0.95) 0%, rgba(26, 59, 108, 0.85) 100%);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, var(--primary-orange) 0%, #e55812 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(242, 101, 34, 0.3);
        }

        /* Dark Mode Styles */
        .dark {
          background-color: #0f172a;
          color: #e2e8f0;
        }

        .dark nav {
          background-color: #1e293b !important;
        }

        .dark .bg-white {
          background-color: #1e293b !important;
        }

        .dark .text-[#1A3B6C] {
          color: #e2e8f0 !important;
        }

        .dark .text-gray-600,
        .dark .text-gray-700 {
          color: #cbd5e1 !important;
        }

        .dark .bg-[#F5F5F5] {
          background-color: #334155 !important;
        }

        .dark .border-gray-100,
        .dark .border-gray-200 {
          border-color: #334155 !important;
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          right: 0;
          width: 0;
          height: 2px;
          background: var(--primary-orange);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1A3B6C] to-[#2d5a9c] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GBS</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-[#1A3B6C] font-bold text-lg leading-tight">Global Business</div>
                <div className="text-[#F26522] text-sm">& Suppliers</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`nav-link text-sm font-semibold ${
                    currentPageName === link.page
                      ? 'text-[#F26522] active'
                      : 'text-[#1A3B6C] hover:text-[#F26522]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                title={isDark ? t.nav.lightMode : t.nav.darkMode}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-[#F26522]" />
                ) : (
                  <Moon className="w-5 h-5 text-[#1A3B6C]" />
                )}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F5F5F5] transition-colors"
                title={currentLanguage === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
              >
                <Globe className="w-5 h-5 text-[#1A3B6C]" />
                <span className="text-sm font-semibold text-[#1A3B6C]">
                  {currentLanguage === 'ar' ? 'EN' : 'عربي'}
                </span>
              </button>

              <Link
                to={createPageUrl('Contact')}
                className="btn-primary px-6 py-2.5 rounded-full text-white text-sm font-semibold shadow-lg"
              >
                {t.nav.bookConsultation}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#1A3B6C]"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-base font-semibold transition-colors ${
                    currentPageName === link.page
                      ? 'bg-[#F26522] text-white'
                      : 'text-[#1A3B6C] hover:bg-[#F5F5F5]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Theme & Language */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <button
                  onClick={toggleTheme}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F5F5F5] hover:bg-gray-200 transition-colors"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-5 h-5 text-[#F26522]" />
                      <span className="text-sm font-semibold text-[#1A3B6C]">{t.nav.lightMode}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-[#1A3B6C]" />
                      <span className="text-sm font-semibold text-[#1A3B6C]">{t.nav.darkMode}</span>
                    </>
                  )}
                </button>
                
                <button
                  onClick={toggleLanguage}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F5F5F5] hover:bg-gray-200 transition-colors"
                >
                  <Globe className="w-5 h-5 text-[#1A3B6C]" />
                  <span className="text-sm font-semibold text-[#1A3B6C]">
                    {currentLanguage === 'ar' ? 'English' : 'عربي'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/23561745555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 group"
      >
        <div className="relative">
          {/* Ping Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {t.whatsapp.connectVia}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </a>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A3B6C] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F26522] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GBS</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Global Business</div>
                  <div className="text-[#F26522] text-sm">& Suppliers</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.footer.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#F26522]">{t.footer.quickLinks}</h3>
              <ul className="space-y-3">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-gray-300 hover:text-[#F26522] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#F26522]">{t.footer.ourServices}</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>{t.footer.services.trading}</li>
                <li>{t.footer.services.logistics}</li>
                <li>{t.footer.services.facility}</li>
                <li>{t.footer.services.equipment}</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#F26522]">{t.footer.contactUs}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F26522] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    Republic of Chad, City of N'djamena Rue de 40, BP: 7514
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F26522] flex-shrink-0" />
                  <a href="tel:+23561745555" className="text-sm text-gray-300 hover:text-[#F26522]">
                    +235-61745555
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#F26522] flex-shrink-0" />
                  <a href="mailto:info@globizsupplies.com" className="text-sm text-gray-300 hover:text-[#F26522]">
                    info@globizsupplies.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Global Business & Suppliers. {t.footer.allRightsReserved}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
