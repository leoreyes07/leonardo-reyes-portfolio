/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ExternalLink, Search, CodeXml, FolderGit2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS, Project } from "../data/projects";

const renderIcon = (iconKey?: string) => {
  if (iconKey === "code-xml") {
    return <CodeXml className="w-6 h-6 text-secondary" />;
  }
  return <FolderGit2 className="w-6 h-6 text-primary" />;
};

export default function ProjectsArchive() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags dynamically
  const availableTags = Array.from(
    new Set(PROJECTS.flatMap((project) => project.tags))
  );

  // Filter projects by both search query and tag selection
  const filteredProjects = PROJECTS.filter((project) => {
    // Get translations for title and description
    const title = t(`projectsData.${project.key}.title`, { lng: i18n.language }).toLowerCase();
    const description = t(`projectsData.${project.key}.description`, { lng: i18n.language }).toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      title.includes(query) ||
      description.includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query));

    const matchesTag = !selectedTag || project.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  // Sort chronologically from oldest to newest (ascending order of GitHub repo ID)
  const sortedProjects = [...filteredProjects].sort((a, b) => a.id - b.id);

  return (
    <section className="py-24 bg-surface relative min-h-[calc(100vh-80px)] pt-28">
      {/* Background radial glow effect */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation / Back Button */}
        <div className="mb-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-sans font-medium text-sm"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
            {t("archive.backToProjects")}
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-on-surface tracking-tight mb-4 font-headline"
          >
            {t("archive.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-on-surface-variant text-lg max-w-2xl font-sans"
          >
            {t("archive.subtitle")}
          </motion.p>
        </div>

        {/* Filters and Search Bar Section */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10 pb-8 border-b border-white/5">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96 group">
            <span className="absolute inset-y-0 left-4 flex items-center text-on-surface-variant/40 group-focus-within:text-secondary transition-colors">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder={t("archive.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-low/60 hover:bg-surface-container-high/60 focus:bg-surface-container-highest/60 text-on-surface font-sans text-sm pl-11 pr-4 py-3 rounded-xl border border-white/5 focus:border-secondary/30 outline-none transition-all duration-300 backdrop-blur-md"
            />
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:flex-1 md:justify-start">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-sans transition-all duration-300 border cursor-pointer ${
                selectedTag === null
                  ? "bg-primary text-on-primary border-primary shadow-lg shadow-primary/20"
                  : "bg-surface-container border-white/5 text-on-surface-variant hover:text-on-surface hover:border-white/10"
              }`}
            >
              {t("archive.all")}
            </button>
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-sans transition-all duration-300 border cursor-pointer ${
                  selectedTag === tag
                    ? "bg-primary text-on-primary border-primary shadow-lg shadow-primary/20"
                    : "bg-surface-container border-white/5 text-on-surface-variant hover:text-on-surface hover:border-white/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid with Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project) => (
              <motion.a
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden glass-panel border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 p-6 flex flex-col justify-between h-[360px] block cursor-pointer"
              >
                {/* Visual Glass Cover Image Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Ambient Radial Hover Glow on Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-surface/40" />

                {/* Top bar of Card */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="p-2.5 rounded-xl bg-surface-container-high/40 border border-white/5 text-on-surface">
                    {renderIcon(project.iconKey)}
                  </div>
                  <span className="p-2 rounded-lg bg-surface-container-high/20 border border-white/5 text-on-surface-variant/40 group-hover:text-primary group-hover:scale-105 transition-all">
                    <ExternalLink size={16} />
                  </span>
                </div>

                {/* Info Text in Middle */}
                <div className="relative z-10 mt-8 mb-auto">
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-gradient transition-colors mb-2 font-headline">
                    {t(`projectsData.${project.key}.title`)}
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-3 font-sans leading-relaxed">
                    {t(`projectsData.${project.key}.description`)}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="relative z-10 mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wide bg-surface-container-highest/40 text-on-surface-variant border border-white/5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {sortedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 glass-panel rounded-2xl border border-outline-variant/10"
          >
            <p className="text-on-surface-variant font-sans text-lg">
              {t("archive.noResults")}
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}
