import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "fr" | "en" | "ar";

export interface Translations {
  nav: { home: string; about: string; admissions: string; studentLife: string; contact: string };
  hero: { badge: string; title: string; subtitle: string; cta1: string; cta2: string };
  footer: { contactUs: string; quickLinks: string; description: string; rights: string; legal: string; privacy: string; dev: string; news: string; recruitment: string; parentPortal: string };
  home: {
    whyTitle: string; whySubtitle: string;
    card1Title: string; card1Text: string;
    card2Title: string; card2Text: string;
    card3Title: string; card3Text: string;
    stats: { val: string; label: string }[];
    galleryTitle: string;
    sliders: { title: string; description: string; altPrefix: string }[];
    ctaTitle: string; ctaSubtitle: string; ctaBtn1: string; ctaBtn2: string;
    testimonialsLabel: string; testimonialsTitle: string;
    testimonials: { text: string; name: string; role: string }[];
  };
  about: {
    badge: string; heroTitle1: string; heroTitle2: string; heroSubtitle: string;
    quoteText: string;
    historyTitle: string; historyIntro: string;
    year2019: string; foundationTitle: string; foundationText: string;
    teamCaption: string; teamSub: string;
    todayLabel: string; missionTitle: string; missionText: string;
    valuesLabel: string; valuesTitle: string; valuesSubtitle: string;
    val1Title: string; val1Text: string;
    val2Title: string; val2Text: string;
    val3Title: string; val3Text: string;
    envTitle: string; envText: string; successRate: string; successTitle: string; successText: string;
    ctaTitle: string; ctaText: string; ctaBtn1: string; ctaBtn2: string;
  };
  studentLife: {
    badge: string; heroTitle1: string; heroTitle2: string; heroSub: string;
    card1Title: string; card1Sub: string;
    card2Title: string; card2Sub: string;
    card3Title: string; card3Sub: string;
    quoteText: string; quoteAuthor: string;
    engagementTitle: string; engagementSub: string;
    clubsTitle: string; clubsText: string; clubsLink: string;
    sportsTitle: string; sportsText: string; sportsLink: string;
    citizenTitle: string; citizenText: string; citizenLink: string;
    facilitiesTitle: string; facilitiesSub: string;
    cdiTitle: string; cdiText: string;
    sportComplexTitle: string; sportComplexText: string;
    theaterLabel: string; theaterTitle: string; theaterText: string;
    scheduleTitle: string; openToAll: string; scheduleDesc: string;
    days: { label: string; open: string; close: string }[];
  };
  contact: {
    badge: string; heroTitle1: string; heroTitle2: string; heroSub: string;
    phoneLabel: string; phoneSchedule: string;
    emailLabel: string; emailResponse: string;
    addressLabel: string; addressCity: string;
    socialTitle: string; socialText: string;
    formName: string; formEmail: string; formSubject: string; formMessage: string;
    formPlaceholderName: string; formPlaceholderEmail: string; formPlaceholderSubject: string; formPlaceholderMessage: string;
    formSubmit: string; formSentTitle: string; formSentText: string; formNew: string;
    mapTitle: string; mapText: string; mapLink: string;
  };
}

