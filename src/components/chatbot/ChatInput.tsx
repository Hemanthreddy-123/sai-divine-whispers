
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex items-center gap-2 border-t ${isDark ? 'border-devotional-gold/30' : 'border-devotional-gold/20'} p-3 ${isDark ? 'bg-devotional-dark/80' : 'bg-devotional-light-pale/80'}`}>
      <Input
        className={`flex-1 ${isDark 
          ? 'bg-devotional-dark text-devotional-white border-devotional-gold/50 focus:border-devotional-gold focus-visible:ring-devotional-gold/30' 
          : 'bg-devotional-light-pale text-devotional-dark-muted border-devotional-gold/30 focus:border-devotional-gold/60 focus-visible:ring-devotional-gold/20'}`}
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        autoFocus
      />
      <Button
        type="submit"
        disabled={!input.trim() || isLoading}
        className={`${isDark 
          ? 'bg-devotional-saffron hover:bg-devotional-maroon text-devotional-white' 
          : 'bg-devotional-saffron-light hover:bg-devotional-maroon-light text-devotional-dark'} transition-colors`}
      >
        Send
      </Button>
    </form>
  );
};
