// src/pages/Decouvrir/ADN.tsx
import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Lightbulb, 
  Award, 
  MapPin, 
  CheckSquare, 
  Leaf,
  Star,
  Shield,
  TrendingUp,
  Target,
  Zap,
  Heart,
  Globe,
  Clock,
  Quote,
  ChevronRight,
  Play,
  ThumbsUp,
  GraduationCap,
  Handshake,
  Sparkles,
  Rocket,
  Brain,
  Eye,
  Megaphone
} from 'lucide-react';

// Composant compteur animé
const AnimatedCounter = ({ targetValue, suffix = '' }: { targetValue: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = targetValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, targetValue]);

  return (
    <div ref={ref} className="count-up">
      <span className="text-6xl md:text-7xl font-bold gradient-text">{count}</span>
      <span className="text-4xl md:text-5xl font-bold text-white/50">{suffix}</span>
    </div>
  );
};

// Carte de valeur
const ValueCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`card-glass p-8 transition-all duration-700 hover:scale-105 hover:glow-brand ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-brand-500/20 rounded-2xl flex items-center justify-center mb-6">
        <div className="text-brand-400">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

// Carte témoignage
const TestimonialCard = ({ 
  name, 
  role, 
  content, 
  delay 
}: { 
  name: string; 
  role: string; 
  content: string; 
  delay: number 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`card-glass p-6 transition-all duration-700 ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote className="w-10 h-10 text-brand-500/30 mb-4" />
      <p className="text-gray-300 leading-relaxed mb-6">{content}</p>
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-brand-400">{role}</p>
      </div>
    </div>
  );
};

// Composant "Ce qu'on ne fait pas"
const AntiPromise = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 text-gray-400 hover:text-gray-300 transition-colors group">
    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full group-hover:scale-125 transition-transform" />
    <span className="text-sm md:text-base">{text}</span>
  </div>
);

// Lettre ONLY CLOZ avec animation
const OnlyClozLetter = ({ 
  letter, 
  meaning, 
  index 
}: { 
  letter: string; 
  meaning: string; 
  index: number 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 border border-white/10">
        <span className="text-3xl font-bold gradient-text">{letter}</span>
      </div>
      <p className="font-bold text-white text-lg mb-2">{meaning.split(' ')[0]}</p>
      <p className="text-sm text-gray-400 max-w-[180px] mx-auto">
        {meaning.split(' ').slice(1).join(' ')}
      </p>
    </div>
  );
};

