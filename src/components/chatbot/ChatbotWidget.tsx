
import React, { useState, useEffect, useRef } from "react";
import { SaiBalajiBubble } from "./SaiBalajiBubble";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { generateResponse } from "@/lib/openai";
import { X } from "lucide-react";

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    { 
      role: "assistant", 
      content: "Om Sri Sai Balaji 🙏, how may I help you today? I can assist with spiritual guidance, prayers, or answer questions about devotional practices." 
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (content: string) => {
    const userMessage = { role: "user" as const, content };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      const response = await generateResponse([...messages, userMessage]);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Failed to get response:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Apologies, I'm having trouble connecting right now. Please try again later. 🙏" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  return (
    <>
      <SaiBalajiBubble onClick={toggleChat} isOpen={isOpen} />

      <div
        className={`fixed bottom-6 right-6 w-[350px] max-w-[90vw] h-[500px] max-h-[80vh] bg-devotional-light rounded-lg shadow-xl overflow-hidden flex flex-col z-50 transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-devotional-saffron to-devotional-maroon p-4 text-devotional-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-devotional-gold flex items-center justify-center text-devotional-maroon font-bold">
              🙏
            </div>
            <h2 className="text-lg font-semibold">SaiBalaji Chatbot</h2>
          </div>
          <button
            onClick={toggleChat}
            className="text-devotional-white hover:text-devotional-gold transition-colors"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-devotional-white/50">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isLoading && (
            <ChatMessage
              message={{ role: "assistant", content: "" }}
              isLoading={true}
            />
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </>
  );
};
