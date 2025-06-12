import React from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import CredoSection from "./components/CredoSection";
import ActivitiesSection from "./components/ActivitiesSection";
import ListSection from "./components/ListSection";
import ContactSection from "./components/ContactSection";
import ParallaxDecorations from "./components/ParallaxDecorations";
import {
  missionContent,
  visionContent,
  valueContent,
  aboutContent,
  activitiesData,
  universitiesList,
  sponsorsList,
  contactContent,
} from "./content";

const App: React.FC = () => {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <ParallaxDecorations />
      <Hero />
      {/* CREDO */}
      <CredoSection
        id="credo"
        mission={missionContent}
        vision={visionContent}
        value={valueContent}
      />
      {/* ABOUT */}
      <Section id="about" title="連盟について" {...aboutContent} />
      {/* ACTIVITIES */}
      <ActivitiesSection id="activities" title="活動内容" activities={activitiesData} />
      {/* UNIVERSITIES */}
      <ListSection id="universities" title="参加大学" items={universitiesList} />
      {/* SPONSORS */}
      <ListSection id="sponsors" title="協賛企業" items={sponsorsList} />
      {/* CONTACT */}
      <ContactSection id="contact" />
      <footer className="w-full py-8 text-center text-sm bg-gray-800/60 backdrop-blur-sm mt-24">
        © {new Date().getFullYear()} 大学アプリ連盟
      </footer>
    </main>
  );
};

export default App; 