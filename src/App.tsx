/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowDown,
  ArrowRight,
  ExternalLink,
  ShoppingCart,
  Cpu,
  Layers,
  Menu,
  X,
  CodeXml,
  BrainCircuit,
  Settings2
} from "lucide-react";
import { useState, useEffect } from "react";
import CustomCursor from "./components/CustomCursor";

const PROJECTS = [
  {
    id: 1,
    key: "p1",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://api.microlink.io/?url=https://leoreyes07.github.io/development_agency_web/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://leoreyes07.github.io/development_agency_web/",
    size: "large",
  },
  {
    id: 2,
    key: "p2",
    tags: ["React", "API"],
    icon: <CodeXml className="w-8 h-8 text-secondary" />,
    image: "https://api.microlink.io/?url=https://dogstagram-1.netlify.app/&screenshot=true&meta=false&embed=screenshot.url&force=true",
    link: "https://dogstagram-1.netlify.app/",
    size: "small",
  },
  {
    id: 3,
    key: "p3",
    tags: ["React", "E-Commerce"],
    image: "https://api.microlink.io/?url=https://leoreyes07.github.io/NicaGamer/&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://leoreyes07.github.io/NicaGamer/",
    size: "small",
  }
];

const SKILLS = [
  { key: "frontend", level: 95, color: "bg-secondary" },
  { key: "backend", level: 88, color: "bg-primary" },
  { key: "cloud", level: 75, color: "bg-tertiary-container text-white" },
];

