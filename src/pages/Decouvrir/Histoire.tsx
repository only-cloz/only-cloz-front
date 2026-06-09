// src/pages/Decouvrir/Histoire.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  Calendar,
  Users,
  Building2,
  Sparkles,
  ChevronRight,
  Quote,
  Rocket,
  TrendingUp,
  Target,
  Heart,
  Globe,
  Clock,
  Zap,
  Award,
  MapPin,
  Network,
  Linkedin,
  ArrowRight,
  Play,
  Gift,
  Star
} from 'lucide-react';

// Type pour un événement historique
interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details?: string[];
  highlight?: string;
}

// Composant de timeline
const TimelineEvent = ({ event, index, isLast }: { event: HistoricalEvent; index: number; isLast: boolean }) => {
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
    <div ref={ref} className="relative">
      {/* Ligne de connexion */}
      {!isLast && (
        <div className="absolute left-[27px] top-20 bottom-0 w-px bg-gradient-to-b from-brand-500/50 to-transparent hidden md:block" />
      )}
      
      <div className={`flex flex-col md:flex-row gap-6 transition-all duration-700 ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`} style={{ transitionDelay: `${index * 150}ms` }}>
        
        {/* Année */}
        <div className="md:w-32 flex-shrink-0">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg`}>
            <Calendar className="w-6 h-6 text-white" />
          </div>
        </div>
        
        {/* Contenu */}
        <div className="flex-1">
          <div className="card-glass p-6 md:p-8 hover:glow-brand transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-3xl md:text-4xl font-bold gradient-text">{event.year}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-2">{event.title}</h3>
              </div>
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                {event.icon}
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-4">{event.description}</p>
            
            {event.details && event.details.length > 0 && (
              <ul className="space-y-2 mt-4">
                {event.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <Sparkles className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {event.highlight && (
              <div className="mt-4 p-3 bg-brand-500/10 rounded-lg border border-brand-500/20">
                <p className="text-sm text-brand-400">{event.highlight}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant de citation
const QuoteCard = ({ text, author, role, delay }: { text: string; author: string; role: string; delay: number }) => {
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
      className={`card-glass p-8 transition-all duration-700 ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote className="w-12 h-12 text-brand-500/30 mb-4" />
      <p className="text-gray-300 italic text-lg leading-relaxed mb-6">{text}</p>
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-brand-400">{role}</p>
      </div>
    </div>
  );
};

