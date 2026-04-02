import { Info, Building2, FileText, Users, CheckCircle2, Lock, Phone, X, AlertCircle } from "lucide-react";
import type { ReactNode, FormEvent } from "react";
import { useRef, useState, useEffect } from "react";
import { useReveal } from "../components/Layout";

function Reveal({ children, className = "", delay = "" }: { children: ReactNode; className?: string; delay?: string }) {
  const { ref, cls } = useReveal();
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${cls} ${className}`} style={delay ? { transitionDelay: delay } : undefined}>
      {children}
    </div>
  );
}

/* ── Tunisian education system levels & sections ── */
const NIVEAUX: { label: string; sections?: string[] }[] = [
  { label: "7ème Année de Base" },
  { label: "8ème Année de Base" },
  { label: "9ème Année de Base" },
  { label: "1ère Année Secondaire" },
  {
    label: "2ème Année Secondaire",
    sections: ["Sciences", "Mathématiques", "Informatique", "Économie & Gestion", "Technique"],
  },
  {
    label: "3ème Année Secondaire",
    sections: ["Sciences Expérimentales", "Mathématiques", "Informatique", "Économie & Gestion", "Technique"],
  },
  {
    label: "4ème Année Secondaire (Bac)",
    sections: ["Sciences Expérimentales", "Mathématiques", "Informatique", "Économie & Gestion", "Technique"],
  },
];

/* ── Premium custom select ── */
type SelectOption = { value: string; label: string };

function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: SelectOption[];
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center justify-between px-5 py-4 bg-white rounded-full text-left transition-all outline-none cursor-pointer shadow-sm ${
          open ? "ring-2 ring-secondary/50" : "hover:shadow-md"
        }`}
      >
        <span className={selected ? "text-primary font-medium" : "text-slate-400"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white rounded-3xl shadow-xl overflow-hidden animate-fade-in border border-slate-100">
          <div className="max-h-64 overflow-y-auto scrollbar-hide overscroll-contain touch-pan-y p-1.5 space-y-0.5">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  opt.value === value
                    ? "bg-primary text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Modern validation popup ── */
function ValidationModal({ errors, onClose }: { errors: string[]; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 sm:p-8 animate-fade-up z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          title="Fermer"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-slate-500" />
        </button>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5 text-secondary" />
          </div>
          <h3 className="text-lg font-bold text-primary">Vérification requise</h3>
        </div>
        <ul className="space-y-2.5">
          {errors.map((err) => (
            <li key={err} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
              {err}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-primary hover:bg-blue-950 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer"
        >
          Compris
        </button>
      </div>
    </div>
  );
}

export default function Admissions() {
  const formRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", level: "", section: "", phone: "", email: "" });
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const selectedNiveau = NIVEAUX.find((n) => n.label === formData.level);
  const hasSections = selectedNiveau?.sections && selectedNiveau.sections.length > 0;

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePhoneChange = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 8);
    setFormData((p) => ({ ...p, phone: digits }));
  };

  const validate = (): string[] => {
    const errs: string[] = [];
    if (!formData.name.trim()) errs.push("Le nom de l'élève est requis.");
    if (!formData.level) errs.push("Veuillez sélectionner un niveau.");
    if (hasSections && !formData.section) errs.push("Veuillez choisir une section.");
    if (formData.phone.length !== 8) errs.push("Le numéro de téléphone doit contenir 8 chiffres.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.push("Veuillez saisir un e-mail valide.");
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (errs.length > 0) {
      setValidationErrors(errs);
      return;
    }
    const levelStr = formData.section ? `${formData.level} — ${formData.section}` : formData.level;
    const subject = encodeURIComponent(`Pré-inscription: ${formData.name} - ${levelStr}`);
    const body = encodeURIComponent(
      `Nom de l'élève: ${formData.name}\nNiveau souhaité: ${levelStr}\nTéléphone parent: +216 ${formData.phone}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:lyceepythagore19@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {validationErrors.length > 0 && (
        <ValidationModal errors={validationErrors} onClose={() => setValidationErrors([])} />
      )}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-12 md:pb-24">
        <Reveal className="w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-secondary text-xs font-bold mb-6 tracking-widest uppercase border border-red-100">
              Année Scolaire 2025 - 2026
            </span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tighter text-primary">
              Rejoindre l'excellence <span className="text-secondary">Pythagoricienne.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-8">
              Un processus d'admission transparent conçu pour identifier le potentiel de chaque élève au sein de notre institution d'élite à Kairouan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+21653518054"
                className="bg-secondary hover:bg-red-700 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>Appelez-nous au 53 518 054</span>
              </a>
              <button
                onClick={scrollToForm}
                className="bg-primary hover:bg-blue-900 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-full font-bold transition-all shadow-lg text-center text-sm sm:text-base cursor-pointer w-full sm:w-auto"
              >
                Pré-inscription en ligne
              </button>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="bg-surface-container-lowest py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <Reveal><div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4">
              Le Parcours d'Admission
            </h2>
            <p className="text-on-surface-variant text-lg">
              Un accompagnement personnalisé à chaque étape de votre intégration.
            </p>
          </div></Reveal>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { icon: Info, title: "Information", desc: "Découvrez nos programmes et nos valeurs lors d'un premier échange téléphonique ou en ligne." },
                { icon: Building2, title: "Visite", desc: "Venez explorer notre campus, nos laboratoires et échanger avec notre équipe pédagogique." },
                { icon: FileText, title: "Dossier", desc: "Constitution du dossier administratif et académique complet de l'élève." },
                { icon: Users, title: "Entretien", desc: "Une rencontre pédagogique pour valider les motivations et le niveau académique." },
              ].map((step, i) => (
                <Reveal key={step.title} delay={`${i * 150}ms`}><div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center mb-6 relative border-4 border-slate-50">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                      {i + 1}
                    </div>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                </div></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="bg-primary-container text-white p-8 sm:p-10 md:p-16 lg:p-24 rounded-2xl sm:rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-40 -right-40 w-125 h-125 border-60 border-white/5 rounded-full pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary text-white text-xs font-bold mb-8 tracking-widest uppercase">
              Places Limitées
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              La qualité avant tout : des classes à effectif réduit.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed">
              Afin de garantir un suivi d'excellence et un encadrement personnalisé, nous limitons strictement le nombre d'élèves par classe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Ratio Élève/Prof</h4>
                  <p className="text-slate-400 text-sm">Optimal pour une progression accélérée.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Suivi Individuel</h4>
                  <p className="text-slate-400 text-sm">Rapport hebdomadaire de performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FORM ═══════ */}
      <section ref={formRef} className="bg-surface-container-lowest py-16 md:py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Prêt à commencer l'aventure ?
            </h2>
            <p className="text-on-surface-variant text-lg">
              Remplissez le formulaire de pré-inscription pour que notre responsable des admissions vous recontacte sous 24h.
            </p>
          </div>

          <div className="bg-[#F3F2EE] p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Demande envoyée !</h3>
                <p className="text-on-surface-variant">Notre responsable des admissions vous recontactera sous 24h.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: "", level: "", section: "", phone: "", email: "" }); }} className="mt-6 text-secondary font-bold underline cursor-pointer">Nouvelle demande</button>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Nom de l'élève</label>
                  <input
                    type="text"
                    placeholder="Entrez le nom complet"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="w-full bg-white rounded-full px-5 py-4 text-primary focus:ring-2 focus:ring-secondary/50 transition-all outline-none placeholder:text-slate-400 shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Niveau */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Niveau Souhaité</label>
                  <CustomSelect
                    placeholder="Sélectionnez le niveau"
                    value={formData.level}
                    onChange={(val) => setFormData((p) => ({ ...p, level: val, section: "" }))}
                    options={NIVEAUX.map((n) => ({ value: n.label, label: n.label }))}
                  />
                </div>

                {/* Section — conditional */}
                {hasSections && (
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Section / Filière</label>
                    <CustomSelect
                      placeholder="Choisissez la section"
                      value={formData.section}
                      onChange={(val) => setFormData((p) => ({ ...p, section: val }))}
                      options={selectedNiveau!.sections!.map((s) => ({ value: s, label: s }))}
                    />
                  </div>
                )}

                {/* Phone +216 */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Téléphone Parent</label>
                  <div className="flex items-center bg-white rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-secondary/50 transition-all shadow-sm hover:shadow-md">
                    <span className="px-4 sm:px-5 py-4 bg-slate-50/50 text-slate-500 font-bold text-sm border-r border-slate-100 select-none shrink-0">+216</span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      maxLength={8}
                      className="w-full px-3 sm:px-4 py-4 text-primary outline-none placeholder:text-slate-400 bg-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">E-mail</label>
                  <input
                    type="email"
                    placeholder="email@exemple.com"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-white rounded-full px-5 py-4 text-primary focus:ring-2 focus:ring-secondary/50 transition-all outline-none placeholder:text-slate-400 shadow-sm hover:shadow-md"
                  />
                </div>
              </div>

              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <button type="submit" className="w-full bg-primary hover:bg-blue-950 text-white font-bold py-4 px-2 rounded-full transition-colors shadow-lg cursor-pointer text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                  Envoyer la demande d'admission
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-4">
                <Lock className="w-3 h-3" />
                <span>Vos données sont sécurisées et restent confidentielles.</span>
              </div>
            </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
