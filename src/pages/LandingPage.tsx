"use client";

import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import AboutSection from '../components/home/AboutSection';
import ProgramsSection from '../components/home/ProgramsSection';
import MentorSection from '../components/home/MentorSection';
import NewsSection from '../components/home/NewsSection';
import JoinCTA from '../components/home/JoinCTA';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <MentorSection />
      <NewsSection />
      <JoinCTA />
    </motion.div>
  );
}
