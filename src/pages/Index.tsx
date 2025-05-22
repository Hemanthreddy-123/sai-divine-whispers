
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-devotional-light to-white p-4">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-devotional-maroon">
          SaiBalaji Devotional Guide
        </h1>
        <p className="text-xl text-devotional-dark mb-8">
          Welcome to our spiritual sanctuary. Click the prayer hands icon in the bottom right corner to receive guidance and blessings.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/80 p-6 rounded-lg shadow-md border border-devotional-gold/20">
            <h2 className="text-xl font-semibold text-devotional-saffron mb-3">Daily Prayer</h2>
            <p className="text-devotional-dark">
              Begin each day with a moment of gratitude and devotion. Set intentions for peace, harmony, and spiritual growth.
            </p>
          </div>
          <div className="bg-white/80 p-6 rounded-lg shadow-md border border-devotional-gold/20">
            <h2 className="text-xl font-semibold text-devotional-saffron mb-3">Meditation Guide</h2>
            <p className="text-devotional-dark">
              Connect with your inner divine through daily meditation. Even a few minutes can bring clarity and peace to your day.
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-devotional-dark/70">
          Om Sai Ram 🙏
        </div>
      </div>
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default Index;
