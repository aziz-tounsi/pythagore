import type { ReactNode } from "react";
import { useReveal } from "../components/Layout";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, cls } = useReveal();
  return <div ref={ref} className={`transition-all duration-700 ease-out ${cls} ${className}`}>{children}</div>;
}

export default function MentionsLegales() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <Reveal>
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-8">
          Mentions Légales
        </h1>
      </Reveal>

      <Reveal>
        <div className="prose prose-slate max-w-none space-y-8 text-on-surface-variant leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-primary mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong>Lycée Pilote Privé Pythagore Kairouan</strong> est édité par :<br />
              Lycée Pilote Privé Pythagore<br />
              Rue El Emir Faicel, Kairouan 3100, Tunisie<br />
              Téléphone : <a href="tel:+21653518054" className="text-secondary font-semibold">53 518 054</a><br />
              Email : <a href="mailto:lyceepythagore19@gmail.com" className="text-secondary font-semibold">lyceepythagore19@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">2. Directeur de la publication</h2>
            <p>Le directeur de la publication est le représentant légal du Lycée Pilote Privé Pythagore Kairouan.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">3. Hébergement</h2>
            <p>
              Ce site est hébergé par les services d'hébergement web standards. Pour toute question technique, veuillez contacter l'éditeur du site via l'adresse email mentionnée ci-dessus.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive du Lycée Pilote Privé Pythagore Kairouan, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">5. Limitation de responsabilité</h2>
            <p>
              Le Lycée Pythagore ne saurait être tenu responsable des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son site. Les informations publiées sur ce site sont fournies à titre indicatif et peuvent être modifiées à tout moment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">6. Contact</h2>
            <p>
              Pour toute question relative aux mentions légales, vous pouvez nous contacter par email à{" "}
              <a href="mailto:lyceepythagore19@gmail.com" className="text-secondary font-semibold">lyceepythagore19@gmail.com</a>.
            </p>
          </div>

          <p className="text-xs text-slate-400 pt-4 border-t border-slate-100">
            Dernière mise à jour : Janvier 2026
          </p>
        </div>
      </Reveal>
    </section>
  );
}
