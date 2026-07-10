import React, { useEffect, useRef, useState } from 'react';
import {
  TrendingUp,
  Users,
  Target,
  ChevronRight,
  ArrowRight,
  BarChart3,
  Award,
  Eye,
  MousePointerClick,
  Zap,
  Rocket,
  Star,
  Clock,
  Briefcase,
  Award as AwardIcon,
  CheckCircle,
  Search,
  X
} from 'lucide-react';
import { useI18n } from '../i18n';

// Type pour un cas client
interface CasClient {
  id: number;
  title: string;
  description: string;
  category: string[];
  stats: {
    value: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  image?: string;
  color: string;
  industry: string;
}

// Composant de carte de statistique
const StatCard = ({ value, label, icon, delay }: { value: string; label: string; icon?: React.ReactNode; delay: number }) => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if(ref.current){
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  },[]);


  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`
        relative
        group
        overflow-hidden

        p-4
        sm:p-5
        md:p-6

        rounded-2xl
        md:rounded-3xl

        bg-white

        border border-[#7C3AED]/10

        shadow-sm

        hover:shadow-xl
        hover:-translate-y-2

        transition-all
        duration-500

        ${
          isVisible 
          ? "fade-in-up opacity-100" 
          : "opacity-0 translate-y-10"
        }
      `}
    >

      {/* Glow backgroundhgjhhgjfjh */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-[#7C3AED]/10
          via-transparent
          to-[#EC4899]/10

          opacity-0

          group-hover:opacity-100

          transition-opacity
          duration-500
        "
      />


      {/* Icon */}
      <div
        className="
          relative

          mx-auto

          mb-3
          md:mb-4

          w-12
          h-12

          sm:w-14
          sm:h-14

          flex
          items-center
          justify-center

          rounded-xl
          md:rounded-2xl

          bg-gradient-to-br
          from-[#7C3AED]
          to-[#EC4899]

          text-white

          shadow-lg

          group-hover:scale-110

          transition-transform
          duration-500
        "
      >
        {icon}
      </div>


      {/* Value */}
      <div
        className="
          relative

          text-center

          text-2xl
          sm:text-3xl
          md:text-4xl

          font-extrabold

          gradient-text

          mb-1
          md:mb-2
        "
      >
        {value}
      </div>


      {/* Label */}
      <p
        className="
          relative

          text-center

          text-xs
          sm:text-sm

          leading-relaxed

          text-[#111827]/50
        "
      >
        {label}
      </p>


    </div>
  );
};
// Composant de carte cas client
const CasClientCard = ({ cas, index }: { cas: CasClient; index: number }) => {
  const { t } = useI18n();
  const tc = t.clientsPage.cases[cas.id - 1];
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
      className={`card-glass overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:glow-brand group ${
        isVisible ? 'fade-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Bande de couleur */}
      <div className={`h-2 bg-gradient-to-r ${cas.color}`} />
      
      <div className="p-6">
        {/* Catégories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tc.category.map((cat, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-[#F9FAFB] rounded-full text-[#111827]/50">
              {cat}
            </span>
          ))}
          <span className="text-xs px-2 py-1 bg-[#7C3AED]/10 rounded-full text-[#7C3AED]">
            {tc.industry}
          </span>
        </div>

        {/* Titre */}
        <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#7C3AED] transition-colors">
          {tc.title}
        </h3>

        {/* Description */}
        <p className="text-[#111827]/50 text-sm mb-4 line-clamp-2">
          {tc.description}
        </p>

        {/* Statistiques */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#7C3AED]/10">
          {cas.stats.slice(0, 2).map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg font-bold text-[#111827]">{stat.value}</div>
              <div className="text-xs text-[#111827]/40">{tc.stats[idx]}</div>
            </div>
          ))}
        </div>

        {/* Lien en savoir plus */}
        <button className="mt-4 text-[#7C3AED] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          <span>{t.clientsPage.discoverCase}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Filtre rapide
const QuickFilter = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active
        ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30'
        : 'bg-white text-[#111827]/60 hover:bg-[#F9FAFB] hover:text-[#7C3AED] border border-[#7C3AED]/15'
    }`}
  >
    {label}
  </button>
);

// Page principale
const CasClientPage: React.FC = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<string>('tous');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['tous', 'SEO', 'SEA', 'Réseaux sociaux', 'Analytics', 'Webdesign'];

  const casClients: CasClient[] = [
    {
      id: 1,
      title: "Gagner visibilité et leads grâce au GEO",
      description: "Stratégie innovante d'optimisation pour moteurs génératifs, augmentation significative des mentions sur ChatGPT et Gemini.",
      category: ["SEO", "Innovation"],
      stats: [
        { value: "+200%", label: "mentions ChatGPT & Gemini", icon: <Zap size={16} /> },
        { value: "+11%", label: "conversion", icon: <Target size={16} /> },
        { value: "+117%", label: "impressions vs N-1", icon: <Eye size={16} /> },
        { value: "84%", label: "remplissage meilleur taux", icon: <BarChart3 size={16} /> }
      ],
      color: "from-[#7C3AED] to-[#EC4899]",
      industry: "Tech / Streaming"
    },
    {
      id: 2,
      title: "Refondre l'identité graphique d'une université",
      description: "Modernisation complète de l'identité visuelle et du contenu pour une université de renom.",
      category: ["Webdesign", "Contenu"],
      stats: [
        { value: "+206%", label: "clics organiques/mois", icon: <MousePointerClick size={16} /> },
        { value: "+36%", label: "CA sur secteur en crise", icon: <TrendingUp size={16} /> }
      ],
      color: "from-[#3B82F6] to-[#06B6D4]",
      industry: "Éducation"
    },
    {
      id: 3,
      title: "Développer la visibilité immobilière à Ajaccio",
      description: "Accompagnement du leader de l'immobilier corse pour une visibilité maximale.",
      category: ["SEO", "Local"],
      stats: [
        { value: "1ère", label: "position mots-clés locaux", icon: <Award size={16} /> },
        { value: "+7000", label: "clics en 8 mois", icon: <MousePointerClick size={16} /> },
        { value: "+93%", label: "CA vs année précédente", icon: <TrendingUp size={16} /> }
      ],
      color: "from-[#10B981] to-[#34D399]",
      industry: "Immobilier"
    },
    {
      id: 4,
      title: "Gagner 42% d'adhésion tout en diminuant le coût",
      description: "Optimisation des campagnes d'acquisition pour augmenter les adhésions.",
      category: ["SEA", "Optimisation"],
      stats: [
        { value: "+42%", label: "taux d'adhésion", icon: <Users size={16} /> },
        { value: "-25%", label: "coût par adhésion", icon: <Target size={16} /> }
      ],
      color: "from-[#F59E0B] to-[#F97316]",
      industry: "Association"
    },
    {
      id: 5,
      title: "+65% de trafic qualifié avec un silo thématique",
      description: "Restructuration complète de l'architecture du site pour un meilleur référencement.",
      category: ["SEO", "Architecture"],
      stats: [
        { value: "+65%", label: "trafic qualifié", icon: <Users size={16} /> },
        { value: "+200K", label: "impressions vs N-1", icon: <Eye size={16} /> }
      ],
      color: "from-[#14B8A6] to-[#06B6D4]",
      industry: "E-commerce"
    },
    {
      id: 6,
      title: "Moderniser un site pour mettre en avant des réalisations",
      description: "Refonte complète pour valoriser le portfolio et améliorer l'expérience utilisateur.",
      category: ["Webdesign", "UX"],
      stats: [
        { value: "+630", label: "pages en Top 10", icon: <Star size={16} /> },
        { value: "+34%", label: "trafic SEO", icon: <TrendingUp size={16} /> }
      ],
      color: "from-[#EC4899] to-[#F472B6]",
      industry: "Portfolio"
    },
    {
      id: 7,
      title: "De 0 à 165K€ en 7 mois avec ROAS de 6",
      description: "Lancement et optimisation de campagnes publicitaires pour une croissance explosive.",
      category: ["SEA", "Croissance"],
      stats: [
        { value: "165K€", label: "CA en 7 mois", icon: <TrendingUp size={16} /> },
        { value: "ROAS 6", label: "retour sur investissement", icon: <Target size={16} /> }
      ],
      color: "from-[#F59E0B] to-[#FBBF24]",
      industry: "E-commerce"
    },
    {
      id: 8,
      title: "Gérer la présence en ligne d'un restaurant gastronomique (Michelin**)",
      description: "Stratégie digitale pour un établissement étoilé alliant prestige et performance.",
      category: ["Réseaux sociaux", "Contenu"],
      stats: [
        { value: "+30%", label: "contacts qualifiés", icon: <Users size={16} /> },
        { value: "+36%", label: "CA", icon: <TrendingUp size={16} /> }
      ],
      color: "from-[#EF4444] to-[#F43F5E]",
      industry: "Restauration"
    },
    {
      id: 9,
      title: "Assurer la migration d'une animalerie vers Matomo",
      description: "Migration complète des données sans perte, garantissant la continuité analytique.",
      category: ["Analytics", "Migration"],
      stats: [
        { value: "100%", label: "données préservées", icon: <CheckCircle size={16} /> },
        { value: "0", label: "jour d'interruption", icon: <Clock size={16} /> }
      ],
      color: "from-[#6366F1] to-[#8B5CF6]",
      industry: "Animalerie"
    }
  ];

  const filteredCas = casClients.filter(cas => {
    const matchFilter = filter === 'tous' || cas.category.includes(filter);
    const matchSearch = searchTerm === '' || 
      cas.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cas.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cas.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  // Statistiques globales
  const globalStats = [
    { value: "50+", label: "Clients satisfaits", icon: <Users size={20} /> },
    { value: "100+", label: "Projets réalisés", icon: <Briefcase size={20} /> },
    { value: "+200%", label: "Croissance moyenne", icon: <TrendingUp size={20} /> },
    { value: "95%", label: "Taux de recommandation", icon: <Star size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient pt-32 pb-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-3xl orb-1" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl orb-2" />
        
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-[#7C3AED]/15 shadow-sm">
              <Rocket className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-sm text-[#111827]/70">{t.clientsPage.heroBadge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#111827]">
              {t.clientsPage.h1a} <span className="gradient-text">{t.clientsPage.h1Highlight}</span>
            </h1>
            <p className="text-xl text-[#111827]/60 max-w-3xl mx-auto text-balance">
              {t.clientsPage.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Section Statistiques globales */}
      <section className="section-padding max-w-7xl mx-auto -mt-10">
        <div className="card-glass p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {globalStats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={t.clientsPage.globalStats[index]}
                icon={stat.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Filtres et recherche */}
      <section className="section-padding max-w-7xl mx-auto pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Filtres */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <QuickFilter
                key={cat}
                label={t.clientsPage.filterLabels[i]}
                active={filter === cat}
                onClick={() => setFilter(cat)}
              />
            ))}
          </div>

          {/* Recherche */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#111827]/40" />
            <input
              type="text"
              placeholder={t.clientsPage.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#7C3AED]/15 rounded-full text-[#111827] placeholder-[#111827]/40 focus:outline-none focus:border-[#7C3AED] transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="w-4 h-4 text-[#111827]/40 hover:text-[#7C3AED] transition-colors" />
              </button>
            )}
          </div>
        </div>

        {/* Résultats */}
        <div className="mb-4">
          <p className="text-[#111827]/50 text-sm">
            {filteredCas.length} {filteredCas.length > 1 ? t.clientsPage.resultsPlural : t.clientsPage.resultsSingular}
          </p>
        </div>
      </section>

      {/* Grille des cas clients */}
      <section className="section-padding max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCas.map((cas, index) => (
            <CasClientCard key={cas.id} cas={cas} index={index} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredCas.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#111827]/50">{t.clientsPage.noResults}</p>
            <button
              onClick={() => { setFilter('tous'); setSearchTerm(''); }}
              className="mt-4 text-[#7C3AED] hover:text-[#6D28D9] transition-colors"
            >
              {t.clientsPage.resetFilters}
            </button>
          </div>
        )}
      </section>

      {/* Section Témoignage */}
      <section className="py-20 hero-gradient relative mt-12">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="card-glass p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 mb-6 mx-auto w-fit border border-[#7C3AED]/15">
              <AwardIcon className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-sm text-[#111827]/70">{t.clientsPage.testimonialBadge}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
              {t.clientsPage.testimonialTitle1} <span className="gradient-text">{t.clientsPage.testimonialHighlight}</span>
            </h2>
            <div className="relative">
              <Quote className="w-12 h-12 text-[#7C3AED]/20 mx-auto mb-4" />
              <p className="text-[#111827]/60 italic text-lg leading-relaxed mb-6">
                {t.clientsPage.testimonialQuote}
              </p>
              <div>
                <p className="font-semibold text-[#111827]">Sophie Martin</p>
                <p className="text-sm text-[#111827]/40">{t.clientsPage.testimonialAuthorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding max-w-7xl mx-auto py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#7C3AED]/10 via-[#8B5CF6]/10 to-[#EC4899]/10 border border-[#7C3AED]/15 p-8 md:p-12 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-4">
              {t.clientsPage.ctaTitle1} <span className="gradient-text">{t.clientsPage.ctaHighlight}</span>{t.clientsPage.ctaTitle2}
            </h3>
            <p className="text-[#111827]/60 mb-8 max-w-md mx-auto">
              {t.clientsPage.ctaText}
            </p>
            <button className="btn-primary group">
              <span>{t.clientsPage.ctaBtn}</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Composant Quote utilisé dans la page
const Quote = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 11h-4v-4h4v4zm6 0h-4v-4h4v4zm0 6h-4v-4h4v4zm-6 0h-4v-4h4v4z" />
  </svg>
);

export default CasClientPage;