import React from "react";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Brain,
  Users,
  Quote,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useReveal } from "../components/Layout";
import { useLang } from "../context/LanguageContext";

/* ── small wrapper so we can reuse the reveal hook cleanly ── */
function Reveal({ children, className = "", delay = "" }: { children: ReactNode; className?: string; delay?: string }) {
  const { ref, cls } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${cls} ${className}`} style={delay ? { transitionDelay: delay } : undefined}>
      {children}
    </div>
  );
}

/* ── Horizontal gallery slider with blur-fill cards ── */
function GallerySlider({ title, description, images, altPrefix, onImageClick }: { title: string; description?: string; images: string[]; altPrefix: string; onImageClick?: (idx: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };
  /* Touch-swipe support */
  const touchStart = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 40) scroll(dx < 0 ? 1 : -1);
  };
  return (
    <div className="mb-12 sm:mb-16">
      <Reveal>
        <h3 className="font-headline text-xl sm:text-2xl font-bold text-primary mb-2 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block shrink-0"></span>
          {title}
        </h3>
        {description && (
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-5 ms-5 sm:ms-6 max-w-2xl">
            {description}
          </p>
        )}
      </Reveal>
      <div className="relative group/slider">
        {/* Left arrow */}
        <button
          onClick={() => scroll(-1)}
          aria-label="Précédent"
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-md shadow-lg rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        {/* Scrollable track */}
        <div
          ref={trackRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 px-11 sm:px-14 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x"
        >
          {images.map((src, i) => (
            <div
              key={src}
              onClick={() => onImageClick?.(i)}
              className={`relative w-[280px] sm:w-[340px] h-[200px] sm:h-[230px] rounded-xl overflow-hidden shrink-0 snap-start ${onImageClick ? 'cursor-pointer hover:ring-2 hover:ring-primary/40 transition-all' : ''}`}
            >
              {/* Blurred backdrop fills any empty space */}
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-75"
              />
              {/* Foreground image — contained so full photo always visible */}
              <img
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                className="absolute inset-0 w-full h-full object-contain drop-shadow-sm"
              />
            </div>
          ))}
        </div>
        {/* Right arrow */}
        <button
          onClick={() => scroll(1)}
          aria-label="Suivant"
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-md shadow-lg rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const { t } = useLang();
  const [lightbox, setLightbox] = useState<{ images: string[]; idx: number } | null>(null);
  const lbPrev = () => setLightbox(lb => lb ? { ...lb, idx: (lb.idx - 1 + lb.images.length) % lb.images.length } : null);
  const lbNext = () => setLightbox(lb => lb ? { ...lb, idx: (lb.idx + 1) % lb.images.length } : null);
  return (
    <>
      {/* Math Decor */}
      <div className="math-motif text-[10rem] sm:text-[15rem] lg:text-[20rem] -top-10 lg:-top-20 -left-5 lg:-left-20">π</div>
      <div className="math-motif text-[8rem] sm:text-[10rem] lg:text-[15rem] top-1/2 -right-3 lg:-right-10">Σ</div>

      {/* ═══════ HERO ═══════ */}
      <section className="w-full -mt-15 pb-10 sm:pb-16 lg:pb-24">
        {/*  IMAGE_1 — "hero-classroom.jpg"
             Description: A bright, modern classroom at Lycée Pythagore — large windows,
             students at desks, green-tinted wall with student artwork, natural light.
             Used as the full-width hero background image.  */}
        <div className="relative h-[calc(65vh+3.75rem)] sm:h-[calc(70vh+3.75rem)] lg:h-[calc(85vh+3.75rem)] max-h-[860px] w-full overflow-hidden shadow-2xl group">
          <img
            alt="Modern classroom environment at Lycée Pythagore"
            className="w-full h-full object-cover scale-x-[-1]"
            src="/images/ero-classroom.jpg"
          />
          {/* dark vignette for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-start p-5 sm:p-10 lg:p-16 xl:p-20">
            <div className="bg-primary-container/65 backdrop-blur-lg max-w-xl lg:max-w-2xl p-6 sm:p-10 lg:p-14 rounded-2xl lg:rounded-3xl text-white shadow-2xl w-full border border-white/15 animate-fade-up">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/20 text-white text-[10px] sm:text-xs font-bold mb-4 sm:mb-6 tracking-widest uppercase">
                {t.hero.badge}
              </span>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-4 sm:mb-6 tracking-tight text-white">
                {t.hero.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 mb-6 sm:mb-10 leading-relaxed max-w-lg">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
                <button
                  onClick={() => navigate("/admissions")}
                  className="bg-secondary hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-secondary/30 text-sm sm:text-base text-center cursor-pointer"
                >
                  {t.hero.cta1}
                </button>
                <button
                  onClick={() => navigate("/a-propos")}
                  className="text-slate-200 hover:text-white font-bold transition-colors text-sm sm:text-base text-center flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {t.hero.cta2}
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ POURQUOI PYTHAGORE ═══════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 sm:mb-12 lg:mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary tracking-tight mb-2 sm:mb-4">
                {t.home.whyTitle}
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base lg:text-lg">
                {t.home.whySubtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          <Reveal delay="0ms">
            <div className="bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group h-full">
              <div dir="ltr" className="absolute -bottom-6 -right-6 text-7xl sm:text-8xl lg:text-9xl font-serif text-slate-50 opacity-20 group-hover:scale-110 transition-transform duration-500">01</div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary-container/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-8">
                <GraduationCap className="text-secondary w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-primary">{t.home.card1Title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                {t.home.card1Text}
              </p>
            </div>
          </Reveal>

          <Reveal delay="150ms">
            <div className="bg-primary text-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group h-full">
              <div dir="ltr" className="absolute -bottom-6 -right-6 text-7xl sm:text-8xl lg:text-9xl font-serif text-white/5 group-hover:scale-110 transition-transform duration-500">02</div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-8">
                <Brain className="text-white w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">{t.home.card2Title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {t.home.card2Text}
              </p>
            </div>
          </Reveal>

          <Reveal delay="300ms">
            <div className="bg-surface-container-lowest p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group h-full sm:col-span-2 lg:col-span-1">
              <div dir="ltr" className="absolute -bottom-6 -right-6 text-7xl sm:text-8xl lg:text-9xl font-serif text-slate-50 opacity-20 group-hover:scale-110 transition-transform duration-500">03</div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary-container/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-8">
                <Users className="text-secondary w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-primary">{t.home.card3Title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm sm:text-base">
                {t.home.card3Text}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="bg-surface-container-low py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center">
            {t.home.stats.map((s, i) => (
              <Reveal key={i} delay={`${i * 100}ms`}>
                <div>
                  <div dir="ltr" className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black ${i % 2 === 0 ? "text-secondary" : "text-primary"} mb-1 sm:mb-2`}>
                    {s.val}
                  </div>
                  <div className="text-on-surface-variant font-medium tracking-wide uppercase text-[10px] sm:text-xs">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <Reveal>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-primary">
            {t.home.galleryTitle}
          </h2>
        </Reveal>

        {(() => {
          const imgs = [
            ["/images/inclass1.jpg","/images/inclass2.jpg","/images/inclass3.jpg","/images/inclass4.jpg","/images/inclass5.jpg","/images/inclass6.jpg","/images/inclass7.jpg","/images/inclass8.jpg","/images/inclass9.jpg"],
            ["/images/science-lab-1.jpg","/images/science-lab-2.jpg","/images/science-lab-4.jpg"],
            ["/images/library-cdi-1.jpg","/images/library-cdi-2.jpg","/images/library-cdi-3.jpg"],
            ["/images/sports-field-1.jpg","/images/sports-field-2.jpg","/images/sports-field-3.jpg","/images/sports-field-4.jpg"],
            ["/images/group-collaboration-2.jpg","/images/group-collaboration-3.jpg","/images/group-collaboration-4.jpg","/images/group-collaboration-5.jpg","/images/group-collaboration-6.jpg","/images/group-collaboration-7.jpg","/images/group-collaboration-8.jpg"],
          ];
          return t.home.sliders.map((s, i) => (
            <GallerySlider
              key={i}
              title={s.title}
              description={s.description}
              altPrefix={s.altPrefix}
              images={imgs[i]}
              onImageClick={(idx) => setLightbox({ images: imgs[i], idx })}
            />
          ));
        })()}
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <Reveal>
          <div className="bg-primary-container text-white p-6 sm:p-10 lg:p-16 xl:p-20 rounded-2xl lg:rounded-3xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="math-motif text-[12rem] sm:text-[20rem] lg:text-[30rem] top-0 left-0">Ω</div>
              <div className="math-motif text-[10rem] sm:text-[15rem] lg:text-[20rem] bottom-0 right-0">√</div>
            </div>
            <h2 className="font-headline text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 relative z-10 leading-tight">
              {t.home.ctaTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg xl:text-xl max-w-2xl mb-6 sm:mb-8 lg:mb-12 relative z-10">
              {t.home.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 relative z-10 w-full sm:w-auto">
              <button
                onClick={() => navigate("/admissions")}
                className="bg-secondary px-4 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-black text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-full sm:w-auto whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {t.home.ctaBtn1}
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-white/20 transition-all duration-300 cursor-pointer w-full sm:w-auto whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {t.home.ctaBtn2}
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════ TESTIMONIALS (Paroles de Parents) ═══════ */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <Reveal>
          <div className="text-center mb-10 sm:mb-14 lg:mb-20">
            <span className="text-secondary font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-3 block">
              {t.home.testimonialsLabel}
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary tracking-tight">
              {t.home.testimonialsTitle}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-10">
          {t.home.testimonials.map((tm, i) => {
            const color = ["bg-primary", "bg-secondary", "bg-emerald-700"][i];
            return (
            <Reveal key={tm.name} delay={`${i * 150}ms`}>
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,30,71,0.06),0_10px_15px_rgba(182,35,28,0.04)] italic relative hover:shadow-xl transition-shadow duration-500 h-full">
                <Quote className="text-secondary-container/20 w-10 h-10 sm:w-12 sm:h-12 absolute top-4 right-4" />
                <p className="text-on-surface-variant mb-5 sm:mb-6 leading-relaxed relative z-10 text-sm sm:text-base">
                  "{tm.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${color} flex items-center justify-center text-white shrink-0`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm sm:text-base not-italic">{tm.name}</div>
                    <div className="text-[10px] sm:text-xs text-on-surface-variant not-italic">{tm.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── Home lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button aria-label="Fermer" title="Fermer"
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/35 flex items-center justify-center transition-colors"
            onClick={() => setLightbox(null)}>
            <X className="w-5 h-5 text-white" />
          </button>
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-mono tabular-nums bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            {lightbox.idx + 1} / {lightbox.images.length}
          </span>
          <button aria-label="Précédent" title="Précédent"
            className="absolute left-3 sm:left-6 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/35 flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); lbPrev(); }}>
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <div className="absolute inset-0 flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.images[lightbox.idx]}
              alt={`Photo ${lightbox.idx + 1}`}
              className="w-full h-full object-contain shadow-2xl"
            />
          </div>
          <button aria-label="Suivant" title="Suivant"
            className="absolute right-3 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/35 flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); lbNext(); }}>
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}
