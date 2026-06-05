import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { CodeXml, BrainCircuit, Layers, Settings2 } from "lucide-react";

const SKILLS = [
  { key: "frontend", level: 95, color: "bg-secondary" },
  { key: "backend", level: 88, color: "bg-primary" },
  { key: "cloud", level: 75, color: "bg-tertiary-container text-white" },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-surface-container-low border-y border-white/5 min-h-[calc(100vh-80px)] pt-28 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
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
  );
}
