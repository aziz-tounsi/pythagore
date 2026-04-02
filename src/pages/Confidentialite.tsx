import type { ReactNode } from "react";
import { useReveal } from "../components/Layout";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, cls } = useReveal();
  return <div ref={ref} className={`transition-all duration-700 ease-out ${cls} ${className}`}>{children}</div>;
}

export default function Confidentialite() {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <Reveal>
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-8">
          Politique de Confidentialité
        </h1>
      </Reveal>

      <Reveal>
        <div className="prose prose-slate max-w-none space-y-8 text-on-surface-variant leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-primary mb-3">1. Collecte des données</h2>
            <p>
              Le Lycée Pilote Privé Pythagore Kairouan collecte uniquement les données personnelles strictement nécessaires à la gestion des demandes d'information, pré-inscriptions et communications avec les familles. Ces données incluent : nom, prénom, adresse email, numéro de téléphone et informations relatives au niveau scolaire.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">2. Utilisation des données</h2>
            <p>
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre aux demandes d'information et de contact</li>
              <li>Traiter les pré-inscriptions et admissions</li>
              <li>Communiquer avec les familles sur la vie scolaire</li>
              <li>Améliorer nos services et notre site web</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">3. Protection des données</h2>
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité de vos données personnelles. Vos données ne sont jamais vendues, louées ou transmises à des tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">4. Durée de conservation</h2>
            <p>
              Les données personnelles sont conservées pendant la durée nécessaire au traitement de votre demande et conformément aux obligations légales en vigueur en Tunisie. Les données de pré-inscription sont conservées pour la durée de la procédure d'admission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">5. Vos droits</h2>
            <p>
              Conformément à la loi tunisienne relative à la protection des données personnelles, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à :
            </p>
            <p>
              <a href="mailto:lyceepythagore19@gmail.com" className="text-secondary font-semibold">lyceepythagore19@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">6. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques strictement nécessaires au bon fonctionnement du site. Aucun cookie publicitaire ou de suivi tiers n'est utilisé. La navigation sur notre site implique l'acceptation de ces cookies techniques.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-3">7. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de mise à jour.
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
