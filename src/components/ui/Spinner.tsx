
import React from "react";

export const Spinner: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "sm" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };
  
  return (
    <div className="flex items-center justify-center">
      <div 
        className={`${sizeClasses[size]} text-devotional-gold animate-spin`} 
        role="status"
      >
        <svg className="animate-rotate" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="60"
            strokeDashoffset="45"
          />
          <path 
            d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};