// Page principale
const HistoirePage: React.FC = () => {
  const historique: HistoricalEvent[] = [
    {
      year: "1999",
      title: "La création de 1ère Position",
      description: "L'une des toutes premières agences SEO en France voit le jour en Savoie. L'entreprise s'impose rapidement comme une référence du référencement naturel et payant, portée par une approche éthique et une équipe passionnée.",
      icon: <Rocket className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-cyan-500",
      details: [
        "Parmi les pionniers français du SEO",
        "Ouverture d'antennes dans plusieurs grandes villes",
        "Approche éthique reconnue"
      ]
    },
    {
      year: "2009",
      title: "Naissance de Matière 1ère",
      description: "Un véritable atelier de création digitale rejoint le marché. Son ADN : transformer chaque idée brute en projet abouti, alliant design, contenus, SEO, SEA et réseaux sociaux.",
      icon: <Sparkles className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-pink-500",
      details: [
        "Fusion de deux agences (web & print)",
        "Expertise en création de sites web et webdesign",
        "Mariage de la créativité et de la performance"
      ]
    },
    {
      year: "2010",
      title: "Création d'Open Linking",
      description: "C'est à Lille qu'Open Linking voit le jour, spécialisée dans le SEO, les ads et le web analytics. L'agence décroche rapidement des prix lors de prestigieuses compétitions professionnelles.",
      icon: <Target className="w-6 h-6 text-white" />,
      color: "from-green-500 to-emerald-500",
      details: [
        "Expertise en PPC et netlinking",
        "Récompenses aux SEMY Awards",
        "Membre fondateur du réseau RankingRoad"
      ]
    },
    {
      year: "2013",
      title: "Première fusion",
      description: "1ère Position et Matière 1ère fusionnent pour unir leurs forces et compléter leurs expertises respectives.",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "from-orange-500 to-red-500",
      details: [
        "Synergie entre SEO et création digitale",
        "Élargissement de l'offre de services",
        "Renforcement de l'équipe"
      ]
    },
    {
      year: "2019",
      title: "Intégration d'Open Linking",
      description: "Open Linking rejoint le groupe, apportant son expertise pointue en analytics et publicité en ligne.",
      icon: <Network className="w-6 h-6 text-white" />,
      color: "from-teal-500 to-cyan-500",
      details: [
        "Expertise en web analytics renforcée",
        "Présence à Lille",
        "Synergie avec les équipes existantes"
      ]
    },
    {
      year: "2021",
      title: "Naissance d'Only Cloz",
      description: "1ère Position, Matière 1ère et Open Linking se rassemblent sous un seul et même nom : Only Cloz. Le groupe se tourne immédiatement vers l'innovation.",
      icon: <Star className="w-6 h-6 text-white" />,
      color: "from-amber-500 to-yellow-500",
      details: [
        "Plus de 85 collaborateurs",
        "7 antennes en France",
        "Catalogue de prestations à 360°"
      ],
      highlight: "Nouveau nom, mais même mission : être un véritable partenaire digital pour les marques de tous horizons."
    },
    {
      year: "Fév. 2025",
      title: "Bpifrance entre au capital",
      description: "Bpifrance prend une participation minoritaire au capital d'Only Cloz. Une première en région AURA pour une agence de marketing digital.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-blue-500",
      details: [
        "Investissement inédit reflétant la confiance dans notre modèle",
        "Reconnaissance de notre capacité à mener des projets d'envergure",
        "Promesse de nombreuses opportunités futures"
      ],
      highlight: "Cet investissement reflète la confiance accordée à la solidité de notre modèle."
    },
    {
      year: "Nov. 2025",
      title: "White Mirror rejoint Only Cloz",
      description: "White Mirror, agence experte en social media, influence et RP, rejoint Only Cloz. Une étape clé dans la construction d'un groupe indépendant, plus complet et plus agile.",
      icon: <Heart className="w-6 h-6 text-white" />,
      color: "from-rose-500 to-pink-500",
      details: [
        "Activation de l'ensemble des leviers d'acquisition",
        "Alignement naturel des expertises et des ADN",
        "Plus de flexibilité, cohérence et performance"
      ],
      highlight: "Nous renforçons notre capacité à offrir à nos clients encore plus de performance."
    }
  ];

  const valeursOnlyCloz = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Rencontre",
      description: "L'histoire d'Only Cloz se résume par le mot « rencontre » - celle de trois entreprises passionnées par le digital."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Toujours à la pointe des technologies et des méthodes pour offrir le meilleur à nos clients."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "La recherche constante de la performance et de la qualité dans chaque projet."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Proximité",
      description: "7 antennes locales et une équipe dédiée pour rester proches de nos partenaires."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient pt-32 pb-20 noise">
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl orb-1" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl orb-2" />
        
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
              <Clock className="w-4 h-4 text-brand-400" />
              <span className="text-sm text-gray-300">Plus de 26 ans d'expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Notre <span className="gradient-text">histoire</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
              L'histoire d'Only Cloz se résume tout simplement par le mot « rencontre ». 
              Celle de trois entreprises passionnées par le digital.
            </p>
          </div>
        </div>
      </section>

      {/* Section Timeline */}
      <section className="section-padding max-w-4xl mx-auto py-20">
        <div className="space-y-12">
          {historique.map((event, index) => (
            <TimelineEvent 
              key={index} 
              event={event} 
              index={index} 
              isLast={index === historique.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Section Citation */}
      <section className="py-20 hero-gradient relative">
        <div className="section-padding max-w-4xl mx-auto">
          <QuoteCard
            text="Chez Only Cloz, on construit, on structure, on grandit, et on le fait avec l'exigence d'un modèle solide."
            author="Mathieu Jarsaillon"
            role="Dirigeant d'Only Cloz"
            delay={0}
          />
        </div>
      </section>

      {/* Section Chiffres clés */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="card-glass p-6 text-center hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">26+</div>
            <p className="text-gray-400 text-sm">Années d'expertise</p>
          </div>
          <div className="card-glass p-6 text-center hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">85+</div>
            <p className="text-gray-400 text-sm">Collaborateurs</p>
          </div>
          <div className="card-glass p-6 text-center hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">7</div>
            <p className="text-gray-400 text-sm">Antennes en France</p>
          </div>
          <div className="card-glass p-6 text-center hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3</div>
            <p className="text-gray-400 text-sm">Entreprises fondatrices</p>
          </div>
        </div>
      </section>

      {/* Section Notre philosophie */}
      <section className="py-20 hero-gradient relative">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre <span className="gradient-text">philosophie</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des valeurs qui nous guident depuis plus de 26 ans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeursOnlyCloz.map((valeur, index) => (
              <div
                key={index}
                className="card-glass p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-brand-400">{valeur.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{valeur.title}</h3>
                <p className="text-gray-400 text-sm">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Présence nationale */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-brand-400" />
              <span className="text-sm text-gray-300">7 antennes locales</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Une présence sur tout le <span className="gradient-text">territoire</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              De la Savoie à Lille, en passant par Paris, Lyon, Bordeaux, Nantes, Toulouse et Marseille, 
              nos équipes sont implantées dans plusieurs grandes villes de l'Hexagone pour rester 
              proches de nos partenaires.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Savoie", "Lille", "Paris", "Lyon", "Bordeaux", "Nantes", "Toulouse", "Marseille"].map((city, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                  {city}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="card-glass p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Réseau international</p>
                  <p className="font-semibold text-white">RankingRoad</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                Only Cloz compte parmi les fondateurs du réseau d'agences internationales RankingRoad, 
                permettant une présence et une expertise à l'échelle mondiale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Progression */}
      <section className="py-20 hero-gradient relative">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="card-glass p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Une histoire qui continue de <span className="gradient-text">s'écrire</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Notre catalogue de prestations frôle aujourd'hui les 360° au sein de l'écosystème digital : 
              SEO, SEA, social media, analytics, UX design, développement web, et bien plus encore.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">SEO</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">SEA</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">Social Media</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">Analytics</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">UX Design</div>
              <div className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">Développement Web</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 p-8 md:p-12 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous souhaitez faire partie de <span className="gradient-text">notre histoire</span> ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              Rejoignez une équipe passionnée et participez à l'aventure Only Cloz
            </p>
            <button className="btn-primary group">
              <span>Nous rejoindre</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoirePage;