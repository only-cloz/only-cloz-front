import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Footer from "./components/layout/Footer";
import Services from "./pages/Services";
import PourquoiNous from './pages/PourquoiNous';
import SecteurActivites from './pages/SecteurActivites';
import About from "./pages/About";
import Contact from "./pages/Contact";
import SEO from "./pages/Service/SEO";
import SEA from "./pages/Service/SEA";
import SocialAds from "./pages/Service/SocialAds";
import CreationSite from "./pages/Service/CreationSite";
import WebdesignUX from "./pages/Service/WebdesignUX";
import ContentMarketing from "./pages/Service/ContentMarketing";
import SocialMedia from "./pages/Service/SocialMedia";
import Blog from "./pages/Ressources/Blog";
import LivreBlanc from "./pages/Ressources/LivreBlanc";
import Guide from "./pages/Ressources/Guide";
import Video from "./pages/Ressources/Video";
import ADNPage from "./pages/Decouvrir/adn";
import EngagementsPage from "./pages/Decouvrir/engagement";
import HistoirePage from "./pages/Decouvrir/Histoire";
import RecompensesPage from "./pages/Decouvrir/Recompense";
import CasClientPage from "./pages/ClientPage";
import OffrePage from "./pages/OffrePage";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import { LanguageProvider } from "./i18n";

const ComingSoon = () => (
  <div className="min-h-screen flex items-center justify-center pt-32">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Page en construction</h1>
      <p className="text-gray-600 dark:text-white/60">
        Cette page sera bientôt disponible.
      </p>
    </div>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* Pages principales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pourquoi-nous" element={<PourquoiNous />} />
          <Route path="/secteur-activites" element={<SecteurActivites />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client" element={<CasClientPage />} />
          <Route path="/offres" element={<OffrePage />} />

          {/* Sous-pages Expertises - Acquisition */}
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/sea" element={<SEA />} />
          <Route path="/services/social-ads" element={<SocialAds />} />

          {/* Sous-pages Expertises - Création */}
          <Route path="/services/creation-site" element={<CreationSite />} />
          <Route path="/services/webdesign" element={<WebdesignUX />} />
          <Route path="/services/content" element={<ContentMarketing />} />
          <Route path="/services/social-media" element={<SocialMedia />} />

          {/* Sous-pages Expertises - Stratégie (Commentées temporairement) */}
          <Route path="/services/marketing-digital" element={<ComingSoon />} />
          <Route path="/services/audit" element={<ComingSoon />} />
          <Route path="/services/data" element={<ComingSoon />} />

          {/* Pages Resources (Commentées temporairement) */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/livre-blanc" element={<LivreBlanc />} />
          <Route path="/resources/video" element={<Video />} />
          <Route path="/resources/guide" element={<Guide />} />


          {/* Pages decouvir (Commentées temporairement) */}
          <Route path="/Decouvrir/adn" element={<ADNPage />} />
          <Route path="/Decouvrir/engagements" element={<EngagementsPage />} />
          <Route path="/Decouvrir/histoire" element={<HistoirePage />} />
          <Route path="/Decouvrir/recompenses" element={<RecompensesPage />} />

          {/* Fallback - 404 page */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </LanguageProvider>
  );
}