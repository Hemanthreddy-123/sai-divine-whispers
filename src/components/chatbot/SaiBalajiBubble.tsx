
import React from "react";
import { useTheme } from "next-themes";

interface BubbleProps {
  onClick: () => void;
  isOpen: boolean;
}

export const SaiBalajiBubble: React.FC<BubbleProps> = ({ onClick, isOpen }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 rounded-full shadow-lg z-50 transition-all duration-300 
        ${
          isOpen
            ? "scale-0 opacity-0" 
            : isDark 
              ? "bg-gradient-to-r from-devotional-saffron to-devotional-maroon animate-pulse-soft"
              : "bg-gradient-to-r from-devotional-saffron/70 to-devotional-maroon/70 animate-pulse-soft"
        }`}
      aria-label="Open SaiBalaji Chatbot"
    >
      <div className="relative flex items-center justify-center w-10 h-10">
        <div className={`absolute inset-0 rounded-full ${isDark ? "bg-devotional-gold" : "bg-devotional-gold/60"} opacity-20 animate-pulse-soft`}></div>
        <div className="text-devotional-white text-xl">🙏</div>
      </div>
    </button>
  );
};
