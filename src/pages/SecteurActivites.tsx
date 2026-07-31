import { useState } from 'react';
import {
  HomeIcon,
  SunIcon,
  HeartIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  SwatchIcon,
  SparklesIcon,
  LockClosedIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import ScrollReveal from '../components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

// Types
interface SecteurActivite {
  id: string;
  slug: string;
  titre: string;
  titreSEO: string;
  description: string;
  descriptionLongue?: string;
  motsCles: string[];
  icone: React.ElementType;
  gradient: string;
  avantages: string[];
  image: string;
}

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  message: string;
}

// Données des secteurs d'activité avec images
const secteurs: SecteurActivite[] = [
  {
    id: 'isolation',
    slug: 'isolation-renovation-energetique',
    titre: 'Isolation et rénovation énergétique',
    titreSEO: 'Leads isolation qualifiés. Génération de prospects rénovation énergétique',
    description: "Only Cloz génère des leads exclusifs pour les entreprises d'isolation et de rénovation énergétique.",
    descriptionLongue: "Chaque prospect est contacté par téléphone, qualifié selon vos critères et livré avec un rendez-vous confirmé dans votre agenda.",
    motsCles: ['leads isolation', 'prospects rénovation énergétique', 'MaPrimeRénov'],
    icone: HomeIcon,
    gradient: 'from-cyan-500 to-blue-500',
    avantages: ['Qualification éligibilité MaPrimeRénov', 'Vérification du budget travaux', 'Rendez-vous confirmé'],
    image: 'https://images.unsplash.com/photo-1581092335871-4d5a0b6d06a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'energie',
    slug: 'energie-panneaux-solaires',
    titre: 'Énergie et panneaux solaires',
    titreSEO: 'Leads panneaux solaires qualifiés. Prospects énergie renouvelable',
    description: "Only Cloz génère des leads exclusifs pour les installateurs de panneaux solaires certifiés RGE.",
    descriptionLongue: "Chaque propriétaire est qualifié par téléphone avant transmission.",
    motsCles: ['leads panneaux solaires', 'prospects photovoltaïque', 'rendez-vous solaire'],
    icone: SunIcon,
    gradient: 'from-amber-500 to-yellow-500',
    avantages: ['Conformité RGPD totale', 'Budget confirmé', 'Certification RGE vérifiée'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'medical',
    slug: 'medical-paramedical',
    titre: 'Médical et paramédical',
    titreSEO: 'Leads médical qualifiés. Génération de patients',
    description: "Only Cloz aide les cliniques esthétiques, centres dentaires et praticiens.",
    descriptionLongue: "Chaque contact est filtré par un collaborateur dédié avant la prise de rendez-vous.",
    motsCles: ['leads médical', 'patients clinique', 'rendez-vous médical'],
    icone: HeartIcon,
    gradient: 'from-rose-500 to-pink-500',
    avantages: ['Filtrage collaborateur', 'Données protégées', 'Patients consentis'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'assurance',
    slug: 'assurance-mutuelle',
    titre: 'Assurance et mutuelle',
    titreSEO: 'Leads assurance qualifiés. Prospects mutuelle',
    description: "Only Cloz accompagne les courtiers et agents généraux.",
    descriptionLongue: "Chaque lead est qualifié par téléphone selon le type de contrat recherché.",
    motsCles: ['leads assurance', 'prospects mutuelle', 'rendez-vous assurance'],
    icone: ShieldCheckIcon,
    gradient: 'from-emerald-500 to-teal-500',
    avantages: ['Qualification par contrat', 'Budget vérifié', 'Prospects actifs'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'immobilier',
    slug: 'immobilier',
    titre: 'Immobilier',
    titreSEO: 'Leads immobilier qualifiés. Prospects acheteurs',
    description: "Only Cloz génère des leads exclusifs pour les agences immobilières.",
    descriptionLongue: "Chaque prospect est qualifié par téléphone avant transmission.",
    motsCles: ['leads immobilier', 'prospects acheteurs', 'mandats immobiliers'],
    icone: BuildingOfficeIcon,
    gradient: 'from-indigo-500 to-purple-500',
    avantages: ['Géociblage précis', 'Budget confirmé', 'Projets actifs'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'formation',
    slug: 'formation-coaching',
    titre: 'Formation et coaching',
    titreSEO: 'Leads formation qualifiés. Prospects coaching',
    description: "Only Cloz accompagne les organismes de formation et coachs.",
    descriptionLongue: "Chaque lead est qualifié par téléphone selon le projet.",
    motsCles: ['leads formation', 'prospects coaching', 'rendez-vous bilan'],
    icone: AcademicCapIcon,
    gradient: 'from-orange-500 to-red-500',
    avantages: ['Éligibilité CPF', 'Budget confirmé', 'Prospects engagés'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cuisine',
    slug: 'cuisine-salle-de-bain',
    titre: 'Cuisine et salle de bain',
    titreSEO: 'Leads cuisine salle de bain. Prospects rénovation',
    description: "Only Cloz génère des leads pour les cuisinistes.",
    descriptionLongue: "Chaque prospect est qualifié par téléphone avec rendez-vous posé.",
    motsCles: ['leads cuisine', 'prospects salle de bain', 'rénovation intérieure'],
    icone: SwatchIcon,
    gradient: 'from-purple-500 to-fuchsia-500',
    avantages: ['Budget confirmé', 'Rendez-vous posé', 'Projets actifs'],
    image: 'https://images.unsplash.com/photo-1556911220-bda9e9a3e5c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'piscine',
    slug: 'piscine-jardin',
    titre: 'Piscine et jardin',
    titreSEO: 'Leads piscine. Prospects piscinistes',
    description: "Only Cloz accompagne les piscinistes et paysagistes.",
    descriptionLongue: "Chaque lead est qualifié selon la superficie et le budget.",
    motsCles: ['leads piscine', 'prospects pisciniste', 'construction piscine'],
    icone: SparklesIcon,
    gradient: 'from-sky-500 to-cyan-500',
    avantages: ['Anticipation saisonnalité', 'Budget vérifié', 'Zone ciblée'],
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'alarme',
    slug: 'alarme-securite',
    titre: 'Alarme et sécurité',
    titreSEO: 'Leads alarme. Prospects sécurité',
    description: "Only Cloz génère des leads pour les installateurs d'alarme.",
    descriptionLongue: "Chaque prospect est qualifié par téléphone en moins de 5 minutes.",
    motsCles: ['leads alarme', 'prospects sécurité', 'installation alarme'],
    icone: LockClosedIcon,
    gradient: 'from-slate-500 to-gray-700',
    avantages: ['Qualification rapide', 'Demande constante', 'Type de bien vérifié'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'autre',
    slug: 'votre-secteur-non-liste',
    titre: "Votre secteur n'est pas listé ?",
    titreSEO: "Devis sur mesure. Génération de leads personnalisée",
    description: "Devis sur mesure. Génération de leads personnalisée",
    descriptionLongue: "Devis sur mesure. Génération de leads personnalisée",
    motsCles: ['devis sur mesure', 'leads personnalisés'],
    icone: ChatBubbleLeftRightIcon,
    gradient: 'from-amber-400 to-yellow-500',
    avantages: ['Devis personnalisé', 'Approche sur-mesure', 'Leads ciblés'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// Composant de la page détail
const SecteurDetail = ({ secteur, onBack }: { secteur: SecteurActivite; onBack: () => void }) => {
  const { t } = useI18n();
  const st = t.secteursPage;
  const idx = secteurs.findIndex((s) => s.id === secteur.id);
  const sect = st.secteurs[idx] ?? secteur;
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    message: `${st.prefillMessage}${sect.titre}`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const Icon = secteur.icone;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => onBack(), 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding py-12 md:py-16 max-w-7xl mx-auto">
        <Link
          to="/secteur-activites"
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-[#111827]/60 hover:text-[#EAB308] transition-colors mb-8 cursor-pointer"
        >
          <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="text-[#111827]">{st.back}</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${secteur.gradient} p-4 mb-6 shadow-lg`}>
              <Icon className="w-full h-full text-white" />
            </div>
            {
              (() => {
                const raw = sect.titreSEO ?? '';
                const parts = raw.split('. ');
                const first = parts.length > 1 ? (parts[0].endsWith('.') ? parts[0] : parts[0] + '.') : raw;
                const second = parts.length > 1 ? parts.slice(1).join('. ') : '';
                return (
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
                    {first}
                    {second && (
                      <>
                        <br />
                        <span className="block">{second}</span>
                      </>
                    )}
                  </h1>
                );
              })()
            }
            <p className="text-lg text-[#111827]/60 leading-relaxed mb-6">{sect.description}</p>
            <p className="text-[#111827]/60 leading-relaxed mb-8">{sect.descriptionLongue}</p>

            <div className="mt-8 p-6 rounded-2xl bg-[#F9FAFB] border border-[#EAB308]/10">
              <h3 className="text-lg font-semibold text-[#111827] mb-4">{st.whatYouReceive}</h3>
              <div className="space-y-3">
                {sect.avantages.map((avantage, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-[#EAB308] flex-shrink-0" />
                    <span className="text-[#111827]/70">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-[#111827]/50 uppercase mb-3">{st.targetedKeywords}</h3>
              <div className="flex flex-wrap gap-2">
                {sect.motsCles.map((mot, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm rounded-full bg-[#F9FAFB] text-[#111827]/50 border border-[#EAB308]/10">
                    {mot}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <div className="card-glass p-6 md:p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-[#111827] mb-2">{st.askQuote}</h2>
              <p className="text-[#111827]/50 mb-6">{st.formSubtitle}</p>

              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircleIcon className="w-16 h-16 text-[#EAB308] mb-4" />
                  <h3 className="text-xl font-bold text-[#111827] mb-2">{st.sentTitle}</h3>
                  <p className="text-[#111827]/60">{st.sentText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">{st.fullName}</label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827]/40" />
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-[#EAB308]/15 rounded-xl px-10 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#EAB308] transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">{st.email}</label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827]/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-[#EAB308]/15 rounded-xl px-10 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#EAB308] transition-colors"
                        placeholder="contact@entreprise.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">{st.phone}</label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827]/40" />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-[#EAB308]/15 rounded-xl px-10 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#EAB308] transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">{st.company}</label>
                    <input
                      type="text"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAB308]/15 rounded-xl px-4 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#EAB308] transition-colors"
                      placeholder={st.companyPlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">{st.message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-white border border-[#EAB308]/15 rounded-xl px-4 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#EAB308] transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full btn-primary justify-center">
                    {isSubmitting ? st.sending : st.submit}
                    {!isSubmitting && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>}
                  </button>

                  <p className="text-xs text-[#111827]/30 text-center">{st.rgpd}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant principal
const Activite = () => {
  const { t } = useI18n();
  const st = t.secteursPage;
  const [selectedSecteur, setSelectedSecteur] = useState<SecteurActivite | null>(null);

  if (selectedSecteur) {
    return <SecteurDetail secteur={selectedSecteur} onBack={() => setSelectedSecteur(null)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding py-16 md:py-24 max-w-7xl mx-auto">
        {/* Header - Titre simplifié avec espacements améliorés */}
        <div className="text-center max-w-4xl mx-auto mt-12 mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">
            Générez des leads qualifiés
            dans votre secteur
          </h1>
          <p className="text-lg text-[#111827]/60 max-w-2xl mx-auto mt-4">
            {st.headerSubtitle}
          </p>
        </div>

        {/* Grille des secteurs - Style blog épuré avec micro-interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto px-4">
          {secteurs.map((secteur, index) => {
            return (
              <ScrollReveal key={secteur.id} delay={index * 0.08}>
                <div
                  onClick={() => setSelectedSecteur(secteur)}
                  className="group cursor-pointer rounded-2xl hover:shadow-lg transition-shadow duration-300 p-2 -m-2"
                >
                  {/* Image avec conteneur overflow-hidden et zoom au survol */}
                  <div className="w-full h-52 rounded-xl overflow-hidden mb-4 bg-[#F1F5F9]">
                    <img
                      src={secteur.image}
                      alt={secteur.titre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = 'linear-gradient(135deg, #EAB30820, #CA8A0420)';
                          parent.style.display = 'flex';
                          parent.style.alignItems = 'center';
                          parent.style.justifyContent = 'center';
                          parent.innerHTML = `
                            <span class="text-4xl font-bold text-[#EAB308] opacity-40">
                              ${secteur.titre.charAt(0)}
                            </span>
                          `;
                        }
                      }}
                    />
                  </div>

                  {/* Métadonnées - Catégorie */}
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    SECTEUR D'ACTIVITÉ
                  </p>

                  {/* Titre avec changement de couleur au survol */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#EAB308] transition-colors duration-300">
                    {secteur.titre}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                    {secteur.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '98%', label: 'Satisfaction client', gradient: 'from-cyan-500 to-blue-500' },
            { value: '<24h', label: 'Livraison des leads', gradient: 'from-amber-500 to-orange-500' },
            { value: '100%', label: 'Leads qualifiés', gradient: 'from-emerald-500 to-teal-500' },
            { value: 'RGPD', label: 'Conformité garantie', gradient: 'from-purple-500 to-pink-500' },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={0.8 + i * 0.1}>
              <div>
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-[#111827]/50 text-sm mt-2">{st.stats[i]}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activite;