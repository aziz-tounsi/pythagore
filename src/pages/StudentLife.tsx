import { Users, Trophy, HeartHandshake, ArrowRight, PlayCircle, Images, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useReveal } from "../components/Layout";
import { useLang } from "../context/LanguageContext";

const GALLERY_IMAGES = {
  sorties: [
    "/images/group-collaboration-2.jpg",
    "/images/group-collaboration-3.jpg",
    "/images/group-collaboration-4.jpg",
    "/images/group-collaboration-5.jpg",
    "/images/group-collaboration-6.jpg",
    "/images/group-collaboration-7.jpg",
    "/images/group-collaboration-8.jpg",
  ],
  sports: [
    "/images/sports-field-1.jpg",
    "/images/sports-field-2.jpg",
    "/images/sports-field-3.jpg",
    "/images/sports-field-4.jpg",
  ],
  activites: [
    "/images/group-collaboration-6.jpg",
    "/images/inclass1.jpg",
    "/images/inclass2.jpg",
    "/images/inclass3.jpg",
    "/images/inclass4.jpg",
    "/images/inclass5.jpg",
    "/images/inclass6.jpg",
    "/images/inclass7.jpg",
    "/images/inclass8.jpg",
    "/images/inclass9.jpg",
  ],
};
type GalleryKey = keyof typeof GALLERY_IMAGES;

