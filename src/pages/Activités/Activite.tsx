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
  XMarkIcon
} from '@heroicons/react/24/outline';

// Types
interface Activite {
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
const secteurs: Activite[] = [
  {
    id: 'isolation',
    slug: 'isolation-renovation-energetique',
    titre: 'Isolation et rénovation énergétique',
    titreSEO: 'Leads isolation qualifiés — Génération de prospects rénovation énergétique',
    description: "Only Cloz génère des leads exclusifs pour les entreprises d'isolation et de rénovation énergétique. Nos campagnes publicitaires ciblées sur Meta et TikTok attirent des propriétaires éligibles aux aides de l'État. Qu'il s'agisse d'isolation, de remplacement de fenêtres, de portes ou de volets.",
    descriptionLongue: "Chaque prospect est contacté par téléphone, qualifié selon vos critères et livré avec un rendez-vous confirmé dans votre agenda. Nos équipes qualifient en amont l'éligibilité aux aides (MaPrimeRénov', CEE, Éco-PTZ) et vérifient le budget du projet. Vous ne recevez que des rendez-vous fermes avec des propriétaires motivés et prêts à signer.",
    motsCles: ['leads isolation', 'prospects rénovation énergétique', 'génération leads MaPrimeRénov', 'rendez-vous isolation qualifiés'],
    icone: HomeIcon,
    gradient: 'from-cyan-500 to-blue-500',
    avantages: ['Qualification éligibilité MaPrimeRénov', 'Vérification du budget travaux', 'Rendez-vous confirmé dans l\'agenda']
  },
  {
    id: 'energie',
    slug: 'energie-panneaux-solaires',
    titre: 'Énergie et panneaux solaires',
    titreSEO: 'Leads panneaux solaires qualifiés — Prospects énergie renouvelable',
    description: "Only Cloz génère des leads exclusifs pour les installateurs de panneaux solaires certifiés RGE. Nos prospects ont explicitement consenti à être contactés, ce qui garantit une conformité RGPD totale dans un secteur fortement réglementé.",
    descriptionLongue: "Chaque propriétaire est qualifié par téléphone avant transmission. Vous recevez uniquement des projets sérieux avec un budget confirmé. Nous vérifions l'exposition du toit, la consommation électrique et le budget alloué. Un secteur en forte croissance avec une demande constante et des propriétaires sensibilisés aux enjeux énergétiques.",
    motsCles: ['leads panneaux solaires', 'prospects photovoltaïque qualifiés', 'génération leads énergie renouvelable', 'rendez-vous solaire'],
    icone: SunIcon,
    gradient: 'from-amber-500 to-yellow-500',
    avantages: ['Conformité RGPD totale', 'Budget confirmé avant transmission', 'Certification RGE vérifiée']
  },
  {
    id: 'medical',
    slug: 'medical-paramedical',
    titre: 'Médical et paramédical',
    titreSEO: 'Leads médical qualifiés — Génération de patients pour cliniques et praticiens',
    description: "Only Cloz aide les cliniques esthétiques, centres dentaires et praticiens à remplir leur agenda avec des patients qualifiés et consentis. Nos campagnes ciblées sur Meta attirent des profils correspondant exactement à votre patientèle idéale.",
    descriptionLongue: "Chaque contact est filtré par un collaborateur dédié avant la prise de rendez-vous. Conformité RGPD garantie, données sensibles protégées. Nous respectons scrupuleusement la réglementation médicale et les obligations déontologiques. Vous recevez des patients motivés, prêts à s'engager dans un parcours de soins.",
    motsCles: ['leads médical qualifiés', 'patients clinique esthétique', 'génération leads chirurgie', 'rendez-vous médical qualifié'],
    icone: HeartIcon,
    gradient: 'from-rose-500 to-pink-500',
    avantages: ['Filtrage collaborateur dédié', 'Données sensibles protégées', 'Patients consentis et motivés']
  },
  {
    id: 'assurance',
    slug: 'assurance-mutuelle',
    titre: 'Assurance et mutuelle',
    titreSEO: 'Leads assurance qualifiés — Prospects mutuelle et contrats sur mesure',
    description: "Only Cloz accompagne les courtiers et agents généraux qui veulent développer leur portefeuille clients sans démarchage agressif. Nos campagnes publicitaires ciblées génèrent des prospects en recherche active de contrats d'assurance ou de mutuelle.",
    descriptionLongue: "Chaque lead est qualifié par téléphone selon le type de contrat recherché, le budget et la situation personnelle. Nous vérifions les besoins spécifiques (santé, prévoyance, habitation, auto) et la capacité de souscription. Vous gagnez un temps précieux en évitant les profils non qualifiés.",
    motsCles: ['leads assurance qualifiés', 'prospects mutuelle', 'génération leads courtier', 'rendez-vous assurance'],
    icone: ShieldCheckIcon,
    gradient: 'from-emerald-500 to-teal-500',
    avantages: ['Qualification par type de contrat', 'Budget et situation vérifiés', 'Prospects en recherche active']
  },
  {
    id: 'immobilier',
    slug: 'immobilier',
    titre: 'Immobilier',
    titreSEO: 'Leads immobilier qualifiés — Prospects acheteurs et vendeurs ciblés',
    description: "Only Cloz génère des leads exclusifs pour les agences immobilières et mandataires qui veulent réduire leur dépendance aux portails. Nos campagnes géociblées sur Meta et TikTok attirent des acheteurs et vendeurs en projet actif dans votre secteur.",
    descriptionLongue: "Chaque prospect est qualifié par téléphone avant transmission. Vous recevez uniquement des projets sérieux avec délai et budget confirmés. Nous vérifions le mandat, la capacité d'achat et le calendrier du projet. Dites adieu aux leads froids et aux visites non converties.",
    motsCles: ['leads immobilier qualifiés', 'prospects acheteurs vendeurs', 'génération leads agence immobilière', 'mandats immobiliers'],
    icone: BuildingOfficeIcon,
    gradient: 'from-indigo-500 to-purple-500',
    avantages: ['Géociblage précis', 'Budget et délai confirmés', 'Projets actifs uniquement']
  },
  {
    id: 'formation',
    slug: 'formation-coaching',
    titre: 'Formation et coaching',
    titreSEO: 'Leads formation qualifiés — Prospects coaching et développement professionnel',
    description: "Only Cloz accompagne les organismes de formation et coachs qui veulent scaler leur acquisition sans dépendre uniquement du bouche à oreille. Nos campagnes TikTok et Instagram génèrent des prospects en recherche active de formation ou d'accompagnement.",
    descriptionLongue: "Chaque lead est qualifié par téléphone selon le projet, le budget et la disponibilité. Nous vérifions l'engagement du prospect, son éligibilité aux financements (CPF, OPCO) et son souhait de s'engager rapidement. Idéal pour remplir vos sessions de formation.",
    motsCles: ['leads formation qualifiés', 'prospects coaching', 'génération leads organisme formation', 'rendez-vous bilan de compétences'],
    icone: AcademicCapIcon,
    gradient: 'from-orange-500 to-red-500',
    avantages: ['Vérification éligibilité CPF', 'Budget et disponibilité confirmés', 'Prospects engagés']
  },
  {
    id: 'cuisine',
    slug: 'cuisine-salle-de-bain',
    titre: 'Cuisine et salle de bain',
    titreSEO: 'Leads cuisine salle de bain qualifiés — Prospects rénovation intérieure',
    description: "Only Cloz génère des leads exclusifs pour les cuisinistes et spécialistes de la salle de bain qui veulent remplir leur carnet de commandes. Nos campagnes publicitaires géociblées attirent des propriétaires en projet de rénovation avec budget confirmé.",
    descriptionLongue: "Chaque prospect est qualifié par téléphone avant de vous être transmis avec un rendez-vous posé dans votre agenda. Nous vérifions le budget travaux, la surface concernée et le délai souhaité. Un secteur où l'émotionnel prime - nos leads sont déjà convaincus et prêts à concrétiser.",
    motsCles: ['leads cuisine qualifiés', 'prospects salle de bain', 'génération leads cuisiniste', 'rendez-vous rénovation intérieure'],
    icone: SwatchIcon,
    gradient: 'from-purple-500 to-fuchsia-500',
    avantages: ['Budget confirmé', 'Rendez-vous posé dans l\'agenda', 'Projets de rénovation actifs']
  },
  {
    id: 'piscine',
    slug: 'piscine-jardin',
    titre: 'Piscine et jardin',
    titreSEO: 'Leads piscine qualifiés — Prospects piscinistes et aménagement extérieur',
    description: "Only Cloz accompagne les piscinistes et paysagistes qui veulent anticiper la saisonnalité et remplir leur planning dès le début de l'année. Nos campagnes Meta ciblées génèrent des propriétaires en projet de construction ou rénovation de piscine dans votre zone d'intervention.",
    descriptionLongue: "Chaque lead est qualifié selon la superficie, le budget et le délai souhaité. Nous vérifions la faisabilité technique (contraintes du terrain, accès engins) et le budget alloué. Commencez la saison avec un planning chargé dès les premiers beaux jours.",
    motsCles: ['leads piscine qualifiés', 'prospects pisciniste', 'génération leads aménagement jardin', 'rendez-vous construction piscine'],
    icone: SparklesIcon,
    gradient: 'from-sky-500 to-cyan-500',
    avantages: ['Anticipation saisonnalité', 'Superficie et budget vérifiés', 'Zone d\'intervention ciblée']
  },
  {
    id: 'alarme',
    slug: 'alarme-securite',
    titre: 'Alarme et sécurité',
    titreSEO: 'Leads alarme qualifiés — Prospects sécurité et vidéosurveillance',
    description: "Only Cloz génère des leads exclusifs pour les installateurs de systèmes d'alarme et de vidéosurveillance. Nos campagnes publicitaires géociblées attirent des propriétaires et locataires en recherche active de solutions de sécurité.",
    descriptionLongue: "Chaque prospect est qualifié par téléphone en moins de 5 minutes avant transmission. Demande constante toute l'année, sans saisonnalité. Nous vérifions le type de bien (maison/appartement), le niveau de sécurité souhaité et le budget. Un marché porteur et récurrent.",
    motsCles: ['leads alarme qualifiés', 'prospects vidéosurveillance', 'génération leads sécurité', 'rendez-vous installation alarme'],
    icone: LockClosedIcon,
    gradient: 'from-slate-500 to-gray-700',
    avantages: ['Qualification rapide <5 min', 'Demande constante toute l\'année', 'Type de bien vérifié']
  }
];

// Composant de la page détail pour un secteur
const SecteurDetail = ({ 
  secteur, 
  onBack 
}: { 
  secteur: Activite; 
  onBack: () => void;
}) => {
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
    setSubmitStatus('idle');

    // Simulation d'envoi API
    setTimeout(() => {
      console.log('Formulaire soumis pour:', secteur.titre, formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      setTimeout(() => {
        onBack();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 noise"></div>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl orb-1"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl orb-2"></div>

      <div className="relative z-10 section-padding py-12 md:py-16">
        {/* Back button */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowRightIcon className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Retour aux secteurs
        </button>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left column - Content */}
          <div className="fade-in-up">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${secteur.gradient} p-4 mb-6`}>
              <Icon className="w-full h-full text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {secteur.titreSEO}
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              {secteur.description}
            </p>
            
            <div className="prose prose-invert prose-lg">
              <p className="text-white/60 leading-relaxed">
                {secteur.descriptionLongue}
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">✓ Ce que vous recevez</h3>
              <div className="space-y-3">
                {secteur.avantages.map((avantage, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/70">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                Mots-clés ciblés
              </h3>
              <div className="flex flex-wrap gap-2">
                {secteur.motsCles.map((mot, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm rounded-full bg-white/10 text-white/60">
                    {mot}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="card-glass p-6 md:p-8 sticky top-24">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Demandez un devis</h2>
                <p className="text-white/50">
                  Remplissez ce formulaire, notre équipe vous recontacte sous 24h
                </p>
              </div>

              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircleIcon className="w-16 h-16 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Demande envoyée !</h3>
                  <p className="text-white/60">
                    Un conseiller vous contactera très rapidement pour discuter de votre projet.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-500 transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">
                      Email *
                    </label>
                    <div className="relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-500 transition-colors"
                        placeholder="contact@entreprise.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-500 transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">
                      Nom de votre entreprise
                    </label>
                    <input
                      type="text"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-500 transition-colors"
                      placeholder="Ma Société"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1">
                      Message
                    </label>
                    <div className="relative">
                      <ChatBubbleLeftRightIcon className="absolute left-3 top-3 w-4 h-4 text-white/40" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <ArrowRightIcon className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/30 text-center">
                    En soumettant ce formulaire, j'accepte d'être recontacté.
                    Données protégées conformément au RGPD.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant principal - Grille des secteurs
const Activite = () => {
  const [selectedSecteur, setSelectedSecteur] = useState<Activite | null>(null);

  if (selectedSecteur) {
    return (
      <SecteurDetail 
        secteur={selectedSecteur} 
        onBack={() => setSelectedSecteur(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 noise"></div>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl orb-1"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl orb-2"></div>

      <div className="relative z-10 section-padding py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-sm font-medium text-white/80">9 secteurs d'expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Générez des{' '}
            <span className="gradient-text">leads qualifiés</span>
            <br />
            dans votre secteur
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Des prospects exclusifs, qualifiés par téléphone et prêts à concrétiser leur projet.
            Concentrez-vous sur votre métier, on s'occupe du reste.
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {secteurs.map((secteur, index) => {
            const Icon = secteur.icone;
            return (
              <button
                key={secteur.id}
                onClick={() => setSelectedSecteur(secteur)}
                className="group text-left card-glass p-6 hover:glow-brand transition-all duration-500 hover:-translate-y-2 fade-in-up text-start w-full"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${secteur.gradient} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {secteur.titre}
                </h3>
                <p className="text-white/50 text-sm mb-4 line-clamp-2">
                  {secteur.titreSEO}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {secteur.motsCles.slice(0, 2).map((mot, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/40">
                      {mot}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-brand-400 text-sm font-medium group-hover:gap-3 transition-all">
                  <span>En savoir plus</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="max-w-5xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '98%', label: 'Satisfaction client', gradient: 'from-cyan-400 to-blue-400' },
            { value: '<24h', label: 'Livraison des leads', gradient: 'from-amber-400 to-orange-400' },
            { value: '100%', label: 'Leads qualifiés', gradient: 'from-emerald-400 to-teal-400' },
            { value: 'RGPD', label: 'Conformité garantie', gradient: 'from-purple-400 to-pink-400' },
          ].map((stat, i) => (
            <div key={i} className="fade-in-up" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-white/50 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Activite;