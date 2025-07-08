import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "918905061188";
    const message = "Hello Rahul! I came across your portfolio and would like to connect.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    const subject = "Opportunity from Portfolio";
    const body = "Hello Rahul,\n\nI came across your portfolio and would like to discuss an opportunity.\n\nBest regards,";
    const url = `mailto:rajrawat7108@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50 perspective">
      {/* WhatsApp Button with 3D Animation */}
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover-scale-3d animate-float-3d"
        aria-label="Contact via WhatsApp"
        style={{animationDelay: '1s'}}
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 animate-bounce-3d" />
      </button>

      {/* Email Button with 3D Animation */}
      <button
        onClick={handleEmail}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover-scale-3d animate-float-3d"
        aria-label="Contact via Email"
        style={{animationDelay: '2s'}}
      >
        <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 animate-pulse-3d" />
      </button>
    </div>
  );
};

export default FloatingButtons;