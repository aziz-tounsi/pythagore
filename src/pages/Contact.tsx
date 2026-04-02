import { Phone, Mail, MapPin, Send, Facebook, ExternalLink } from "lucide-react";
import type { ReactNode, FormEvent } from "react";
import { useState } from "react";
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

export default function Contact() {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const sub = encodeURIComponent(formData.subject || "Message depuis le site");
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:lyceepythagore19@gmail.com?subject=${sub}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-12 md:pb-24">
        <Reveal><div className="max-w-3xl">
          <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-secondary text-xs font-bold mb-6 tracking-widest uppercase border border-red-100">
            {t.contact.badge}
          </span>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tighter text-primary">
            {(() => { const [a, b] = t.contact.heroTitle1.split('{h}'); return <>{a}<span className="text-secondary">{t.contact.heroTitle2}</span>{b}</>; })()}
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-8">
            {t.contact.heroSub}
          </p>
        </div></Reveal>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="md:col-span-5 space-y-6">
            {/* Phone */}
            <Reveal delay="0ms"><a href="tel:+21653518054" className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4 sm:gap-6 hover:shadow-xl transition-shadow block">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{t.contact.phoneLabel}</div>
                <div dir="ltr" className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">53 518 054</div>
                <div className="text-xs sm:text-sm text-slate-500">{t.contact.phoneSchedule}</div>
              </div>
            </a></Reveal>

            {/* Email */}
            <Reveal delay="100ms"><a href="mailto:lyceepythagore19@gmail.com" className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4 sm:gap-6 hover:shadow-xl transition-shadow block">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-50 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{t.contact.emailLabel}</div>
                <div dir="ltr" className="text-sm font-bold text-primary mb-1 sm:mb-2 truncate">lyceepythagore19@gmail.com</div>
                <div className="text-xs sm:text-sm text-slate-500">{t.contact.emailResponse}</div>
              </div>
            </a></Reveal>

            {/* Address */}
            <Reveal delay="200ms"><a href="https://www.google.com/maps/search/Lyc%C3%A9e+Pythagore+Kairouan/@35.6757,10.0962,17z" target="_blank" rel="noopener noreferrer" className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-4 sm:gap-6 hover:shadow-xl transition-shadow block">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{t.contact.addressLabel}</div>
                <div className="text-base sm:text-lg font-bold text-primary mb-1 sm:mb-2">Rue El Emir Faicel, Kairouan</div>
                <div className="text-xs sm:text-sm text-slate-500">{t.contact.addressCity}</div>
              </div>
            </a></Reveal>

            {/* Social */}
            <Reveal delay="300ms"><a href="https://www.facebook.com/profile.php?id=100064041700592" target="_blank" rel="noopener noreferrer" className="bg-blue-950 p-6 sm:p-8 rounded-3xl shadow-lg text-white relative overflow-hidden group block">
              <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:scale-110 transition-transform">
                <Facebook className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t.contact.socialTitle}</h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-4 sm:mb-6">{t.contact.socialText}</p>
                <span className="inline-flex items-center gap-2 font-bold hover:text-secondary transition-colors">
                  Facebook <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a></Reveal>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7">
            <div className="bg-[#f0f1f5] p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm">
              
              {sent ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{t.contact.formSentTitle}</h3>
                  <p className="text-on-surface-variant">{t.contact.formSentText}</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-secondary font-bold underline cursor-pointer">{t.contact.formNew}</button>
                </div>
              ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.contact.formName}</label>
                    <input
                      type="text"
                      placeholder={t.contact.formPlaceholderName}
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({...p, name: e.target.value}))}
                      className="w-full bg-white border-none rounded-full px-6 py-4 text-primary focus:ring-2 focus:ring-secondary transition-all shadow-sm outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.contact.formEmail}</label>
                    <input
                      type="email"
                      placeholder={t.contact.formPlaceholderEmail}
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                      className="w-full bg-white border-none rounded-full px-6 py-4 text-primary focus:ring-2 focus:ring-secondary transition-all shadow-sm outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.contact.formSubject}</label>
                  <input
                    type="text"
                    placeholder={t.contact.formPlaceholderSubject}
                    value={formData.subject}
                    onChange={e => setFormData(p => ({...p, subject: e.target.value}))}
                    className="w-full bg-white border-none rounded-full px-6 py-4 text-primary focus:ring-2 focus:ring-secondary transition-all shadow-sm outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">{t.contact.formMessage}</label>
                  <textarea
                    placeholder={t.contact.formPlaceholderMessage}
                    rows={5}
                    required
                    value={formData.message}
                    onChange={e => setFormData(p => ({...p, message: e.target.value}))}
                    className="w-full bg-white border-none rounded-3xl px-6 py-4 text-primary focus:ring-2 focus:ring-secondary transition-all shadow-sm resize-none outline-none"
                  ></textarea>
                </div>

                <button type="submit" className="bg-secondary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg flex items-center gap-3 w-full sm:w-auto justify-center cursor-pointer">
                  {t.contact.formSubmit} <Send className="w-5 h-5" />
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div
          className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[420px] md:h-[500px] cursor-pointer group"
          onClick={() => window.open("https://www.google.com/maps/place/Lyc%C3%A9e+Pythagore+Kairouan/@35.6757,10.0962,17z", '_blank', 'noopener,noreferrer')}
          title="Ouvrir dans Google Maps"
        >
          {/* Google Maps embed */}
          <iframe
            title="Lycée Pythagore Kairouan"
            src="https://maps.google.com/maps?q=35.675756,10.096231&z=17&hl=fr&output=embed"
            className="w-full h-full border-0 pointer-events-none"
            loading="lazy"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/97 backdrop-blur-md p-5 md:p-7 rounded-2xl shadow-2xl max-w-xs border border-slate-100">
            <h3 className="text-base font-bold text-primary mb-1">{t.contact.mapTitle}</h3>
            <p className="text-slate-500 text-xs mb-4 leading-relaxed">
              {t.contact.mapText}
            </p>
            <span className="text-secondary font-bold text-xs tracking-widest uppercase flex items-center gap-2">
              {t.contact.mapLink} <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
