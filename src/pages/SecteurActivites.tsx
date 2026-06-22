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
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import ScrollReveal from '../components/ui/ScrollReveal';

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
}

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  message: string;
}

// Données des secteurs d'activité
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
    avantages: ['Qualification éligibilité MaPrimeRénov', 'Vérification du budget travaux', 'Rendez-vous confirmé']
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
    avantages: ['Conformité RGPD totale', 'Budget confirmé', 'Certification RGE vérifiée']
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
    avantages: ['Filtrage collaborateur', 'Données protégées', 'Patients consentis']
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
    avantages: ['Qualification par contrat', 'Budget vérifié', 'Prospects actifs']
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
    avantages: ['Géociblage précis', 'Budget confirmé', 'Projets actifs']
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
    avantages: ['Éligibilité CPF', 'Budget confirmé', 'Prospects engagés']
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
    avantages: ['Budget confirmé', 'Rendez-vous posé', 'Projets actifs']
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
    avantages: ['Anticipation saisonnalité', 'Budget vérifié', 'Zone ciblée']
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
    avantages: ['Qualification rapide', 'Demande constante', 'Type de bien vérifié']
  }
];

// Composant de la page détail
const SecteurDetail = ({ secteur, onBack }: { secteur: SecteurActivite; onBack: () => void }) => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    message: `Je suis intéressé par vos services concernant : ${secteur.titre}`
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
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-[#111827]/60 hover:text-[#7C3AED] transition-colors mb-8"
        >
          <ArrowRightIcon className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[#111827]">Retour aux secteurs</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div>
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${secteur.gradient} p-4 mb-6 shadow-lg`}>
              <Icon className="w-full h-full text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-4">
              {secteur.titreSEO}
            </h1>
            <p className="text-lg text-[#111827]/60 leading-relaxed mb-6">{secteur.description}</p>
            <p className="text-[#111827]/60 leading-relaxed mb-8">{secteur.descriptionLongue}</p>

            <div className="mt-8 p-6 rounded-2xl bg-[#F9FAFB] border border-[#7C3AED]/10">
              <h3 className="text-lg font-semibold text-[#111827] mb-4">✓ Ce que vous recevez</h3>
              <div className="space-y-3">
                {secteur.avantages.map((avantage, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />
                    <span className="text-[#111827]/70">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-[#111827]/50 uppercase mb-3">Mots-clés ciblés</h3>
              <div className="flex flex-wrap gap-2">
                {secteur.motsCles.map((mot, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm rounded-full bg-[#F9FAFB] text-[#111827]/50 border border-[#7C3AED]/10">
                    {mot}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <div className="card-glass p-6 md:p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-[#111827] mb-2">Demandez un devis</h2>
              <p className="text-[#111827]/50 mb-6">Remplissez ce formulaire, notre équipe vous recontacte sous 24h</p>

              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircleIcon className="w-16 h-16 text-[#7C3AED] mb-4" />
                  <h3 className="text-xl font-bold text-[#111827] mb-2">Demande envoyée !</h3>
                  <p className="text-[#111827]/60">Un conseiller vous contactera très rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">Nom complet *</label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827]/40" />
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-[#7C3AED]/15 rounded-xl px-10 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#7C3AED] transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">Email *</label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827]/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-[#7C3AED]/15 rounded-xl px-10 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#7C3AED] transition-colors"
                        placeholder="contact@entreprise.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">Téléphone *</label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111827]/40" />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-[#7C3AED]/15 rounded-xl px-10 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#7C3AED] transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">Entreprise</label>
                    <input
                      type="text"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#7C3AED]/15 rounded-xl px-4 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#7C3AED] transition-colors"
                      placeholder="Ma Société"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#111827]/70 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-white border border-[#7C3AED]/15 rounded-xl px-4 py-3 text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full btn-primary justify-center">
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    {!isSubmitting && <ArrowRightIcon className="w-4 h-4" />}
                  </button>

                  <p className="text-xs text-[#111827]/30 text-center">Données protégées conformément au RGPD.</p>
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
  const [selectedSecteur, setSelectedSecteur] = useState<SecteurActivite | null>(null);

  if (selectedSecteur) {
    return <SecteurDetail secteur={selectedSecteur} onBack={() => setSelectedSecteur(null)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding py-16 md:py-24 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9FAFB] border border-[#7C3AED]/15 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
            <span className="text-sm font-medium text-[#111827]/80">9 secteurs d'expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#111827]">
            Générez des{' '}
            <span className="gradient-text">leads qualifiés</span>
            <br />
            dans votre secteur
          </h1>
          <p className="text-lg md:text-xl text-[#111827]/60 max-w-2xl mx-auto">
            Des prospects exclusifs, qualifiés par téléphone et prêts à concrétiser leur projet.
            Concentrez-vous sur votre métier, on s'occupe du reste.
          </p>
        </div>

        {/* Grille des secteurs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-stretch">
          {secteurs.map((secteur, index) => {
            const Icon = secteur.icone;
            return (
              <ScrollReveal key={secteur.id} delay={index * 0.05} className="h-full">
                <button
                  onClick={() => setSelectedSecteur(secteur)}
                  className="group text-left card-glass p-5 hover:border-[#7C3AED]/30 transition-all duration-500 hover:-translate-y-1 w-full h-full flex flex-col"
                >
                  {/* Icône */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${secteur.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Titre — hauteur fixe sur 2 lignes */}
                  <h3 className="text-sm font-semibold text-[#111827] mb-2 group-hover:text-[#7C3AED] transition-colors line-clamp-2 min-h-[2.5rem]">
                    {secteur.titre}
                  </h3>

                  {/* Description SEO — hauteur fixe sur 3 lignes */}
                  <p className="text-[#111827]/45 text-xs leading-relaxed mb-3 line-clamp-3 min-h-[3.75rem]">
                    {secteur.titreSEO}
                  </p>

                  {/* Tags — zone fixe */}
                  <div className="flex flex-wrap gap-1.5 mb-4 min-h-[1.75rem]">
                    {secteur.motsCles.slice(0, 2).map((mot, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[#F9FAFB] text-[#111827]/40 border border-[#7C3AED]/10 whitespace-nowrap"
                      >
                        {mot}
                      </span>
                    ))}
                  </div>

                  {/* CTA — toujours en bas grâce au mt-auto */}
                  <div className="mt-auto flex items-center gap-2 text-[#7C3AED] text-xs font-semibold group-hover:gap-3 transition-all pt-3 border-t border-[#7C3AED]/08">
                    <span>En savoir plus</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  </div>
                </button>
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
                <div className="text-[#111827]/50 text-sm mt-2">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activite;