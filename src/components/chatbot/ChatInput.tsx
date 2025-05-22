
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-devotional-gold/30 p-3">
      <Input
        className="flex-1 bg-devotional-light text-devotional-dark border-devotional-gold/50 focus:border-devotional-gold focus-visible:ring-devotional-gold/30"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        autoFocus
      />
      <Button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="bg-devotional-saffron hover:bg-devotional-maroon text-devotional-white transition-colors"
      >
        Send
      </Button>
    </form>
  );
};
