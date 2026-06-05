import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="py-24 relative overflow-hidden min-h-[calc(100vh-80px)] pt-28 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-on-surface mb-8">
          {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span> {t('contact.titleEnd')}
        </h2>
        <p className="text-on-surface-variant text-xl mb-12 font-sans">
          {t('contact.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:leoreyes_07@outlook.com"
            className="px-10 py-5 rounded-xl bg-primary text-on-primary font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-3"
          >
            <Mail size={24} />
            {t('contact.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
