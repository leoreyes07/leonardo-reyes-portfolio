import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-28 pb-20">
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
          <Link to="/projects" className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold hover:shadow-[0_0_20px_rgba(192,193,255,0.3)] transition-all flex items-center gap-2">
            {t('hero.viewProjects')}
            <ArrowRight size={18} />
          </Link>
          <a
            href={`${import.meta.env.BASE_URL}CV_Dummy.pdf`}
            download="CV_Leonardo_Reyes.pdf"
            className="px-8 py-4 rounded-xl border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-2"
          >
            <Download size={18} />
            {t('hero.downloadCv')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
