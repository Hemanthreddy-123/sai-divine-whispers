
import React from "react";

interface BubbleProps {
  onClick: () => void;
  isOpen: boolean;
}

export const SaiBalajiBubble: React.FC<BubbleProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 rounded-full shadow-lg z-50 transition-all duration-300 
        ${
          isOpen
            ? "scale-0 opacity-0" 
            : "bg-gradient-to-r from-devotional-saffron to-devotional-maroon animate-pulse-soft"
        }`}
      aria-label="Open SaiBalaji Chatbot"
    >
      <div className="relative flex items-center justify-center w-10 h-10">
        <div className="absolute inset-0 rounded-full bg-devotional-gold opacity-20 animate-pulse-soft"></div>
        <div className="text-devotional-white text-xl">🙏</div>
      </div>
    </button>
  );
};