// Page principale
const ADNPage: React.FC = () => {
  const valeurs = [
    {
      icon: <Handshake size={32} />,
      title: "Partenaire",
      description: "Notre valeur ajoutée se base sur l'accompagnement, la confiance et la co-construction. Certains d'entre vous nous font confiance depuis plus de 10 ans."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovante",
      description: "Nous croyons que l'innovation, c'est agir en premier. C'est refuser les effets de mode pour privilégier la pertinence, le concret, et l'amélioration continue."
    },
    {
      icon: <Award size={32} />,
      title: "Experte",
      description: "Google Partner, Meta Business Partner, Microsoft Advertising, label QASEO. Ces reconnaissances garantissent la rigueur et la qualité de nos interventions."
    },
    {
      icon: <MapPin size={32} />,
      title: "De proximité",
      description: "Nos antennes locales pour rester proches de vous, partout en France. Nous nous déplaçons dans vos locaux et vous ouvrons nos portes."
    },
    {
      icon: <CheckSquare size={32} />,
      title: "Organisée",
      description: "Modes opératoires, rétroplanning, outils de pilotage... nous ne laissons rien au hasard. Rigueur ne veut pas dire rigidité !"
    },
    {
      icon: <Leaf size={32} />,
      title: "Engagée",
      description: "Médaille d'argent EcoVadis 2025, nous plaçant dans le top 15% des agences de notre secteur en matière de RSE."
    }
  ];

  const antiPromises = [
    "On ne fait pas de promesses qu'on ne peut pas tenir",
    "On ne laisse pas une IA remplacer l'intelligence humaine",
    "On ne vend pas des audits à la chaîne ou des slides à paillettes",
    "On ne dit pas « agile » quand on veut juste dire « on improvisera »",
    "On ne transforme pas chaque brief en tunnel PowerPoint",
    "On ne déploie pas de « recettes miracles » copiées-collées",
    "On ne se cache pas derrière des anglicismes pour faire sérieux",
    "On ne se contente pas de suivre la tendance sans l'avoir décortiquée",
    "Et surtout… on ne dit pas « oui » quand « non » serait plus honnête"
  ];

  const onlyClozLetters = [
    { letter: "O", meaning: "OPTIMISTES - Nous voyons les opportunités plutôt que les obstacles" },
    { letter: "N", meaning: "NON-CONFORMISTES - Nous n'empruntons ni les chemins battus ni les formules toutes faites" },
    { letter: "L", meaning: "LOYAUX - La confiance et la transparence sont au cœur de nos relations" },
    { letter: "Y", meaning: "DYNAMIQUES - L'énergie et la passion animent chaque projet" },
    { letter: "C", meaning: "CRÉATIFS - Nous imaginons des solutions uniques et sur-mesure" },
    { letter: "L", meaning: "LOCAUX - Proches de nos clients grâce à nos antennes régionales" },
    { letter: "O", meaning: "ORGANISÉS - La rigueur méthodologique pour des résultats concrets" },
    { letter: "Z", meaning: "ZÉLÉS - Nous mettons tout en œuvre pour la satisfaction client" }
  ];

  const testimonials = [
    {
      name: "François",
      role: "Manager",
      content: "Arrivé en 2017 en tant que stagiaire, avec plus d'envie que d'expérience, j'ai senti que j'étais au bon endroit. J'ai trouvé chez Only Cloz une vraie culture de la progression. Mon engagement m'a permis de prendre plus de responsabilités jusqu'à devenir manager."
    },
    {
      name: "Jean-Charles",
      role: "Directeur Qualité & Production",
      content: "Arrivé en 2015, j'ai eu la chance de pouvoir évoluer : chef de projet, consultant, teamleader, manager... et aujourd'hui directeur. On m'a fait confiance, on m'a laissé porter mes propres projets."
    },
    {
      name: "Guillaume",
      role: "Manager BU Créa/Tech",
      content: "Arrivé en 2009, j'ai commencé comme graphiste, puis intégrateur web, chargé de projets, responsable production... J'ai pu grandir avec l'entreprise, évoluer au rythme de ses ambitions."
    },
    {
      name: "Valérie",
      role: "Manager",
      content: "Arrivée en 2017 en tant que cheffe de projet SEO, j'ai évolué vers CSM puis manager. Ce qui me motive ? L'envie d'apprendre, toujours. La diversité des sujets, les problématiques nouvelles à résoudre."
    },
    {
      name: "Roxane",
      role: "Manager",
      content: "Après 2 stages, j'ai rejoint Only Cloz en 2016. J'ai beaucoup appris grâce à une équipe bienveillante. Aujourd'hui manager, ce poste m'ouvre de nouvelles perspectives chaque jour."
    }
  ];

  const certifications = [
    { name: "Google Partner", icon: <Star size={24} />, color: "from-blue-500 to-cyan-500" },
    { name: "Meta Business Partner", icon: <ThumbsUp size={24} />, color: "from-blue-600 to-indigo-600" },
    { name: "Microsoft Advertising", icon: <Target size={24} />, color: "from-orange-500 to-red-500" },
    { name: "EcoVadis Argent", icon: <Leaf size={24} />, color: "from-green-500 to-emerald-500" },
    { name: "Label QASEO", icon: <Award size={24} />, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient pt-32 pb-20 noise">
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        {/* Orbes flottants */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl orb-1" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl orb-2" />
        
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span className="text-sm text-gray-300">Qui sommes-nous ?</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Notre <span className="gradient-text">ADN</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-balance">
              L'agence qui fait la différence pour vous, avec une valeur ajoutée basée sur l'accompagnement, 
              la confiance et la co-construction.
            </p>
          </div>
        </div>
      </section>

      {/* Section Valeurs - Grille 2x3 */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Notre <span className="gradient-text">philosophie</span> en 6 piliers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des valeurs qui guident nos actions et nos relations au quotidien
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valeurs.map((valeur, index) => (
            <ValueCard
              key={index}
              icon={valeur.icon}
              title={valeur.title}
              description={valeur.description}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Section Expertise avec compteur */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent" />
        
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="w-4 h-4 text-brand-400" />
                <span className="text-sm text-gray-300">Expertise reconnue</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Une expertise <span className="gradient-text">certifiée</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nos expertises s'appuient sur des bases solides. Labels et distinctions qui 
                garantissent la rigueur et la qualité de nos interventions. Nos collaborateurs 
                bénéficient d'une demi-journée hebdomadaire pour se former aux évolutions du métier.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center gap-2 bg-gradient-to-r ${cert.color} bg-opacity-10 rounded-full px-4 py-2 border border-white/10`}
                  >
                    {cert.icon}
                    <span className="text-sm text-white">{cert.name}</span>
                  </div>
                ))}
              </div>

              <button className="btn-outline group">
                <span>Découvrir nos certifications</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="card-glass p-8 text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
                <p className="text-gray-400 mb-4">Experts à votre service depuis</p>
                <AnimatedCounter targetValue={15} suffix="+" />
                <p className="text-gray-400 mt-4">ans d'expertise digitale</p>
                
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex justify-center gap-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">50+</p>
                      <p className="text-xs text-gray-500">Experts passionnés</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">7</p>
                      <p className="text-xs text-gray-500">Antennes locales</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">1000+</p>
                      <p className="text-xs text-gray-500">Projets réalisés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Ce qu'on ne fait pas" */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="card-glass p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-500/10 rounded-full px-4 py-2 mb-4">
              <Heart className="w-4 h-4 text-brand-400" />
              <span className="text-sm text-gray-300">Notre éthique, notre force</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ce qu'on <span className="gradient-text">ne fait pas</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Notre éthique en action : des non-promesses qui valent plus que des engagements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {antiPromises.map((promise, index) => (
              <AntiPromise key={index} text={promise} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi Only Cloz */}
      <section className="py-20 hero-gradient relative">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-4">
              <Megaphone className="w-4 h-4 text-brand-400" />
              <span className="text-sm text-gray-300">La signification de notre nom</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi <span className="gradient-text">"Only Cloz"</span> ?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Chaque lettre de notre nom raconte qui nous sommes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {onlyClozLetters.map((item, index) => (
              <OnlyClozLetter
                key={index}
                letter={item.letter}
                meaning={item.meaning}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-gray-300">La parole est à nos talents</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ils font <span className="gradient-text">NOTRE ADN</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez les parcours inspirants de nos collaborateurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 p-8 md:p-12 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous souhaitez rejoindre nos équipes ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              Participez à l'aventure et construisons ensemble l'avenir du digital
            </p>
            <button className="btn-primary group">
              <span>Nous rejoindre</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ADNPage;