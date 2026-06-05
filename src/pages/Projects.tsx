import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { CodeXml, ExternalLink, ArrowRight } from "lucide-react";

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

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-surface relative min-h-[calc(100vh-80px)] pt-28">
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
  );
}
