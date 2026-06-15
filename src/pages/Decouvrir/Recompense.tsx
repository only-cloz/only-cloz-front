// src/pages/Decouvrir/Recompenses.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  Trophy,
  Award,
  Star,
  Medal,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  ChevronRight,
  Calendar,
  MapPin,
  ExternalLink,
  Quote,
  Crown,
  Gem,
  Zap,
  Shield,
  Heart,
  Eye,
  BarChart3
} from 'lucide-react';

// Type pour une récompense
interface Recompense {
  year: string;
  title: string;
  award: string;
  category?: string;
  description: string;
  client?: string;
  icon: React.ReactNode;
  color: string;
  highlight?: string;
}

// Composant de carte de récompense
const RecompenseCard = ({ recompense, index, isVisible: parentVisible }: { 
  recompense: Recompense; 
  index: number;
  isVisible: boolean;
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
      className={`card-glass p-6 transition-all duration-700 hover:scale-[1.02] hover:glow-brand ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 bg-gradient-to-br ${recompense.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
          {recompense.icon}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-sm font-semibold text-[#7C3AED]">{recompense.year}</span>
            <span className="text-xs px-2 py-1 bg-[#F9FAFB] rounded-full text-[#111827]/50 border border-[#7C3AED]/10">
              {recompense.award}
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#111827] mb-2">{recompense.title}</h3>
          {recompense.category && (
            <p className="text-sm text-[#7C3AED] mb-2">{recompense.category}</p>
          )}
          <p className="text-[#111827]/60 text-sm leading-relaxed">{recompense.description}</p>
          {recompense.client && (
            <div className="mt-3 flex items-center gap-2 text-xs text-[#111827]/40">
              <Users size={12} />
              <span>Client : {recompense.client}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Composant de statistique animée
const StatCard = ({ value, label, suffix = '', delay }: { value: number; label: string; suffix?: string; delay: number }) => {
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
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <p className="text-[#111827]/50 text-sm">{label}</p>
    </div>
  );
};

// Page principale
const RecompensesPage: React.FC = () => {
  const recompenses: Recompense[] = [
    {
      year: "2026",
      title: "Médaille d'argent",
      award: "SEMY Awards",
      category: "Meilleure campagne d'acquisition payante",
      description: "Refonte complète de la stratégie d'acquisition payante de la plateforme de streaming INA Madelen. Un travail stratégique qui améliore la performance globale des campagnes : réduire le CPA moyen et augmenter le volume de conversions.",
      client: "INA Madelen",
      icon: <Trophy className="w-7 h-7 text-white" />,
      color: "from-yellow-500 to-amber-600"
    },
    {
      year: "2026",
      title: "Prix spécial en GEO",
      award: "SEMY Awards",
      category: "Innovation en Generative Engine Optimization",
      description: "Développement d'Acoutsiik, notre logiciel propriétaire dédié au GEO. Une approche innovante pour faire émerger une marque dans l'écosystème des moteurs génératifs.",
      icon: <Zap className="w-7 h-7 text-white" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      year: "2025",
      title: "Médaille d'argent",
      award: "SEMY Awards",
      category: "Stratégie SEA, SMA et SEO",
      description: "Avec le projet Gudrun Sjödén, orchestration d'une stratégie ambitieuse et durable. Deux ans de collaboration qui trouvent aujourd'hui un bel écho.",
      client: "Gudrun Sjödén",
      icon: <Medal className="w-7 h-7 text-white" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      year: "2025",
      title: "Médaille de bronze",
      award: "SEMY Awards",
      category: "Meilleure stratégie SEO internationale",
      description: "Avec vertbaudet, une collaboration de longue date. Accompagnement de différentes business units internationales avec une stratégie SEO adaptée à chaque marché.",
      client: "vertbaudet",
      icon: <Award className="w-7 h-7 text-white" />,
      color: "from-orange-500 to-red-600"
    },
    {
      year: "2024",
      title: "Consécration",
      award: "SEMY Awards",
      category: "Meilleure campagne SEA",
      description: "Récompensé pour l'accompagnement et les résultats exceptionnels obtenus pour Nohée. Un projet ancré dans une stratégie mêlant SEO, webanalytics et SEA.",
      client: "Nohée",
      icon: <Crown className="w-7 h-7 text-white" />,
      color: "from-amber-500 to-yellow-600"
    },
    {
      year: "2024",
      title: "Prix de la meilleure campagne Search Marketing",
      award: "Cas d'or",
      category: "Partenariat local réussi",
      description: "Grâce à nos 7 agences, nous cultivons une relation de proximité. Ce prix a été remporté pour notre partenaire nantais Terranimo.",
      client: "Terranimo",
      icon: <MapPin className="w-7 h-7 text-white" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      year: "2022",
      title: "Trophée de la meilleure campagne SEO",
      award: "SEMY Awards",
      description: "Le couronnement de 23 années de dévouement à perfectionner notre savoir-faire. Fruit de la formation continue de nos équipes.",
      client: "Les Maisons du Voyage",
      icon: <Target className="w-7 h-7 text-white" />,
      color: "from-indigo-500 to-blue-600"
    },
    {
      year: "2022",
      title: "Meilleure stratégie de content marketing",
      award: "SEO Awards",
      description: "Pour le projet de Leroy Merlin Studio, nos équipes ont adopté la meilleure stratégie pour leur nouveau site.",
      client: "Leroy Merlin Studio",
      icon: <Star className="w-7 h-7 text-white" />,
      color: "from-rose-500 to-pink-600"
    }
  ];

  const avantagesConcours = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Reconnaissance des pairs",
      description: "Gagner un prix implique la reconnaissance de nos expertises et notre faculté à mettre en œuvre des stratégies innovantes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Visibilité clients",
      description: "Chaque victoire met sur le devant de la scène nos clients et partenaires, participant à accroître leur notoriété."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Amélioration continue",
      description: "Chaque distinction nous pousse à aller encore plus loin et consolide notre réputation d'agence d'excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient-vibrant pt-32 pb-20">
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#7C3AED]/15 shadow-sm">
              <Trophy className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-sm text-[#111827]/70">Reconnaissances & distinctions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#111827]">
              Nos <span className="gradient-text">récompenses</span>
            </h1>
            <p className="text-xl text-[#111827]/60 max-w-3xl mx-auto text-balance">
              Viser l'excellence, pour que chaque collaboration soit une victoire
            </p>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="section-padding max-w-7xl mx-auto -mt-10">
        <div className="card-glass p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value={15} label="Prix et récompenses" suffix="+" delay={0} />
            <StatCard value={8} label="Années de reconnaissance" suffix="" delay={100} />
            <StatCard value={10} label="Clients primés" suffix="+" delay={200} />
            <StatCard value={4} label="Catégories d'expertise" suffix="" delay={300} />
          </div>
        </div>
      </section>

      {/* Section Récompenses */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Des prix qui <span className="gradient-text">récompensent l'excellence</span>
          </h2>
          <p className="text-[#111827]/50 max-w-2xl mx-auto">
            Découvrez nos différentes récompenses obtenues dans le domaine du Webmarketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recompenses.map((recompense, index) => (
            <RecompenseCard key={index} recompense={recompense} index={index} isVisible={true} />
          ))}
        </div>
      </section>

      {/* Section Approche unique */}
      <section className="py-20 hero-gradient-vibrant relative">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#7C3AED]/15 shadow-sm">
                <Gem className="w-4 h-4 text-[#7C3AED]" />
                <span className="text-sm text-[#111827]/70">Notre différence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
                Only Cloz et sa façon de faire <span className="gradient-text">unique</span>
              </h2>
              <p className="text-[#111827]/60 mb-6 leading-relaxed">
                L'agence se distingue grâce à une approche stratégique multi-leviers. 
                Initialement axée sur le référencement naturel (SEO), nous avons progressivement 
                étendu notre champ d'expertise à d'autres domaines du webmarketing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7C3AED]" />
                  <span className="text-[#111827]/60">Stratégies diversifiées (SEO, SEA, marketing de contenu)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7C3AED]" />
                  <span className="text-[#111827]/60">Accompagnements sur-mesure pour chaque marché</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7C3AED]" />
                  <span className="text-[#111827]/60">Statut indépendant pour une concentration sur l'opérationnel</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="card-glass p-8">
                <Quote className="w-12 h-12 text-[#7C3AED]/20 mx-auto mb-4" />
                <p className="text-[#111827]/60 italic text-center mb-6">
                  "Pouvoir personnaliser chacun de nos accompagnements avec des actions sur-mesure 
                  réfléchies pour un marché spécifique est rendu possible par notre statut indépendant."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827]">Only Cloz</p>
                    <p className="text-xs text-[#111827]/40">Agence webmarketing indépendante</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi les concours */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Les concours, une récompense à <span className="gradient-text">plusieurs niveaux</span>
          </h2>
          <p className="text-[#111827]/50 max-w-2xl mx-auto">
            Chaque distinction a une signification profonde pour notre agence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {avantagesConcours.map((avantage, index) => (
            <div
              key={index}
              className="card-glass p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-[#7C3AED]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-[#7C3AED]">{avantage.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">{avantage.title}</h3>
              <p className="text-[#111827]/50 text-sm">{avantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Chiffres clés */}
      <section className="py-20 hero-gradient-vibrant relative">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="card-glass p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
                  Une expertise qui <span className="gradient-text">fait la différence</span>
                </h3>
                <p className="text-[#111827]/60 mb-4">
                  Chaque récompense est le fruit d'un travail d'équipe, d'une stratégie réfléchie 
                  et d'une relation de confiance avec nos clients.
                </p>
                <div className="flex items-center gap-2 text-sm text-[#111827]/40">
                  <Calendar className="w-4 h-4" />
                  <span>Plus de 23 ans d'excellence</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#F9FAFB] rounded-xl border border-[#7C3AED]/10">
                  <BarChart3 className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
                  <p className="text-xs text-[#111827]/50">Meilleur ROI</p>
                </div>
                <div className="text-center p-4 bg-[#F9FAFB] rounded-xl border border-[#7C3AED]/10">
                  <Target className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
                  <p className="text-xs text-[#111827]/50">Stratégies sur-mesure</p>
                </div>
                <div className="text-center p-4 bg-[#F9FAFB] rounded-xl border border-[#7C3AED]/10">
                  <Users className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
                  <p className="text-xs text-[#111827]/50">Équipe dédiée</p>
                </div>
                <div className="text-center p-4 bg-[#F9FAFB] rounded-xl border border-[#7C3AED]/10">
                  <Zap className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
                  <p className="text-xs text-[#111827]/50">Innovation constante</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#7C3AED]/10 via-[#8B5CF6]/10 to-[#EC4899]/10 border border-[#7C3AED]/15 p-8 md:p-12 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
              Vous êtes arrivé jusqu'en bas,<br />
              <span className="gradient-text">n'en restons pas là</span>
            </h3>
            <p className="text-[#111827]/60 mb-8 max-w-md mx-auto">
              Venez discuter de votre projet et obtenez des solutions pertinentes !
            </p>
            <button className="btn-primary group">
              <span>Discuter de mon projet</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Composant CheckCircle utilisé dans la section
const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default RecompensesPage;