function Reveal({ children, className = "", delay = "" }: { children: ReactNode; className?: string; delay?: string }) {
  const { ref, cls } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${cls} ${className}`} style={delay ? { transitionDelay: delay } : undefined}>
      {children}
    </div>
  );
}

export default function StudentLife() {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<{ type: GalleryKey; idx: number } | null>(null);
  const lbImages = lightbox ? GALLERY_IMAGES[lightbox.type] : [];
  const lbLen = lbImages.length;
  const lbPrev = () => setLightbox(lb => lb ? { ...lb, idx: (lb.idx - 1 + lbLen) % lbLen } : lb);
  const lbNext = () => setLightbox(lb => lb ? { ...lb, idx: (lb.idx + 1) % lbLen } : lb);
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-12 md:pb-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <Reveal className="w-full md:w-1/2">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-secondary text-xs font-bold mb-6 tracking-widest uppercase border border-red-100">
              {t.studentLife.badge}
            </span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tighter text-primary">
              {(() => { const [a, b] = t.studentLife.heroTitle1.split('{h}'); return <>{a}<span className="text-secondary">{t.studentLife.heroTitle2}</span>{b}</>; })()}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-lg mb-8">
              {t.studentLife.heroSub}
            </p>
          </div>
          </Reveal>
          <Reveal className="w-full md:w-1/2" delay="200ms">
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl h-64 group cursor-pointer"
                onClick={() => setLightbox({ type: 'sorties', idx: 0 })}
              >
                <img 
                  src="/images/group-collaboration-2.jpg" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white font-bold text-xl">{t.studentLife.card1Title}</div>
                  <div className="text-slate-300 text-sm flex items-center gap-2">{t.studentLife.card1Sub} <Images className="w-4 h-4" /></div>
                </div>
              </div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl h-48 group cursor-pointer"
                onClick={() => setLightbox({ type: 'sports', idx: 0 })}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 z-10" />
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-bold flex items-center gap-1">{t.studentLife.card2Title} <Images className="w-3 h-3" /></span>
                </div>
                <img 
                  src="/images/sports-field-1.jpg" 
                  alt="Sports field" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl h-48 group cursor-pointer"
                onClick={() => setLightbox({ type: 'activites', idx: 0 })}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 z-10" />
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-bold flex items-center gap-1">{t.studentLife.card3Title} <Images className="w-3 h-3" /></span>
                </div>
                <img 
                  src="/images/group-collaboration-6.jpg" 
                  alt="Club activities" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <div className="text-[40rem] font-serif">π</div>
        </div>
        <Reveal><div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="text-secondary text-6xl font-serif mb-8">“</div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tight mb-8">
            "{t.studentLife.quoteText}"
          </h2>
          <div className="text-secondary font-bold tracking-widest text-sm uppercase">
            {t.studentLife.quoteAuthor}
          </div>
        </div></Reveal>
      </section>

      {/* Clubs & Activities */}
      <section className="bg-surface-container-lowest py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4">
                {t.studentLife.engagementTitle}
              </h2>
              <p className="text-on-surface-variant text-lg">
                {t.studentLife.engagementSub}
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Reveal delay="0ms"><div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow h-full">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-8">
                <Users className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.studentLife.clubsTitle}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                {t.studentLife.clubsText}
              </p>
              <a href="#" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                {t.studentLife.clubsLink} <ArrowRight className="w-4 h-4" />
              </a>
            </div></Reveal>

            {/* Card 2 */}
            <Reveal delay="150ms"><div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow h-full">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-8">
                <Trophy className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.studentLife.sportsTitle}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                {t.studentLife.sportsText}
              </p>
              <a href="#" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                {t.studentLife.sportsLink} <ArrowRight className="w-4 h-4" />
              </a>
            </div></Reveal>

            {/* Card 3 */}
            <Reveal delay="300ms"><div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow h-full">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-8">
                <HeartHandshake className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t.studentLife.citizenTitle}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                {t.studentLife.citizenText}
              </p>
              <a href="#" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                {t.studentLife.citizenLink} <ArrowRight className="w-4 h-4" />
              </a>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
        <Reveal><div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            {t.studentLife.facilitiesTitle}
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            {t.studentLife.facilitiesSub}
          </p>
        </div></Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay="0ms"><div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] group">
            <img 
              src="/images/library-cdi-1.jpg" 
              alt="Library" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-sm brightness-75 blur-[2px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-2">{t.studentLife.cdiTitle}</h3>
              <p className="text-slate-600 text-sm">{t.studentLife.cdiText}</p>
            </div>
          </div></Reveal>
          
          <Reveal delay="150ms"><div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] group">
            <img 
              src="/images/sports-field-2.jpg" 
              alt="Sports Complex" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 blur-[2px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-primary text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">{t.studentLife.sportComplexTitle}</h3>
              <p className="text-slate-300 text-sm">{t.studentLife.sportComplexText}</p>
            </div>
          </div></Reveal>
        </div>
      </section>

      {/* Theater Highlight */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <Reveal>
        <div className="bg-surface-container-low rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-7 md:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                <PlayCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t.studentLife.theaterLabel}</span>
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {(() => { const [a, b] = t.studentLife.theaterTitle.split('|'); return <>{a}<br className="hidden md:block"/><span className="text-secondary">{b}</span></>; })()}
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              {t.studentLife.theaterText}
            </p>
            {/* Horaires — list style with today highlight */}
            {(() => {
              const todayJs = new Date().getDay(); // 0=Sun,1=Mon,...,6=Sat
              const days = t.studentLife.days.map((d, i) => ({ ...d, jsDay: i + 1 }));
              return (
                <div className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                    <span className="text-base font-bold text-primary">{t.studentLife.scheduleTitle}</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold whitespace-nowrap">{t.studentLife.openToAll}</span>
                  </div>
                  <p className="px-5 py-3 text-xs text-slate-400 leading-snug border-b border-slate-50">
                    {t.studentLife.scheduleDesc}
                  </p>
                  {/* Rows */}
                  {days.map(({ label, jsDay, open, close }) => {
                    const isToday = jsDay === todayJs;
                    return (
                      <div
                        key={label}
                        className={`flex items-center px-5 py-3.5 border-b border-slate-50 last:border-0 transition-colors ${
                          isToday ? "bg-primary/5" : "hover:bg-slate-50/60"
                        }`}
                      >
                        <span className={`w-10 text-sm font-bold shrink-0 ${ isToday ? "text-primary" : "text-slate-500" }`}>{label}</span>
                        <span className={`w-2.5 h-2.5 rounded-full shrink-0 me-4 ${ isToday ? "bg-primary" : "bg-slate-300" }`} />
                        <div className="flex-1">
                          <span className={`text-sm font-semibold ${ isToday ? "text-primary" : "text-slate-700" }`}>
                            {open} — {close}
                          </span>
                        </div>
                        <span className={`text-slate-300 text-sm ms-2 ${ isToday ? "text-primary/40" : "" }`}>›</span>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
            <img 
              src="/images/group-collaboration-5.jpg" 
              alt="Theater production" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </Reveal>
      </section>

      {/* ── In-page gallery lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            aria-label="Fermer" title="Fermer"
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/35 flex items-center justify-center transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Counter */}
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-mono tabular-nums bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            {lightbox.idx + 1} / {lbImages.length}
          </span>

          {/* Prev */}
          <button
            aria-label="Précédent" title="Précédent"
            className="absolute left-3 sm:left-6 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/35 flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); lbPrev(); }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image — full viewport width */}
          <div className="absolute inset-0 flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img
              src={lbImages[lightbox.idx]}
              alt={`Photo ${lightbox.idx + 1}`}
              className="w-full h-full object-contain shadow-2xl"
            />
          </div>

          {/* Next */}
          <button
            aria-label="Suivant" title="Suivant"
            className="absolute right-3 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/35 flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); lbNext(); }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}
