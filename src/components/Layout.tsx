import { Outlet, Link, useLocation } from "react-router-dom";
import { BarChart2, AtSign, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";
import type { Lang } from "../context/LanguageContext";

/* ── Intersection Observer hook for scroll animations ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, cls: visible ? "animate-fade-up opacity-100" : "opacity-0 translate-y-6" };
}

export { useReveal };

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });

    // Dynamic SEO titles per page and language
    const titlesByLang: Record<Lang, Record<string, string>> = {
      fr: {
        "/": "Lycée Pythagore Kairouan — Excellence & Engagement",
        "/a-propos": "À Propos — Lycée Pythagore Kairouan",
        "/admissions": "Admissions — Lycée Pythagore Kairouan",
        "/vie-scolaire": "Vie Scolaire — Lycée Pythagore Kairouan",
        "/contact": "Contact — Lycée Pythagore Kairouan",
        "/mentions-legales": "Mentions Légales — Lycée Pythagore Kairouan",
        "/confidentialite": "Politique de Confidentialité — Lycée Pythagore Kairouan"
      },
      en: {
        "/": "Lycée Pythagore Kairouan — Excellence & Engagement",
        "/a-propos": "About Us — Lycée Pythagore Kairouan",
        "/admissions": "Admissions — Lycée Pythagore Kairouan",
        "/vie-scolaire": "Student Life — Lycée Pythagore Kairouan",
        "/contact": "Contact — Lycée Pythagore Kairouan",
        "/mentions-legales": "Legal Notice — Lycée Pythagore Kairouan",
        "/confidentialite": "Privacy Policy — Lycée Pythagore Kairouan"
      },
      ar: {
        "/": "Lycée Pythagore القيروان — التميز والالتزام",
        "/a-propos": "من نحن — Lycée Pythagore القيروان",
        "/admissions": "التسجيل — Lycée Pythagore القيروان",
        "/vie-scolaire": "الحياة المدرسية — Lycée Pythagore القيروان",
        "/contact": "اتصل بنا — Lycée Pythagore القيروان",
        "/mentions-legales": "إشعار قانوني — Lycée Pythagore القيروان",
        "/confidentialite": "سياسة الخصوصية — Lycée Pythagore القيروان"
      }
    };
    const tMap = titlesByLang[lang] || titlesByLang.fr;
    if (tMap[location.pathname]) {
      document.title = tMap[location.pathname];
    }

    // GA4 page view for SPA navigation
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: location.pathname + location.search });
    }
  }, [location.pathname, lang]);
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/a-propos" },
    { name: t.nav.admissions, path: "/admissions" },
    { name: t.nav.studentLife, path: "/vie-scolaire" },
  ];

  const langs: { code: Lang; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];

  return (
    <div className="bg-background font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
      {/* ── Navbar — always glass / blur ── */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-[0_1px_20px_rgba(0,6,24,0.08)] transition-all duration-300">
        <div className="flex justify-between items-center px-5 lg:px-8 py-5 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2.5 text-xl font-bold text-blue-950 tracking-tighter font-headline">
            <img src="/images/logo.png" alt="Logo Pythagore" className="w-10 h-10 object-contain" />
            Lycée Pythagore
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 font-headline font-semibold tracking-tight text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-blue-900 border-b-2 border-red-600 pb-1"
                    : "text-slate-700 hover:text-blue-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 bg-slate-100/70 rounded-full px-2 py-1">
              {langs.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    lang === code
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Link to="/contact" className="bg-secondary text-white px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-slate-700 p-1 z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            title="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile sidebar overlay ── */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* ── Mobile sidebar — slides from right ── */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-slate-100" style={{ minHeight: "72px" }}>
          <span className="text-lg font-bold text-primary font-headline tracking-tight">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Fermer" title="Fermer">
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>
        <nav className="flex-1 px-5 py-6 space-y-1 font-headline font-semibold overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive(link.path)
                  ? "bg-primary/5 text-primary border-s-4 border-secondary ps-3"
                  : "text-slate-600 hover:bg-slate-50 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="p-5 border-t border-slate-100 space-y-4">
          <div className="flex justify-center gap-2">
            {langs.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  lang === code
                    ? "bg-primary text-white shadow-sm"
                    : "bg-slate-100 text-slate-500 hover:text-slate-800"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block bg-secondary text-white px-6 py-3 rounded-full font-bold text-center shadow-md text-sm"
          >
            {t.nav.contact}
          </Link>
        </div>
      </aside>

      {/* ── Page content (offset for fixed navbar) ── */}
      <main className="grow relative geometric-bg overflow-hidden pt-15">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="w-full rounded-t-4xl md:rounded-t-[3rem] mt-20 bg-blue-950 text-white shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12 py-12 md:py-16 max-w-7xl mx-auto font-body text-sm leading-relaxed">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-2xl font-black text-white italic"><img src="/images/logo%20-%20Copy.png" alt="Logo Pythagore" className="w-10 h-10 object-contain" /> Lycée Pythagore</div>
            <p className="text-slate-300">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-300"
                href="https://www.facebook.com/profile.php?id=100064041700592"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300"
                href="https://www.instagram.com/lycee.pythagore/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-colors duration-300"
                href="https://www.tiktok.com/@lyceepythagore"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.88-4.51V8.71a8.28 8.28 0 0 0 4.89 1.57V6.83a4.87 4.87 0 0 1-1-.14z"/>
                </svg>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                href="mailto:lyceepythagore19@gmail.com"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <Phone className="text-secondary w-5 h-5 shrink-0" />
                <a dir="ltr" href="tel:+21653518054" className="hover:text-white transition-colors">53 518 054</a>
              </li>
              <li className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <Mail className="text-secondary w-5 h-5 shrink-0" />
                <a dir="ltr" href="mailto:lyceepythagore19@gmail.com" className="break-all hover:text-white transition-colors">lyceepythagore19@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors">
                <MapPin className="text-secondary w-5 h-5 shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps/place/Lyc%C3%A9e+pilote+Pythagore/@35.6538767,10.0878363,17z/data=!3m1!4b1!4m6!3m5!1s0x12fddbd4a5f1daf3:0x130a303d8af1665c!8m2!3d35.6538767!4d10.0904112!16s%2Fg%2F11fnr5ddpm?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.address}
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">{t.footer.quickLinks}</h4>
            <div className="grid grid-cols-2 gap-4">
              <Link className="text-slate-300 hover:text-white transition-all inline-block duration-200" to="/">{t.nav.home}</Link>
              <Link className="text-slate-300 hover:text-white transition-all inline-block duration-200" to="/admissions">{t.nav.admissions}</Link>
              <Link className="text-slate-300 hover:text-white transition-all inline-block duration-200" to="/vie-scolaire">{t.nav.studentLife}</Link>
              <a className="text-slate-300 hover:text-white transition-all inline-block duration-200" href="#">{t.footer.news}</a>
              <a className="text-slate-300 hover:text-white transition-all inline-block duration-200" href="#">{t.footer.recruitment}</a>
              <a className="text-slate-300 hover:text-white transition-all inline-block duration-200" href="#">{t.footer.parentPortal}</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 md:py-8 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 text-center md:text-start">
          <div className="space-y-1">
            <div>{t.footer.rights}</div>
            <div>{t.footer.dev} <a href="https://aziz-tounsi.github.io/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white font-semibold transition-colors">Aziz Tounsi</a></div>
          </div>
          <div className="flex gap-6 md:gap-8" dir="ltr">
            <Link className="hover:text-white transition-colors" to="/mentions-legales">{t.footer.legal}</Link>
            <Link className="hover:text-white transition-colors" to="/confidentialite">{t.footer.privacy}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
