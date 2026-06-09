// src/pages/Decouvrir/Engagements.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  Leaf,
  Handshake,
  Heart,
  Trophy,
  Users,
  Building2,
  TrendingUp,
  Clock,
  Award,
  Shield,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Sun,
  Battery,
  Recycle,
  Compass,
  Briefcase,
  Calendar,
  MapPin,
  Accessibility,
  GraduationCap,
  BarChart3,
  ExternalLink,
  Quote
} from 'lucide-react';

// Composant de carte d'engagement
const EngagementCard = ({
  icon,
  title,
  description,
  points,
  delay,
  color
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  points?: string[];
  delay: number;
  color: string;
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
      className={`card-glass p-8 transition-all duration-700 hover:scale-[1.02] hover:glow-brand ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
      {points && points.length > 0 && (
        <ul className="space-y-2 mt-4">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
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
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
};

// Composant d'objectif
const ObjectiveCard = ({ text, delay }: { text: string; delay: number }) => {
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
      className={`flex items-center gap-3 p-4 card-glass transition-all duration-500 ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Target className="w-5 h-5 text-brand-400 flex-shrink-0" />
      <span className="text-gray-300">{text}</span>
    </div>
  );
};

// Composant d'action
const ActionCard = ({ icon, text, delay }: { icon: React.ReactNode; text: string; delay: number }) => {
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
      className={`flex items-center gap-3 p-3 bg-white/5 rounded-xl transition-all duration-500 hover:bg-white/10 ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-brand-400">{icon}</div>
      <span className="text-gray-300 text-sm">{text}</span>
    </div>
  );
};

// Page principale
const EngagementsPage: React.FC = () => {
  const engagements = [
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Environnement",
      description: "Réduire son impact environnemental, ça ne se décrète pas, ça se prouve.",
      color: "from-green-500 to-emerald-500",
      points: [
        "Locaux pensés pour réduire l'empreinte carbone",
        "Tri sélectif et compost dans les espaces de travail",
        "Optimisation de la consommation énergétique"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Éthique des affaires",
      description: "Transparence totale et tolérance zéro pour les méthodes douteuses.",
      color: "from-blue-500 to-cyan-500",
      points: [
        "Pas de Black Hat, pas de raccourcis",
        "Transparence en interne et dans les échanges commerciaux",
        "Mécénat et soutien de causes qui nous sont chères"
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Social & QVT",
      description: "Offrir à nos équipes un quotidien professionnel sain et épanouissant.",
      color: "from-pink-500 to-rose-500",
      points: [
        "Enquête de satisfaction collaborateurs 2024",
        "Organisation du travail et équilibre vie pro/perso",
        "Reconnaissance et montée en compétences"
      ]
    }
  ];

  const qvtObjectives = [
    "Équilibre vie pro/perso respecté sans langue de bois",
    "Climat de confiance, d'écoute et de reconnaissance au quotidien",
    "Environnement de travail sain, sûr et respectueux de chacun",
    "Cadre stimulant pour évoluer, s'épanouir et donner du sens à son travail"
  ];

  const qvtActions = [
    { icon: <GraduationCap size={18} />, text: "Temps de formation hebdomadaire" },
    { icon: <Clock size={18} />, text: "Télétravail possible et horaires flexibles" },
    { icon: <Building2 size={18} />, text: "Espaces de travail ergonomiques et confortables" },
    { icon: <Heart size={18} />, text: "Actions régulières de sensibilisation à la santé et au bien-être" }
  ];

  const agences = [
    { city: "Paris", region: "Île-de-France" },
    { city: "Lille", region: "Hauts-de-France" },
    { city: "Lyon", region: "Auvergne-Rhône-Alpes" },
    { city: "Bordeaux", region: "Nouvelle-Aquitaine" },
    { city: "Nantes", region: "Pays de la Loire" },
    { city: "Toulouse", region: "Occitanie" },
    { city: "Marseille", region: "Provence-Alpes-Côte d'Azur" }
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
              <Trophy className="w-4 h-4 text-brand-400" />
              <span className="text-sm text-gray-300">RSE & Responsabilité</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Nos <span className="gradient-text">engagements</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
              Chez Only Cloz, nous avons le futur en ligne de mire. Médaille d'argent EcoVadis 2025, 
              nous plaçant dans le top 15% des entreprises de notre secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Section EcoVadis Badge */}
      <section className="section-padding max-w-7xl mx-auto -mt-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 p-6 md:p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-transparent" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">EcoVadis</h3>
                <p className="text-brand-400 font-semibold">Médaille d'Argent 2025</p>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-300">
                Cette distinction nous place dans le <span className="text-brand-400 font-semibold">top 15%</span> des agences de notre secteur.
                Une vraie fierté, mais surtout la preuve que nos engagements ne s'arrêtent pas aux mots.
              </p>
            </div>
            
            <button className="btn-outline text-sm group">
              <span>Découvrir EcoVadis</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Section Engagements RSE */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos engagements <span className="gradient-text">RSE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des actions concrètes pour un impact positif et durable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagements.map((engagement, index) => (
            <EngagementCard
              key={index}
              icon={engagement.icon}
              title={engagement.title}
              description={engagement.description}
              points={engagement.points}
              delay={index * 100}
              color={engagement.color}
            />
          ))}
        </div>
      </section>

      {/* Section EcoVadis Explication */}
      <section className="py-20 hero-gradient relative">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-6">
                <BarChart3 className="w-4 h-4 text-brand-400" />
                <span className="text-sm text-gray-300">Certification reconnue</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                EcoVadis x <span className="gradient-text">Only Cloz</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                EcoVadis est l'un des organismes les plus reconnus au monde pour évaluer les performances RSE des entreprises. 
                Il analyse de manière indépendante nos pratiques en matière d'éthique, d'environnement, de social et d'achats responsables.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-4 card-glass text-center">
                  <Shield className="w-6 h-6 text-brand-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Éthique</p>
                </div>
                <div className="flex-1 p-4 card-glass text-center">
                  <Leaf className="w-6 h-6 text-brand-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Environnement</p>
                </div>
                <div className="flex-1 p-4 card-glass text-center">
                  <Users className="w-6 h-6 text-brand-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Social</p>
                </div>
                <div className="flex-1 p-4 card-glass text-center">
                  <Handshake className="w-6 h-6 text-brand-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-400">Achats responsables</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card-glass p-8 text-center">
                <Quote className="w-12 h-12 text-brand-500/30 mx-auto mb-4" />
                <p className="text-gray-300 italic mb-6">
                  "Derrière l'argent, il y a l'or. Derrière l'or, il y a surtout les exigences de demain. 
                  Nous voyons cette certification comme une motivation à viser un modèle toujours plus responsable."
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-brand-400" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">Only Cloz</p>
                    <p className="text-xs text-gray-500">Médaille d'Argent EcoVadis 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section QVT */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-4">
            <Heart className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-gray-300">Qualité de Vie au Travail</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos engagements <span className="gradient-text">QVT</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nous veillons à ce que nos équipes se sentent bien dans leur environnement professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Objectifs */}
          <div className="card-glass p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-brand-400" />
              Nos objectifs durables
            </h3>
            <div className="space-y-3">
              {qvtObjectives.map((objective, idx) => (
                <ObjectiveCard key={idx} text={objective} delay={idx * 100} />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="card-glass p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-400" />
              Les actions mises en place
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {qvtActions.map((action, idx) => (
                <ActionCard key={idx} icon={action.icon} text={action.text} delay={idx * 100} />
              ))}
            </div>
          </div>
        </div>

        {/* Partenaire New-e */}
        <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Nos enquêtes QVT sont confiées à <span className="text-brand-400">New-e</span>, 
            un organisme indépendant spécialisé pour une vision claire et objective.
          </p>
        </div>
      </section>

      {/* Section Agences */}
      <section className="py-20 hero-gradient relative">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Au plus près des clients,<br />
                au plus proche des <span className="gradient-text">équipes</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Les agences Only Cloz font partie intégrante de notre organisation. Nous les avons pensées 
                pour offrir un cadre de travail aussi agréable que collaboratif.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {agences.map((agence, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5">
                    <MapPin className="w-3 h-3 text-brand-400" />
                    <span className="text-sm text-gray-300">{agence.city}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Accessibility className="w-5 h-5 text-brand-400" />
                <span>Tous nos locaux respectent les normes PMR</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card-glass p-4 text-center">
                <Building2 className="w-8 h-8 text-brand-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Afterworks & repas partagés</p>
              </div>
              <div className="card-glass p-4 text-center">
                <Calendar className="w-8 h-8 text-brand-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Soirées à thème</p>
              </div>
              <div className="card-glass p-4 text-center">
                <Users className="w-8 h-8 text-brand-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Événements d'équipe</p>
              </div>
              <div className="card-glass p-4 text-center">
                <Sparkles className="w-8 h-8 text-brand-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">Moments de respiration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Évolution professionnelle */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Chaque parcours professionnel <span className="gradient-text">compte</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Chez Only Cloz, le mot « talent » est un véritable témoignage de toutes les qualités que possèdent nos collaborateurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-glass p-6 text-center hover:scale-105 transition-transform">
            <GraduationCap className="w-10 h-10 text-brand-400 mx-auto mb-3" />
            <p className="text-sm text-gray-300">½ journée de formation<br />chaque semaine</p>
          </div>
          <div className="card-glass p-6 text-center hover:scale-105 transition-transform">
            <TrendingUp className="w-10 h-10 text-brand-400 mx-auto mb-3" />
            <p className="text-sm text-gray-300">Parcours de progression<br />encadrés</p>
          </div>
          <div className="card-glass p-6 text-center hover:scale-105 transition-transform">
            <Briefcase className="w-10 h-10 text-brand-400 mx-auto mb-3" />
            <p className="text-sm text-gray-300">Projets clients et internes<br />variés</p>
          </div>
          <div className="card-glass p-6 text-center hover:scale-105 transition-transform">
            <Users className="w-10 h-10 text-brand-400 mx-auto mb-3" />
            <p className="text-sm text-gray-300">Conférences et temps<br />d'échange</p>
          </div>
        </div>
      </section>

      {/* Section Égalité Femme-Homme */}
      <section className="py-20 hero-gradient relative">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="card-glass p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-6 mx-auto w-fit">
              <Users className="w-4 h-4 text-brand-400" />
              <span className="text-sm text-gray-300">Engagement fort</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Only Cloz et l'égalité <span className="gradient-text">Femme-Homme</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              L'égalité Femme-Homme fait partie intégrante de la culture Only Cloz. 
              Nos effectifs sont aujourd'hui proches de la parité, y compris dans les postes à responsabilité.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">~50%</div>
                <p className="text-xs text-gray-400">d'effectifs féminins</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2</div>
                <p className="text-xs text-gray-400">salariées formées à la prévention du harcèlement</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <p className="text-xs text-gray-400">d'équité salariale suivie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding max-w-7xl mx-auto pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 p-8 md:p-12 text-center">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Rejoignez une entreprise engagée
            </h3>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              Donnez du sens à votre carrière dans un environnement responsable et bienveillant
            </p>
            <button className="btn-primary group">
              <span>Découvrir nos offres</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngagementsPage;