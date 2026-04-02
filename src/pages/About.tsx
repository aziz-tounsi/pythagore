import { Star, Heart, Shield } from "lucide-react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useReveal } from "../components/Layout";
import { useLang } from "../context/LanguageContext";

function Reveal({ children, className = "", delay = "" }: { children: ReactNode; className?: string; delay?: string }) {
  const { ref, cls } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${cls} ${className}`} style={delay ? { transitionDelay: delay } : undefined}>
      {children}
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();
  const { t } = useLang();
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-12 md:pb-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <Reveal className="w-full md:w-1/2">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary text-white text-xs font-bold mb-6 tracking-widest uppercase">
              {t.about.badge}
            </span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tighter text-primary">
              {(() => { const [a, b] = t.about.heroTitle1.split('{h}'); return <>{a}<span className="text-secondary italic">{t.about.heroTitle2}</span>{b}</>; })()}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-lg">
              {t.about.heroSubtitle}
            </p>
          </Reveal>
          <Reveal className="w-full md:w-1/2" delay="200ms">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="School building"
                className="w-full h-auto object-cover"
                src="/images/ero-classroom.jpg"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <p className="italic text-primary font-medium text-sm md:text-base">
                  "{t.about.quoteText}"
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-surface-container-lowest py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <Reveal><div className="w-full md:w-1/3">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 border-b-4 border-secondary pb-4 inline-block">
                {t.about.historyTitle}
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                {t.about.historyIntro}
              </p>
            </div></Reveal>
            <div className="w-full md:w-2/3 space-y-16">
              <Reveal delay="0ms"><div className="flex flex-col md:flex-row gap-8 items-start">
                <div dir="ltr" className="text-5xl md:text-6xl font-black text-secondary/30 font-serif">
                  {t.about.year2019}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{t.about.foundationTitle}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {t.about.foundationText}
                  </p>
                </div>
              </div></Reveal>

              <Reveal delay="150ms"><div className="rounded-2xl overflow-hidden shadow-xl relative">
                <img 
                  src="/images/eaquipe.jpg" 
                  alt="Founding team" 
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary/90 to-transparent p-8">
                  <div className="text-white font-bold text-xl">{t.about.teamCaption}</div>
                  <div className="text-slate-300 text-sm italic">{t.about.teamSub}</div>
                </div>
              </div></Reveal>

              <Reveal delay="300ms"><div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="text-5xl md:text-6xl font-black text-secondary/30 font-serif">
                  {t.about.todayLabel}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{t.about.missionTitle}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {t.about.missionText}
                  </p>
                </div>
              </div></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
        <Reveal><div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
            {t.about.valuesLabel}
          </span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            {t.about.valuesTitle}
          </h2>
          <p className="text-on-surface-variant italic">{t.about.valuesSubtitle}</p>
        </div></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay="0ms"><div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group h-full">
            <div className="absolute -bottom-6 -right-6 text-9xl font-serif text-slate-50 opacity-50 group-hover:scale-110 transition-transform">
              π
            </div>
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <Star className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">{t.about.val1Title}</h3>
            <p className="text-on-surface-variant leading-relaxed relative z-10">
              {t.about.val1Text}
            </p>
          </div></Reveal>

          <Reveal delay="150ms"><div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group h-full">
            <div className="absolute -bottom-6 -right-6 text-9xl font-serif text-slate-50 opacity-50 group-hover:scale-110 transition-transform">
              θ
            </div>
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-secondary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">{t.about.val2Title}</h3>
            <p className="text-on-surface-variant leading-relaxed relative z-10">
              {t.about.val2Text}
            </p>
          </div></Reveal>

          <Reveal delay="300ms"><div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden group h-full">
            <div className="absolute -bottom-6 -right-6 text-9xl font-serif text-slate-50 opacity-50 group-hover:scale-110 transition-transform">
              Δ
            </div>
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">{t.about.val3Title}</h3>
            <p className="text-on-surface-variant leading-relaxed relative z-10">
              {t.about.val3Text}
            </p>
          </div></Reveal>
        </div>
      </section>

      {/* Inspiring Environment */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 rounded-3xl overflow-hidden relative h-[400px] md:h-[500px] shadow-2xl">
            <img 
              src="/images/science-lab-1.jpg" 
              alt="Laboratory" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.about.envTitle}</h3>
              <p className="text-slate-200 max-w-lg text-lg">
                {t.about.envText}
              </p>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden h-1/2 shadow-xl">
              <img 
                src="/images/library-cdi-1.jpg" 
                alt="Library" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl bg-primary text-white p-8 flex flex-col justify-center h-1/2 shadow-xl">
              <div dir="ltr" className="text-5xl font-black text-secondary mb-2">{t.about.successRate}</div>
              <div className="text-xl font-bold mb-2">{t.about.successTitle}</div>
              <p className="text-slate-300 text-sm">
                {t.about.successText}
              </p>
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <Reveal>
        <div className="bg-primary-container text-white p-10 md:p-16 rounded-[2rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="math-motif text-[20rem] top-0 left-0">Ω</div>
            <div className="math-motif text-[15rem] bottom-0 right-0">√</div>
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 relative z-10">
            {t.about.ctaTitle}
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 relative z-10">
            {t.about.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 w-full sm:w-auto px-4 sm:px-0">
            <button
              onClick={() => navigate("/contact")}
              className="bg-secondary px-4 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-red-700 transition-colors shadow-lg cursor-pointer w-full sm:w-auto text-center whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {t.about.ctaBtn1}
            </button>
            <a
              href="/brochure-pythagore.pdf"
              download
              className="border border-white/30 hover:bg-white/10 px-4 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-lg transition-colors text-center text-white cursor-pointer w-full sm:w-auto block whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {t.about.ctaBtn2}
            </a>
          </div>
        </div>
        </Reveal>
      </section>
    </>
  );
}
