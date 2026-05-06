import Hero from "@/src/components/home/Hero";
import StatsSection from "@/src/components/home/StatsSection";
import AboutSection from "@/src/components/home/AboutSection";
import ProgramsSection from "@/src/components/home/ProgramsSection";
import MentorSection from "@/src/components/home/MentorSection";
import NewsSection from "@/src/components/home/NewsSection";
import JoinCTA from "@/src/components/home/JoinCTA";

export const metadata = {
  title: "Trang chủ - HTEC",
  description: "Câu lạc bộ công nghệ & khởi nghiệp HOU",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <MentorSection />
      <NewsSection />
      <JoinCTA />
    </>
  );
}
