import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import NewsPage from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NewsDetailPage from './pages/NewsDetailPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
        {/* Note: In Next.js routing will handle other pages */}
      </main>
      <Footer />
    </div>
  );
}
