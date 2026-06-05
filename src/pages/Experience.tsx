import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-surface min-h-[calc(100vh-80px)] pt-28 flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
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
  );
}