const translations: Record<Lang, Translations> = {
  /* ═══════════════════════════ FRENCH ═══════════════════════════ */
  fr: {
    nav: { home: "Accueil", about: "À Propos", admissions: "Admissions", studentLife: "Vie Scolaire", contact: "Contact" },
    hero: { badge: "Excellence Académique", title: "L'excellence à portée de main", subtitle: "Plus qu'une école, une communauté où les jeunes esprits sont cultivés pour atteindre leur plein potentiel.", cta1: "Pré-inscription", cta2: "Découvrir l'établissement" },
    footer: { contactUs: "Contactez-nous", quickLinks: "Liens Rapides", description: "Lycée Pilote Privé Pythagore Kairouan. L'excellence académique au cœur de la ville historique.", rights: "© 2026 Lycée Pilote Privé Pythagore Kairouan. Tous droits réservés.", legal: "Mentions Légales", privacy: "Confidentialité", dev: "Développé par", news: "Actualités", recruitment: "Recrutement", parentPortal: "Espace Parent" },
    home: {
      whyTitle: "Pourquoi Pythagore ?",
      whySubtitle: "Une approche pédagogique centrée sur l'épanouissement et la réussite de chaque élève.",
      card1Title: "Excellence académique", card1Text: "Un programme rigoureux alliant théorie et pratique pour forger les leaders de demain.",
      card2Title: "Accompagnement personnalisé", card2Text: "Chaque élève bénéficie d'un suivi unique adapté à son rythme et ses aspirations spécifiques.",
      card3Title: "Environnement stimulant", card3Text: "Des infrastructures modernes et une vie associative riche favorisant la créativité collective.",
      stats: [{ val: "100%", label: "Recommandé" }, { val: "11K+", label: "Communauté" }, { val: "16", label: "Clubs Actifs" }, { val: "98%", label: "Réussite" }],
      galleryTitle: "La vie au Lycée",
      sliders: [
        { title: "Cours en Classe", description: "Nos salles de cours modernes offrent un cadre propice à l'apprentissage, avec des effectifs réduits permettant un suivi personnalisé de chaque élève.", altPrefix: "En classe" },
        { title: "Laboratoire de Sciences", description: "Équipés de matériel de pointe, nos laboratoires permettent aux élèves de mener des expériences concrètes en physique, chimie et biologie.", altPrefix: "Labo" },
        { title: "Bibliothèque / CDI", description: "Notre Centre de Documentation et d'Information offre un espace calme et inspirant avec des milliers de ressources physiques et numériques.", altPrefix: "CDI" },
        { title: "Complexe Sportif", description: "Le complexe sportif comprend des terrains multisports et des espaces dédiés à l'éducation physique, développant l'esprit d'équipe.", altPrefix: "Sport" },
        { title: "Vie de Groupe", description: "Au-delà des cours, la vie au Lycée Pythagore est riche en moments de partage, de collaboration et d'activités collectives.", altPrefix: "Groupe" },
      ],
      ctaTitle: "Offrez à votre enfant un avenir d'excellence.",
      ctaSubtitle: "Les inscriptions pour l'année scolaire 2024-2025 sont désormais ouvertes. Rejoignez l'élite.",
      ctaBtn1: "Démarrer l'inscription", ctaBtn2: "Prendre rendez-vous",
      testimonialsLabel: "Témoignages", testimonialsTitle: "Paroles de Parents",
      testimonials: [
        { text: "Mon fils s'épanouit chaque jour. Le suivi personnalisé et les valeurs transmises ici sont exceptionnels.", name: "Mme. Ben Salem", role: "Maman • 3ème année" },
        { text: "On sent une vraie passion chez les enseignants. Pythagore est devenu une seconde famille pour notre fille.", name: "Mr. Trabelsi", role: "Papa • Terminale" },
        { text: "La transition s'est faite en douceur grâce à l'accompagnement psychopédagogique remarquable de l'équipe.", name: "Dr. Gharbi", role: "Maman • 2ème année" },
      ],
    },
    about: {
      badge: "Héritage & Excellence",
      heroTitle1: "Forger les {h} de Demain à Kairouan.", heroTitle2: "Esprits",
      heroSubtitle: "Plus qu'une école, une famille académique dédiée à l'épanouissement intellectuel et humain de chaque élève depuis 2019.",
      quoteText: "L'éducation n'est pas la préparation à la vie ; l'éducation est la vie elle-même.",
      historyTitle: "Notre Histoire",
      historyIntro: "Fondé avec la vision de ramener l'excellence pédagogique au cœur de la ville historique de Kairouan, le Lycée Pythagore est né d'une passion pour le savoir.",
      year2019: "2019", foundationTitle: "La Fondation",
      foundationText: "Un petit groupe d'éducateurs visionnaires décide de créer un établissement où la discipline rencontre la bienveillance. L'objectif était clair : offrir aux élèves de Kairouan un environnement comparable aux meilleures institutions internationales.",
      teamCaption: "L'équipe fondatrice", teamSub: "Rigueur et Passion",
      todayLabel: "Aujourd'hui", missionTitle: "Une Mission de Vie",
      missionText: "Aujourd'hui, Pythagore est fier de ses résultats exceptionnels aux examens nationaux, mais notre plus grande fierté reste le regard brillant de nos élèves qui découvrent chaque jour leurs propres capacités.",
      valuesLabel: "Le Socle Pythagore", valuesTitle: "Nos Valeurs Fondamentales", valuesSubtitle: "Un accompagnement humain pour des résultats d'exception.",
      val1Title: "Excellence", val1Text: "Nous ne visons pas seulement la réussite scolaire, mais le dépassement de soi. Chaque élève est encouragé à atteindre son plein potentiel académique à travers des méthodes innovantes.",
      val2Title: "Discipline", val2Text: "Un cadre structuré et respectueux est essentiel pour l'apprentissage. Nous forgeons le caractère et le sens de la responsabilité, piliers d'une vie future épanouie.",
      val3Title: "Accompagnement", val3Text: "Chaque enfant est unique. Notre écoute attentive et notre suivi personnalisé assurent que personne n'est laissé pour compte dans son parcours éducatif.",
      envTitle: "Un Cadre Inspirant", envText: "Nos laboratoires et espaces de vie sont conçus pour stimuler la curiosité et l'innovation.",
      successRate: "98%", successTitle: "Taux de réussite", successText: "Une preuve constante de l'engagement de nos élèves et de l'expertise de notre corps professoral.",
      ctaTitle: "Prêt à rejoindre l'aventure Pythagore ?",
      ctaText: "Les inscriptions pour la rentrée prochaine sont ouvertes. Venez nous rencontrer et découvrez notre campus à Kairouan.",
      ctaBtn1: "Prendre Rendez-vous", ctaBtn2: "Télécharger la Brochure",
    },
    studentLife: {
      badge: "Vie Scolaire",
      heroTitle1: "Vibrer, Créer, {h}", heroTitle2: "Grandir.",
      heroSub: "Plus qu'un établissement d'excellence, le Lycée Pythagore est un écosystème où chaque talent trouve son écho à travers le sport, la culture et l'engagement citoyen.",
      card1Title: "Sorties & Voyages", card1Sub: "Voir la galerie",
      card2Title: "Sports", card2Sub: "Sports",
      card3Title: "Clubs", card3Sub: "Clubs",
      quoteText: "Un esprit sain dans un corps sain.", quoteAuthor: "Le Serment Pythagoricien",
      engagementTitle: "Épanouissement & Engagement", engagementSub: "Le lycée est un lieu de vie où se forgent les amitiés et les convictions. Découvrez nos piliers de l'expérience étudiante.",
      clubsTitle: "Clubs & Sociétés", clubsText: "De l'astronomie au débat d'idées, plus de 15 clubs dirigés par les élèves permettent de cultiver des passions uniques.", clubsLink: "Découvrir les clubs",
      sportsTitle: "Sports & Compétition", sportsText: "Nos équipes sportives portent haut les couleurs du lycée lors des tournois régionaux et nationaux.", sportsLink: "Planning des matchs",
      citizenTitle: "Citoyenneté", citizenText: "L'engagement social est au cœur de notre projet pédagogique à travers des actions caritatives et écologiques.", citizenLink: "Projets solidaires",
      facilitiesTitle: "Un Cadre d'Exception", facilitiesSub: "Des infrastructures modernes conçues pour favoriser la concentration et la créativité au cœur de Kairouan.",
      cdiTitle: "Le CDI Digital", cdiText: "Plus de 10,000 ressources physiques et un accès illimité aux bases de données mondiales.",
      sportComplexTitle: "Complexe Sportif", sportComplexText: "Gymnase multisports, salles de fitness et terrains extérieurs pour toutes les disciplines.",
      theaterLabel: "Focus Activité", theaterTitle: "L'Atelier de Théâtre :|Osez la Scène.",
      theaterText: "Chaque année, nos élèves montent une production majeure mêlant classique et contemporain. Un voyage émotionnel qui développe l'assurance et l'éloquence.",
      scheduleTitle: "Horaires", openToAll: "● Ouvert à tous",
      scheduleDesc: "Retrouvez nos créneaux d'ouverture hebdomadaires. Nous privilégions une atmosphère calme et une attention personnalisée.",
      days: [
        { label: "Lun", open: "08h00", close: "17h00" },
        { label: "Mar", open: "08h00", close: "17h00" },
        { label: "Mer", open: "08h00", close: "17h00" },
        { label: "Jeu", open: "08h00", close: "17h00" },
        { label: "Ven", open: "08h00", close: "17h00" },
        { label: "Sam", open: "08h00", close: "17h00" },
      ],
    },
    contact: {
      badge: "Entrez en Contact",
      heroTitle1: "Nous sommes là pour {h} et vous accompagner.", heroTitle2: "écouter",
      heroSub: "Que vous soyez un futur élève, un parent ou un partenaire, notre équipe est à votre disposition pour répondre à toutes vos interrogations sur la vie à Pythagore.",
      phoneLabel: "Téléphone", phoneSchedule: "Lundi — Samedi, 8h à 17h",
      emailLabel: "Email", emailResponse: "Réponse sous 24h ouvrées",
      addressLabel: "Adresse", addressCity: "Tunisie, 3100",
      socialTitle: "Suivez notre actualité", socialText: "Rejoignez notre communauté sur Facebook",
      formName: "Nom Complet", formEmail: "Email", formSubject: "Sujet", formMessage: "Message",
      formPlaceholderName: "Jean Dupont", formPlaceholderEmail: "email@exemple.com", formPlaceholderSubject: "Admissions, Vie Scolaire...", formPlaceholderMessage: "Comment pouvons-nous vous aider ?",
      formSubmit: "Envoyer le Message",
      formSentTitle: "Message envoyé !", formSentText: "Nous vous répondrons sous 24h ouvrées.", formNew: "Nouveau message",
      mapTitle: "Notre Emplacement", mapText: "Situé au cœur de Kairouan, proche des commodités et accessible par les transports.", mapLink: "Ouvrir dans Google Maps",
    },
  },
  /* ═══════════════════════════ ENGLISH ═══════════════════════════ */
  en: {
    nav: { home: "Home", about: "About", admissions: "Admissions", studentLife: "Student Life", contact: "Contact" },
    hero: { badge: "Academic Excellence", title: "Excellence within reach", subtitle: "More than a school, a community where young minds are nurtured to reach their full potential.", cta1: "Pre-enroll", cta2: "Discover the school" },
    footer: { contactUs: "Contact Us", quickLinks: "Quick Links", description: "Pythagore Private Pilot High School Kairouan. Academic excellence at the heart of the historic city.", rights: "© 2026 Lycée Pilote Privé Pythagore Kairouan. All rights reserved.", legal: "Legal Notice", privacy: "Privacy", dev: "Developed by", news: "News", recruitment: "Recruitment", parentPortal: "Parent Portal" },
    home: {
      whyTitle: "Why Pythagore?",
      whySubtitle: "A pedagogical approach centered on the fulfillment and success of each student.",
      card1Title: "Academic Excellence", card1Text: "A rigorous program combining theory and practice to shape tomorrow's leaders.",
      card2Title: "Personalized Support", card2Text: "Every student benefits from unique guidance adapted to their pace and specific aspirations.",
      card3Title: "Stimulating Environment", card3Text: "Modern facilities and a rich community life fostering collective creativity.",
      stats: [{ val: "100%", label: "Recommended" }, { val: "11K+", label: "Community" }, { val: "16", label: "Active Clubs" }, { val: "98%", label: "Success Rate" }],
      galleryTitle: "Life at the School",
      sliders: [
        { title: "Classroom Sessions", description: "Our modern classrooms provide an environment conducive to learning, with small class sizes allowing personalized follow-up for each student.", altPrefix: "Classroom" },
        { title: "Science Laboratory", description: "Equipped with cutting-edge material, our labs allow students to conduct hands-on experiments in physics, chemistry and biology.", altPrefix: "Lab" },
        { title: "Library / Resource Center", description: "Our Documentation and Information Center offers a calm and inspiring space with thousands of physical and digital resources.", altPrefix: "Library" },
        { title: "Sports Complex", description: "The sports complex includes multi-sport courts and spaces dedicated to physical education, developing teamwork and discipline.", altPrefix: "Sports" },
        { title: "Group Life", description: "Beyond classes, life at Lycée Pythagore is rich in moments of sharing, collaboration and collective activities.", altPrefix: "Group" },
      ],
      ctaTitle: "Give your child a future of excellence.",
      ctaSubtitle: "Enrollment for the 2024-2025 academic year is now open. Join the elite.",
      ctaBtn1: "Start enrollment", ctaBtn2: "Book an appointment",
      testimonialsLabel: "Testimonials", testimonialsTitle: "What Parents Say",
      testimonials: [
        { text: "My son thrives every day. The personalized support and values conveyed here are exceptional.", name: "Mrs. Ben Salem", role: "Mother • 3rd Year" },
        { text: "You can feel a real passion in the teachers. Pythagore has become a second family for our daughter.", name: "Mr. Trabelsi", role: "Father • Senior Year" },
        { text: "The transition was smooth thanks to the remarkable psycho-pedagogical support from the team.", name: "Dr. Gharbi", role: "Mother • 2nd Year" },
      ],
    },
    about: {
      badge: "Heritage & Excellence",
      heroTitle1: "Shaping the {h} of Tomorrow in Kairouan.", heroTitle2: "Minds",
      heroSubtitle: "More than a school, an academic family dedicated to the intellectual and human fulfillment of every student since 2019.",
      quoteText: "Education is not preparation for life; education is life itself.",
      historyTitle: "Our History",
      historyIntro: "Founded with the vision of bringing pedagogical excellence to the heart of the historic city of Kairouan, Lycée Pythagore was born from a passion for knowledge.",
      year2019: "2019", foundationTitle: "The Foundation",
      foundationText: "A small group of visionary educators decided to create an institution where discipline meets kindness. The goal was clear: to offer Kairouan's students an environment comparable to the best international institutions.",
      teamCaption: "The founding team", teamSub: "Rigor and Passion",
      todayLabel: "Today", missionTitle: "A Life Mission",
      missionText: "Today, Pythagore is proud of its exceptional results in national exams, but our greatest pride remains the bright eyes of our students discovering their own abilities every day.",
      valuesLabel: "The Pythagore Foundation", valuesTitle: "Our Core Values", valuesSubtitle: "Human support for exceptional results.",
      val1Title: "Excellence", val1Text: "We don't just aim for academic success, but for self-improvement. Every student is encouraged to reach their full academic potential through innovative methods.",
      val2Title: "Discipline", val2Text: "A structured and respectful environment is essential for learning. We forge character and a sense of responsibility, pillars of a fulfilled future life.",
      val3Title: "Support", val3Text: "Every child is unique. Our attentive listening and personalized follow-up ensure that no one is left behind in their educational journey.",
      envTitle: "An Inspiring Setting", envText: "Our laboratories and living spaces are designed to stimulate curiosity and innovation.",
      successRate: "98%", successTitle: "Success Rate", successText: "A consistent proof of our students' commitment and our faculty's expertise.",
      ctaTitle: "Ready to join the Pythagore adventure?",
      ctaText: "Enrollment for the next school year is open. Come meet us and discover our campus in Kairouan.",
      ctaBtn1: "Book an Appointment", ctaBtn2: "Download Brochure",
    },
    studentLife: {
      badge: "Student Life",
      heroTitle1: "Thrive, Create, {h}", heroTitle2: "Grow.",
      heroSub: "More than an institution of excellence, Lycée Pythagore is an ecosystem where every talent finds its voice through sports, culture and civic engagement.",
      card1Title: "Trips & Outings", card1Sub: "View gallery",
      card2Title: "Sports", card2Sub: "Sports",
      card3Title: "Clubs", card3Sub: "Clubs",
      quoteText: "A healthy mind in a healthy body.", quoteAuthor: "The Pythagorean Oath",
      engagementTitle: "Fulfillment & Engagement", engagementSub: "The school is a place of life where friendships and convictions are forged. Discover the pillars of the student experience.",
      clubsTitle: "Clubs & Societies", clubsText: "From astronomy to debate, over 15 student-led clubs allow the cultivation of unique passions.", clubsLink: "Discover the clubs",
      sportsTitle: "Sports & Competition", sportsText: "Our sports teams proudly represent the school in regional and national tournaments.", sportsLink: "Match schedule",
      citizenTitle: "Citizenship", citizenText: "Social engagement is at the heart of our educational project through charitable and ecological actions.", citizenLink: "Community projects",
      facilitiesTitle: "An Exceptional Setting", facilitiesSub: "Modern facilities designed to foster focus and creativity in the heart of Kairouan.",
      cdiTitle: "The Digital Library", cdiText: "Over 10,000 physical resources and unlimited access to worldwide databases.",
      sportComplexTitle: "Sports Complex", sportComplexText: "Multi-sport gymnasium, fitness rooms and outdoor courts for all disciplines.",
      theaterLabel: "Activity Spotlight", theaterTitle: "Theater Workshop:|Dare the Stage.",
      theaterText: "Every year, our students produce a major show blending classic and contemporary works. An emotional journey that develops confidence and eloquence.",
      scheduleTitle: "Schedule", openToAll: "● Open to all",
      scheduleDesc: "Check our weekly opening hours. We prioritize a calm atmosphere and personalized attention.",
      days: [
        { label: "Mon", open: "8:00 AM", close: "5:00 PM" },
        { label: "Tue", open: "8:00 AM", close: "5:00 PM" },
        { label: "Wed", open: "8:00 AM", close: "5:00 PM" },
        { label: "Thu", open: "8:00 AM", close: "5:00 PM" },
        { label: "Fri", open: "8:00 AM", close: "5:00 PM" },
        { label: "Sat", open: "8:00 AM", close: "5:00 PM" },
      ],
    },
    contact: {
      badge: "Get in Touch",
      heroTitle1: "We are here to {h} and guide you.", heroTitle2: "listen",
      heroSub: "Whether you're a future student, a parent or a partner, our team is at your disposal to answer all your questions about life at Pythagore.",
      phoneLabel: "Phone", phoneSchedule: "Monday — Saturday, 8 AM to 5 PM",
      emailLabel: "Email", emailResponse: "Response within 24 business hours",
      addressLabel: "Address", addressCity: "Tunisia, 3100",
      socialTitle: "Follow our news", socialText: "Join our community on Facebook",
      formName: "Full Name", formEmail: "Email", formSubject: "Subject", formMessage: "Message",
      formPlaceholderName: "John Doe", formPlaceholderEmail: "email@example.com", formPlaceholderSubject: "Admissions, Student Life...", formPlaceholderMessage: "How can we help you?",
      formSubmit: "Send Message",
      formSentTitle: "Message sent!", formSentText: "We will respond within 24 business hours.", formNew: "New message",
      mapTitle: "Our Location", mapText: "Located in the heart of Kairouan, close to amenities and accessible by public transport.", mapLink: "Open in Google Maps",
    },
  },
  /* ═══════════════════════════ ARABIC ═══════════════════════════ */
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", admissions: "التسجيل", studentLife: "الحياة المدرسية", contact: "اتصل بنا" },
    hero: { badge: "التميز الأكاديمي", title: "التميز في متناول يدك", subtitle: "أكثر من مجرد مدرسة، مجتمع يُنمَّى فيه العقول الشابة للوصول إلى أقصى إمكاناتها.", cta1: "التسجيل المسبق", cta2: "اكتشف المؤسسة" },
    footer: { contactUs: "اتصل بنا", quickLinks: "روابط سريعة", description: "Lycée Pilote Privé Pythagore Kairouan. التميز الأكاديمي في قلب المدينة التاريخية.", rights: "© 2026 Lycée Pilote Privé Pythagore Kairouan. جميع الحقوق محفوظة.", legal: "إشعار قانوني", privacy: "الخصوصية", dev: "طوّره", news: "الأخبار", recruitment: "التوظيف", parentPortal: "بوابة الأولياء" },
    home: {
      whyTitle: "لماذا Pythagore؟",
      whySubtitle: "منهج تعليمي يركز على ازدهار ونجاح كل تلميذ.",
      card1Title: "التميز الأكاديمي", card1Text: "برنامج صارم يجمع بين النظرية والتطبيق لتكوين قادة الغد.",
      card2Title: "مرافقة شخصية", card2Text: "يستفيد كل تلميذ من متابعة فريدة تتناسب مع وتيرته وتطلعاته.",
      card3Title: "بيئة محفزة", card3Text: "بنية تحتية حديثة وحياة جمعوية غنية تعزز الإبداع الجماعي.",
      stats: [{ val: "100%", label: "موصى به" }, { val: "+11K", label: "مجتمع" }, { val: "16", label: "نادٍ نشط" }, { val: "98%", label: "نسبة نجاح" }],
      galleryTitle: "الحياة في الثانوية",
      sliders: [
        { title: "الدروس في القسم", description: "توفر قاعاتنا الحديثة بيئة ملائمة للتعلم مع أعداد محدودة تسمح بمتابعة شخصية لكل تلميذ.", altPrefix: "قسم" },
        { title: "مختبر العلوم", description: "مجهزة بأحدث المعدات، تتيح مختبراتنا للتلاميذ إجراء تجارب عملية في الفيزياء والكيمياء والبيولوجيا.", altPrefix: "مختبر" },
        { title: "المكتبة / مركز التوثيق", description: "يوفر مركز التوثيق والمعلومات مساحة هادئة وملهمة مع آلاف الموارد المادية والرقمية.", altPrefix: "مكتبة" },
        { title: "المركب الرياضي", description: "يضم المركب الرياضي ملاعب متعددة ومساحات مخصصة للتربية البدنية تنمي روح الفريق والانضباط.", altPrefix: "رياضة" },
        { title: "الحياة الجماعية", description: "خارج الدروس، الحياة في Lycée Pythagore غنية بلحظات المشاركة والتعاون والأنشطة الجماعية.", altPrefix: "جماعي" },
      ],
      ctaTitle: "امنح طفلك مستقبلاً من التميز.",
      ctaSubtitle: "التسجيل للسنة الدراسية 2024-2025 مفتوح الآن. انضموا إلى النخبة.",
      ctaBtn1: "بدء التسجيل", ctaBtn2: "حجز موعد",
      testimonialsLabel: "شهادات", testimonialsTitle: "كلمات الأولياء",
      testimonials: [
        { text: "ابني يزدهر كل يوم. المتابعة الشخصية والقيم المنقولة هنا استثنائية.", name: "Mme. Ben Salem", role: "أم • السنة الثالثة" },
        { text: "نشعر بشغف حقيقي لدى المعلمين. أصبحت Pythagore عائلة ثانية لابنتنا.", name: "Mr. Trabelsi", role: "أب • سنة الباكالوريا" },
        { text: "تم الانتقال بسلاسة بفضل الدعم النفسي التربوي المتميز من الفريق.", name: "Dr. Gharbi", role: "أم • السنة الثانية" },
      ],
    },
    about: {
      badge: "تراث وتميّز",
      heroTitle1: "صياغة {h} الغد في Kairouan.", heroTitle2: "عقول",
      heroSubtitle: "أكثر من مدرسة، عائلة أكاديمية مكرسة للازدهار الفكري والإنساني لكل تلميذ منذ 2019.",
      quoteText: "التعليم ليس إعداداً للحياة؛ التعليم هو الحياة ذاتها.",
      historyTitle: "تاريخنا",
      historyIntro: "تأسست Lycée Pythagore برؤية إعادة التميز التربوي إلى قلب مدينة Kairouan التاريخية، ولدت من شغف بالمعرفة.",
      year2019: "2019", foundationTitle: "التأسيس",
      foundationText: "قررت مجموعة صغيرة من المربين أصحاب الرؤية إنشاء مؤسسة يلتقي فيها الانضباط بالرفق. كان الهدف واضحاً: تقديم بيئة تضاهي أفضل المؤسسات الدولية لتلاميذ Kairouan.",
      teamCaption: "الفريق المؤسس", teamSub: "الصرامة والشغف",
      todayLabel: "اليوم", missionTitle: "رسالة حياة",
      missionText: "اليوم، Pythagore فخورة بنتائجها الاستثنائية في الامتحانات الوطنية، لكن فخرنا الأكبر يبقى في عيون تلاميذنا المتألقة وهم يكتشفون قدراتهم يومياً.",
      valuesLabel: "ركائز Pythagore", valuesTitle: "قيمنا الأساسية", valuesSubtitle: "مرافقة إنسانية لنتائج استثنائية.",
      val1Title: "التميز", val1Text: "لا نسعى فقط إلى النجاح الدراسي بل إلى تجاوز الذات. كل تلميذ مُشجَّع على بلوغ أقصى إمكاناته من خلال أساليب مبتكرة.",
      val2Title: "الانضباط", val2Text: "الإطار المنظم والمحترم ضروري للتعلم. نصقل الشخصية والمسؤولية كركيزتين لحياة مستقبلية ناجحة.",
      val3Title: "المرافقة", val3Text: "كل طفل فريد. إصغاؤنا ومتابعتنا الشخصية يضمنان ألا يُترك أحد في مسيرته التعليمية.",
      envTitle: "بيئة ملهمة", envText: "مختبراتنا وفضاءاتنا مصممة لتحفيز الفضول والابتكار.",
      successRate: "98%", successTitle: "نسبة النجاح", successText: "دليل مستمر على التزام تلاميذنا وخبرة طاقمنا التعليمي.",
      ctaTitle: "مستعد للانضمام لمغامرة Pythagore؟",
      ctaText: "التسجيل للسنة القادمة مفتوح. تعالوا لزيارتنا واكتشفوا حرمنا في Kairouan.",
      ctaBtn1: "حجز موعد", ctaBtn2: "تحميل الكتيّب",
    },
    studentLife: {
      badge: "الحياة المدرسية",
      heroTitle1: "انبض، أبدع، {h}", heroTitle2: "انمُ.",
      heroSub: "أكثر من مؤسسة تفوق، Lycée Pythagore نظام بيئي يجد فيه كل موهبة صداها عبر الرياضة والثقافة والمواطنة.",
      card1Title: "رحلات ونزهات", card1Sub: "عرض المعرض",
      card2Title: "الرياضة", card2Sub: "الرياضة",
      card3Title: "الأندية", card3Sub: "الأندية",
      quoteText: "العقل السليم في الجسم السليم.", quoteAuthor: "القسم الفيثاغوري",
      engagementTitle: "الازدهار والالتزام", engagementSub: "الثانوية مكان حياة تُنسج فيه الصداقات والقناعات. اكتشفوا ركائز التجربة الطلابية.",
      clubsTitle: "الأندية والجمعيات", clubsText: "من الفلك إلى المناظرة، أكثر من 15 نادياً يديرها التلاميذ لتنمية شغف فريد.", clubsLink: "اكتشف الأندية",
      sportsTitle: "الرياضة والمنافسة", sportsText: "تمثل فرقنا الرياضية الثانوية بفخر في البطولات الجهوية والوطنية.", sportsLink: "جدول المباريات",
      citizenTitle: "المواطنة", citizenText: "الالتزام الاجتماعي في صميم مشروعنا التربوي من خلال أعمال خيرية وبيئية.", citizenLink: "مشاريع تضامنية",
      facilitiesTitle: "إطار استثنائي", facilitiesSub: "بنية تحتية حديثة مصممة لتعزيز التركيز والإبداع في قلب Kairouan.",
      cdiTitle: "المكتبة الرقمية", cdiText: "أكثر من 10,000 مورد مادي ووصول غير محدود لقواعد البيانات العالمية.",
      sportComplexTitle: "المركب الرياضي", sportComplexText: "قاعة رياضية متعددة، صالات لياقة وملاعب خارجية لجميع الرياضات.",
      theaterLabel: "نشاط مميز", theaterTitle: "ورشة المسرح:|جرّب خشبة المسرح.",
      theaterText: "كل سنة ينتج تلاميذنا عرضاً كبيراً يمزج الكلاسيكي بالمعاصر. رحلة عاطفية تنمي الثقة والبلاغة.",
      scheduleTitle: "المواعيد", openToAll: "● مفتوح للجميع",
      scheduleDesc: "اطلعوا على مواعيد الافتتاح الأسبوعية. نحرص على جو هادئ واهتمام شخصي.",
      days: [
        { label: "إثن", open: "08:00", close: "17:00" },
        { label: "ثلا", open: "08:00", close: "17:00" },
        { label: "أرب", open: "08:00", close: "17:00" },
        { label: "خمي", open: "08:00", close: "17:00" },
        { label: "جمع", open: "08:00", close: "17:00" },
        { label: "سبت", open: "08:00", close: "17:00" },
      ],
    },
    contact: {
      badge: "تواصل معنا",
      heroTitle1: "نحن هنا {h} ومرافقتكم.", heroTitle2: "للإصغاء",
      heroSub: "سواء كنتم تلميذاً مستقبلياً أو ولي أمر أو شريكاً، فريقنا في خدمتكم للإجابة على جميع استفساراتكم حول الحياة في Pythagore.",
      phoneLabel: "الهاتف", phoneSchedule: "الإثنين — السبت، 8 صباحاً إلى 5 مساءً",
      emailLabel: "البريد الإلكتروني", emailResponse: "الرد خلال 24 ساعة عمل",
      addressLabel: "العنوان", addressCity: "تونس، 3100",
      socialTitle: "تابعوا أخبارنا", socialText: "انضموا لمجتمعنا على Facebook",
      formName: "الاسم الكامل", formEmail: "البريد الإلكتروني", formSubject: "الموضوع", formMessage: "الرسالة",
      formPlaceholderName: "محمد علي", formPlaceholderEmail: "email@exemple.com", formPlaceholderSubject: "التسجيل، الحياة المدرسية...", formPlaceholderMessage: "كيف يمكننا مساعدتكم؟",
      formSubmit: "إرسال الرسالة",
      formSentTitle: "تم الإرسال!", formSentText: "سنرد عليكم خلال 24 ساعة عمل.", formNew: "رسالة جديدة",
      mapTitle: "موقعنا", mapText: "في قلب Kairouan، قريب من المرافق ويمكن الوصول إليه بالمواصلات.", mapLink: "فتح في Google Maps",
    },
  },
};

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
