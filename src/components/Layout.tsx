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
    // GA4 page view for SPA navigation
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: location.pathname + location.search });
    }
  }, [location.pathname]);
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
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300" href="https://www.facebook.com/profile.php?id=100064041700592" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">
                <BarChart2 className="w-4 h-4" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300" href="mailto:lyceepythagore19@gmail.com" title="Email" aria-label="Email">
                <AtSign className="w-4 h-4" />
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
                <a href="https://www.google.com/maps/search/Lycée+Pythagore+Kairouan/@35.6757,10.1002,17z" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rue El Emir Faicel, Kairouan</a>
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
