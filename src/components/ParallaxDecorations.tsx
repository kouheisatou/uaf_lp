import React from "react";
import ParallaxImage from "./ParallaxImage";

const ParallaxDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Single slow-moving background image */}
      <ParallaxImage
        src="https://picsum.photos/seed/background/1920/1080"
        speed={0.3}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
    </div>
  );
};

export default ParallaxDecorations; 