export default function App() {
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-surface/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-on-surface"
          >
            DevPortfolio
          </motion.div>
          {['projects', 'skills', 'experience', 'contact'].map((key) => (
            <a key={key} href={`#${key}`}
              className="group relative hidden md:inline-flex items-center justify-center px-5 py-2 rounded-xl text-on-surface-variant font-medium text-sm transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 group-hover:text-on-primary transition-colors duration-500">
                {t(`nav.${key}`)}
              </span>
            </a>
          ))}
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
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${i18n.language === 'en' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage('es')}
              aria-label="Español"
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${i18n.language === 'es' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              ES
            </button>
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
                  <a
                    key={item}
                    href={`#${item}`}
                    className="group relative w-full py-3 px-4 rounded-xl text-center text-on-surface font-medium transition-all duration-500 overflow-hidden"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 group-hover:text-on-primary transition-colors duration-500">
                      {t(`nav.${item}`)}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>


      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -40, 0],
                y: [0, 60, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]"
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-surface-container-highest shadow-2xl mx-auto mb-8"
            >
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Leonardo Reyes Profile"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high border border-outline-variant/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(72,218,218,0.8)]" />
              <span className="text-sm font-medium text-on-surface-variant">{t('hero.available')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-on-surface mb-6 leading-tight"
            >
              {t('hero.title', { name: 'Leonardo Reyes' })}<br />
              {t('hero.subtitle')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold hover:shadow-[0_0_20px_rgba(192,193,255,0.3)] transition-all flex items-center gap-2">
                {t('hero.viewProjects')}
                <ArrowDown size={18} />
              </button>
              <button className="px-8 py-4 rounded-xl border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-2">
                <Download size={18} />
                {t('hero.downloadCv')}
              </button>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-surface relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-4"
                >
                  {t('projects.title')}
                </motion.h2>
                <p className="text-on-surface-variant text-lg max-w-xl font-sans">
                  {t('projects.description')}
                </p>
              </div>
              <button className="text-secondary font-medium hover:text-primary transition-colors flex items-center gap-1 group">
                {t('projects.viewArchive')}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Project 1 (Large) */}
              <motion.a
                href={PROJECTS[0].link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                className="md:col-span-8 group relative rounded-2xl overflow-hidden glass-panel flex flex-col justify-end p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 h-[600px] block cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  style={{ backgroundImage: `url(${PROJECTS[0].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

                <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex gap-2 mb-4">
                    {PROJECTS[0].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-secondary-container/20 text-secondary border border-secondary/20 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-on-surface mb-2">{t(`projectsData.${PROJECTS[0].key}.title`)}</h3>
                  <p className="text-on-surface-variant line-clamp-2 max-w-2xl font-sans">
                    {t(`projectsData.${PROJECTS[0].key}.description`)}
                  </p>
                </div>
              </motion.a>

              <div className="md:col-span-4 flex flex-col gap-6">
                {/* Project 2 */}
                <motion.a
                  href={PROJECTS[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: 0.1 }}
                  className="group relative rounded-2xl overflow-hidden glass-panel flex flex-col justify-end p-6 border border-outline-variant/10 hover:border-secondary/30 transition-all duration-500 flex-1 min-h-[285px] block cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-top opacity-20 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                    style={{ backgroundImage: `url(${PROJECTS[1].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/20" />
                  <div className="relative z-10">
                    <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity flex justify-between items-start">
                      {PROJECTS[1].icon}
                      <ExternalLink className="text-secondary/60" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-on-surface mb-1">{t(`projectsData.${PROJECTS[1].key}.title`)}</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2 font-sans">
                      {t(`projectsData.${PROJECTS[1].key}.description`)}
                    </p>
                  </div>
                </motion.a>

                {/* Project 3 */}
                <motion.a
                  href={PROJECTS[2].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: 0.2 }}
                  className="group relative rounded-2xl overflow-hidden glass-panel border border-tertiary-container/20 hover:border-tertiary/40 transition-all duration-500 p-6 flex flex-col justify-end flex-1 min-h-[285px] block cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-top opacity-20 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                    style={{ backgroundImage: `url(${PROJECTS[2].image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/20" />
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex justify-between items-start opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="px-3 py-1 text-xs font-medium bg-tertiary-container/20 text-tertiary rounded-full border border-tertiary/20">
                        {t(`projectsData.${PROJECTS[2].key}.tag`)}
                      </span>
                      <ExternalLink className="text-tertiary/60" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-on-surface mb-1">{t(`projectsData.${PROJECTS[2].key}.title`)}</h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2 font-sans">
                      {t(`projectsData.${PROJECTS[2].key}.description`)}
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-surface container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-on-surface mb-12 text-center">{t('experience.title')}</h2>
            <div className="space-y-12">
              {['j1', 'j2', 'j3'].map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 border-l border-white/10 group"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(72,218,218,0.6)]" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-on-surface">{t(`experience.jobs.${key}.company`)}</h3>
                    <span className="text-secondary font-mono text-sm">{t(`experience.jobs.${key}.period`)}</span>
                  </div>
                  <h4 className="text-primary font-medium mb-3">{t(`experience.jobs.${key}.role`)}</h4>
                  <p className="text-on-surface-variant font-sans">{t(`experience.jobs.${key}.desc`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Stack (Skills) */}
        <section id="skills" className="py-24 bg-surface-container-low border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-4xl font-bold text-on-surface mb-6"
                >
                  {t('skills.title')}
                </motion.h2>
                <p className="text-on-surface-variant text-lg mb-8 font-sans leading-relaxed">
                  {t('skills.description')}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <CodeXml />, key: "typescript" },
                    { icon: <BrainCircuit />, key: "ai" },
                    { icon: <Layers />, key: "architecture" },
                    { icon: <Settings2 />, key: "optimizations" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-high border border-white/5"
                    >
                      <span className="text-secondary">{item.icon}</span>
                      <span className="font-medium">{t(`skills.items.${item.key}`)}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-8 p-8 rounded-2xl glass-panel border border-white/5">
                {SKILLS.map((skill, i) => (
                  <div key={skill.key} className="flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                      <span className="font-bold text-on-surface">{t(`skillsData.${skill.key}`)}</span>
                      <span className="text-secondary font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full rounded-full ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-on-surface mb-8">
              {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span> {t('contact.titleEnd')}
            </h2>
            <p className="text-on-surface-variant text-xl mb-12 font-sans">
              {t('contact.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:leoreyes_07@outlook.com" className="px-10 py-5 rounded-xl bg-primary text-on-primary font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-3">
                <Mail size={24} />
                {t('contact.button')}
              </a>
            </div>
          </div>
        </section>
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
            <a href="#" className="text-on-surface-variant hover:text-secondary p-2 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
