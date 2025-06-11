import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("Hello World app is loading! 🌟");
    const timer = setTimeout(() => {
      setIsVisible(true);
      console.log("Hello World animation triggered! ✨");
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = () => {
    console.log("Hello World card clicked! 👋");
  };

  return (
    <div className="min-h-screen bg-gradient-hello flex items-center justify-center p-4">
      <div 
        className={`
          max-w-md w-full bg-gradient-card rounded-2xl shadow-2xl p-8 text-center
          transform transition-all duration-700 hover:scale-105 hover:shadow-3xl
          cursor-pointer
          ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'}
        `}
        onClick={handleCardClick}
      >
        {/* Animated Heart Icon */}
        <div className="mb-6 flex justify-center">
          <Heart 
            className="w-12 h-12 text-pink-500 animate-bounce-gentle" 
            fill="currentColor"
          />
        </div>

        {/* Main Hello World Text */}
        <h1 className="text-5xl font-bold mb-4 hello-world-text">
          Hello World!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Welcome to your beautiful React application built with love and modern design.
        </p>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-2 mb-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-150"></div>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Index;