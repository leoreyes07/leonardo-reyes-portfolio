import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import CustomCursor from "./CustomCursor";

export default function Layout() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-secondary/30 selection:text-secondary">
      <CustomCursor />
      
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-surface/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="outline-none">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-black tracking-tighter text-on-surface"
            >
              DevPortfolio
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            {['projects', 'skills', 'experience', 'contact'].map((key) => (
              <NavLink
                key={key}
                to={`/${key}`}
                className={({ isActive }) =>
                  `group relative inline-flex items-center justify-center px-5 py-2 rounded-xl font-medium text-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 overflow-hidden ${
                    isActive ? "text-on-primary" : "text-on-surface-variant"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`absolute inset-0 bg-gradient-to-r from-primary to-primary-container transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    ></span>
                    <span className="relative z-10 transition-colors duration-500">
                      {t(`nav.${key}`)}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center">
            <button
              className="md:hidden text-on-surface p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="lang-selector flex items-center gap-1 bg-surface-container-high p-1 rounded-xl border border-white/5 ml-4">
              <button
                onClick={() => i18n.changeLanguage('en')}
                aria-label="English"
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  i18n.language === 'en' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage('es')}
                aria-label="Español"
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  i18n.language === 'es' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-panel border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {['projects', 'skills', 'experience', 'contact'].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item}`}
                    className={({ isActive }) =>
                      `group relative w-full py-3 px-4 rounded-xl text-center font-medium transition-all duration-500 overflow-hidden block ${
                        isActive ? "text-on-primary" : "text-on-surface"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`absolute inset-0 bg-gradient-to-r from-primary to-primary-container transition-opacity duration-500 ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        ></span>
                        <span className="relative z-10 transition-colors duration-500">
                          {t(`nav.${item}`)}
                        </span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Router Outlet */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-surface">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-on-surface-variant text-sm font-sans opacity-60">
            {t('footer.copyright')}
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/leoreyes07" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary p-2 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/leonardo-reyes-8ab61a171" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary p-2 transition-colors">
              <Linkedin size={20} />
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
}
