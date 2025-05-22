
// Integration with OpenAI API
// In production, this should be handled through a secure backend

// You should replace this with your own secure implementation
// DO NOT expose API keys in frontend code
// This is just a demonstration

interface CompletionResponse {
  choices: Array<{
    text: string;
  }>;
}

export async function generateResponse(messages: Array<{ role: string; content: string }>) {
  // Extract the last user message for the prompt
  const lastUserMessage = messages.filter(m => m.role === "user").pop();
  
  if (!lastUserMessage) {
    return "How may I assist you on your spiritual journey today?";
  }

  try {
    // In a real implementation, this would be a secure backend call
    // IMPORTANT: Never expose your API key in frontend code
    // This simulates what your Python code is doing but in a web context
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // For demonstration purposes, using mock responses
    // In production, replace this with a secure backend API call
    const userQuery = lastUserMessage.content.toLowerCase();
    
    // Basic keyword matching similar to your Python implementation
    if (userQuery.includes("pray") || userQuery.includes("prayer")) {
      return "Prayer is a beautiful way to connect with the divine. Sai Baba teaches us that sincere prayer from the heart is always heard. 🙏";
    }
    
    if (userQuery.includes("meditat") || userQuery.includes("silence")) {
      return "Meditation is the path to inner peace. Sai Baba says, 'Silence is the first step towards spirituality.' Try sitting quietly for a few minutes each day. 🧘";
    }
    
    if (userQuery.includes("mantra") || userQuery.includes("chant")) {
      return "Mantras are powerful sound vibrations that align our consciousness with the divine. 'Om Sai Ram' is a sacred mantra that invokes the grace of Sai Baba. 🕉️";
    }

    if (userQuery.includes("help") || userQuery.includes("service")) {
      return "Sai Baba emphasized selfless service (Seva) as the highest form of spiritual practice. 'Hands that serve are holier than lips that pray.' 💖";
    }
    
    // Default responses
    const mockResponses = [
      "Sai Baba teaches us that love and service to humanity are the true forms of devotion.",
      "Patience and faith are powerful virtues on the spiritual path. As Sai Baba says, 'Shraddha Saburi'.",
      "The essence of all religions is the same - to promote love, compassion, and harmony.",
      "Offering gratitude for all experiences in life, both pleasant and challenging, is a powerful spiritual practice.",
    ];
    
    return mockResponses[Math.floor(Math.random() * mockResponses.length)];
  } catch (error) {
    console.error("Error generating response:", error);
    return "Om Sai Ram 🙏 I'm having trouble connecting right now. Please try again in a moment.";
  }
}

// This function simulates your Python implementation's error checking
export function validateMessage(message: string): boolean {
  return message.trim() !== "";
}
