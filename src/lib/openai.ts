
// This is a frontend-only implementation that simulates OpenAI API calls
// In a production environment, you should use a backend service to protect your API key

// Mock responses for spiritual/devotional questions
const mockResponses = [
  "Sai Baba teaches us that love and service to humanity are the true forms of devotion. Through selfless actions, we purify our hearts.",
  "Patience and faith are powerful virtues on the spiritual path. As Sai Baba says, 'Shraddha Saburi' - have faith and patience.",
  "Meditation helps calm the mind and connect with the divine within. Try sitting in silence for a few minutes each day, focusing on your breath.",
  "The essence of all religions is the same - to promote love, compassion, and harmony among all beings.",
  "Sai Baba reminds us that helping those in need is true service to God. 'Hands that serve are holier than lips that pray.'",
  "Regular prayer creates positive vibrations and helps establish a connection with the divine. It's best to maintain consistency in your spiritual practices.",
  "Offering gratitude for all experiences in life, both pleasant and challenging, is a powerful spiritual practice.",
  "Om Sai Ram is a powerful mantra that connects us with the divine energy of Sai Baba. Chanting it with devotion can bring peace and clarity.",
];

// In a real implementation, this would make an API call to OpenAI
export async function generateResponse(messages: Array<{ role: string; content: string }>) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Get the last user message
  const lastUserMessage = messages.filter(m => m.role === "user").pop();
  
  if (!lastUserMessage) {
    return "How may I assist you on your spiritual journey today?";
  }
  
  const userQuery = lastUserMessage.content.toLowerCase();
  
  // Basic keyword matching for appropriate responses
  if (userQuery.includes("pray") || userQuery.includes("prayer") || userQuery.includes("praying")) {
    return "Prayer is a beautiful way to connect with the divine. Sai Baba teaches us that sincere prayer from the heart is always heard. It's not about the words, but about the feeling and devotion behind them. 🙏";
  }
  
  if (userQuery.includes("meditat") || userQuery.includes("silence") || userQuery.includes("calm")) {
    return "Meditation is the path to inner peace. Sai Baba says, 'Silence is the first step towards spirituality.' Try sitting quietly for a few minutes each day, focusing on your breath, and gradually increasing the duration as you become comfortable. 🧘";
  }
  
  if (userQuery.includes("mantra") || userQuery.includes("chant") || userQuery.includes("om sai")) {
    return "Mantras are powerful sound vibrations that align our consciousness with the divine. 'Om Sai Ram' is a sacred mantra that invokes the grace of Sai Baba. Chanting it with devotion and concentration purifies the mind and heart. 🕉️";
  }

  if (userQuery.includes("help") || userQuery.includes("service") || userQuery.includes("seva")) {
    return "Sai Baba emphasized selfless service (Seva) as the highest form of spiritual practice. 'Hands that serve are holier than lips that pray.' When we serve others with love and without expectation, we are serving the divine that resides in every being. 💖";
  }
  
  // Return a random spiritual response for other queries
  return mockResponses[Math.floor(Math.random() * mockResponses.length)];
}
