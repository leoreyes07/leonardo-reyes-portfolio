/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { CodeXml, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

const renderIcon = (iconKey?: string) => {
  if (iconKey === "code-xml") {
    return <CodeXml className="w-8 h-8 text-secondary" />;
  }
  return null;
};

export default function Projects() {
  const { t } = useTranslation();
  const featuredProjects = PROJECTS.filter(p => p.featured);

  if (featuredProjects.length < 3) return null;

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
          <Link
            to="/projects/archive"
            className="text-secondary font-medium hover:text-primary transition-colors flex items-center gap-1 group"
          >
            {t('projects.viewArchive')}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Project 1 (Large) */}
          <motion.a
            href={featuredProjects[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:col-span-8 group relative rounded-2xl overflow-hidden glass-panel flex flex-col justify-end p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 h-[600px] block cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-65 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
              style={{ backgroundImage: `url(${featuredProjects[0].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

            <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex gap-2 mb-4">
                {featuredProjects[0].hasTagBadge && (
                  <span className="px-3 py-1 text-xs font-medium bg-secondary-container/20 text-secondary border border-secondary/20 rounded-full">
                    {t(`projectsData.${featuredProjects[0].key}.tag`)}
                  </span>
                )}
                {featuredProjects[0].tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-secondary-container/20 text-secondary border border-secondary/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold text-on-surface mb-2">{t(`projectsData.${featuredProjects[0].key}.title`)}</h3>
              <p className="text-on-surface-variant line-clamp-2 max-w-2xl font-sans">
                {t(`projectsData.${featuredProjects[0].key}.description`)}
              </p>
            </div>
          </motion.a>

          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Project 2 */}
            <motion.a
              href={featuredProjects[1].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-panel flex flex-col justify-end p-6 border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 flex-1 min-h-[285px] block cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-top opacity-65 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: `url(${featuredProjects[1].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4 flex justify-between items-start opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2 flex-wrap items-center">
                    {featuredProjects[1].hasTagBadge ? (
                      <span className="px-3 py-1 text-xs font-medium bg-fuchsia-500/20 text-fuchsia-300 rounded-full border border-fuchsia-500/30">
                        {t(`projectsData.${featuredProjects[1].key}.tag`)}
                      </span>
                    ) : (
                      renderIcon(featuredProjects[1].iconKey)
                    )}
                    {featuredProjects[1].tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[10px] font-medium bg-fuchsia-500/20 text-fuchsia-300 rounded-full border border-fuchsia-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="text-fuchsia-400 shrink-0 ml-2" size={20} />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-1">{t(`projectsData.${featuredProjects[1].key}.title`)}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 font-sans">
                  {t(`projectsData.${featuredProjects[1].key}.description`)}
                </p>
              </div>
            </motion.a>

            {/* Project 3 */}
            <motion.a
              href={featuredProjects[2].link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-tertiary-container/20 hover:border-tertiary/40 transition-all duration-500 p-6 flex flex-col justify-end flex-1 min-h-[285px] block cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-top opacity-65 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                style={{ backgroundImage: `url(${featuredProjects[2].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              
              <div className="relative z-10">
                <div className="mb-4 flex justify-between items-start opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2 flex-wrap items-center">
                    <span className="px-3 py-1 text-xs font-medium bg-tertiary-container/20 text-tertiary rounded-full border border-tertiary/20">
                      {t(`projectsData.${featuredProjects[2].key}.tag`)}
                    </span>
                    {featuredProjects[2].tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[10px] font-medium bg-tertiary-container/20 text-tertiary rounded-full border border-tertiary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="text-tertiary/60 shrink-0 ml-2" size={20} />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-1">{t(`projectsData.${featuredProjects[2].key}.title`)}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 font-sans">
                  {t(`projectsData.${featuredProjects[2].key}.description`)}
                </p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
