import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Github, Figma, Twitter } from 'lucide-react';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#282C33] text-[#ABB2BF] font-mono relative overflow-x-hidden flex flex-col">
        {/* Fixed Social Sidebar (Desktop only) */}
        <div className="hidden lg:flex flex-col items-center fixed top-0 left-4 z-40 h-full pt-32">
          <div className="w-px h-32 bg-[#ABB2BF] opacity-50 mb-4"></div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-[#ABB2BF] hover:text-white transition-colors">

              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#ABB2BF] hover:text-white transition-colors">

              <Figma className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[#ABB2BF] hover:text-white transition-colors">

              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/about-me" element={<AboutSection />} />
            <Route path="/contacts" element={<ContactSection />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>);

}