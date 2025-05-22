
import React from "react";
import { Spinner } from "../ui/Spinner";

interface ChatMessageProps {
  message: {
    role: "user" | "assistant";
    content: string;
  };
  isLoading?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ 
  message, 
  isLoading = false 
}) => {
  const isUser = message.role === "user";
  
  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser
            ? "bg-devotional-gold bg-opacity-90 text-devotional-dark"
            : "bg-devotional-maroon bg-opacity-90 text-devotional-white"
        }`}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <Spinner />
            <span className="text-sm">Thinking...</span>
          </div>
        ) : (
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        )}
      </div>
    </div>
  );
};
