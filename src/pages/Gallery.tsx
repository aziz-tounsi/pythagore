import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useState } from "react";

type GalleryType = "sorties" | "sports" | "activites";

interface GalleryConfig {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  bgFrom: string;
  images: string[];
}

const GALLERIES: Record<GalleryType, GalleryConfig> = {
  sorties: {
    title: "Sorties & Voyages",
    subtitle: "Découvrir le monde ensemble",
    description:
      "À Lycée Pythagore, l'apprentissage ne s'arrête pas aux murs de la classe. Nos élèves partent régulièrement en sortie culturelle, scientifique et de cohésion pour élargir leurs horizons et forger des souvenirs inoubliables. Ces expériences renforcent l'esprit d'équipe, l'ouverture d'esprit et l'engagement citoyen.",
    accentColor: "text-amber-400",
    bgFrom: "from-blue-950 via-blue-900 to-slate-900",
    images: [
      "/images/group-collaboration-2.jpg",
      "/images/group-collaboration-3.jpg",
      "/images/group-collaboration-4.jpg",
      "/images/group-collaboration-5.jpg",
      "/images/group-collaboration-6.jpg",
      "/images/group-collaboration-7.jpg",
      "/images/group-collaboration-8.jpg",
    ],
  },
  sports: {
    title: "Sports & Compétition",
    subtitle: "L'excellence sur le terrain",
    description:
      "Le sport est un pilier fondamental de la formation à Lycée Pythagore. Nos équipes s'entraînent sur des infrastructures modernes et représentent l'établissement lors de compétitions régionales et nationales. Le sport développe la discipline, la persévérance et l'esprit d'équipe — autant de valeurs qui transcendent le terrain.",
    accentColor: "text-green-400",
    bgFrom: "from-emerald-950 via-green-900 to-slate-900",
    images: [
      "/images/sports-field-1.jpg",
      "/images/sports-field-2.jpg",
      "/images/sports-field-3.jpg",
      "/images/sports-field-4.jpg",
    ],
  },
  activites: {
    title: "Clubs & Ateliers",
    subtitle: "Cultiver les talents cachés",
    description:
      "Nos clubs et ateliers parascolaires offrent à chaque élève un espace pour exprimer sa créativité, développer de nouvelles compétences et découvrir des passions insoupçonnées. Du club scientifique aux ateliers artistiques, en passant par le théâtre et la robotique, Pythagore cultive l'épanouissement total de chaque jeune.",
    accentColor: "text-red-400",
    bgFrom: "from-slate-900 via-red-950 to-blue-950",
    images: [
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
      "/images/group-collaboration-4.jpg",
      "/images/group-collaboration-7.jpg",
    ],
  },
};

export default function Gallery() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const galleryType = (type as GalleryType) || "sorties";
  const cfg = GALLERIES[galleryType] ?? GALLERIES.sorties;

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i != null ? (i - 1 + cfg.images.length) % cfg.images.length : 0));
  const next = () => setLightboxIdx((i) => (i != null ? (i + 1) % cfg.images.length : 0));

  return (
    <div className={`min-h-screen bg-linear-to-br ${cfg.bgFrom} text-white`}>
      {/* ── Top bar ── */}
      <div className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/10 flex items-center gap-4 px-5 sm:px-8 py-4">
        <button
          onClick={() => navigate("/vie-scolaire")}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Vie Scolaire</span>
        </button>
        <span className="text-white/20">|</span>
        <span className={`font-headline font-bold text-base sm:text-lg ${cfg.accentColor}`}>{cfg.title}</span>
        <span className="ml-auto text-white/40 text-xs font-mono">{cfg.images.length} photos</span>
      </div>

      {/* ── Hero Header ── */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-10 sm:pt-20 sm:pb-16">
        <span className={`text-xs font-bold uppercase tracking-widest mb-4 block ${cfg.accentColor}`}>
          Galerie — Lycée Pythagore
        </span>
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight">
          {cfg.title}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
          {cfg.description}
        </p>
      </div>

      {/* ── Photo Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {cfg.images.map((src, i) => (
            <div
              key={src + i}
              className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-zoom-in shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              onClick={() => openLightbox(i)}
            >
              {/* Blurred bg */}
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg brightness-50"
              />
              {/* Main image */}
              <img
                src={src}
                alt={`${cfg.title} ${i + 1}`}
                className="relative w-full object-contain max-h-72"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            aria-label="Fermer la galerie"
            title="Fermer"
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono">
            {lightboxIdx + 1} / {cfg.images.length}
          </div>

          {/* Prev */}
          <button
            aria-label="Photo précédente"
            title="Précédent"
            className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] px-16 sm:px-24" onClick={(e) => e.stopPropagation()}>
            <img
              src={cfg.images[lightboxIdx]}
              alt={`${cfg.title} ${lightboxIdx + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Next */}
          <button
            aria-label="Photo suivante"
            title="Suivant"
            className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
