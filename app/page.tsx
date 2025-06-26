'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import AboutSection from '@/components/AboutSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import MembersSection from '@/components/MembersSection';
import UniversitiesSection from '@/components/UniversitiesSection';
import SponsorsSection from '@/components/SponsorsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <ParallaxBackground />
      <Header />
      <HeroSection />
      <VisionSection />
      <AboutSection />
      <ActivitiesSection />
      <MembersSection />
      <UniversitiesSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
