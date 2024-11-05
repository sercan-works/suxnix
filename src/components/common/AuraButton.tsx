import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const ChatBot = dynamic(() => import('./ChatBot'), { ssr: false });

interface AuraButtonProps {
  onClick: () => void;
}

const AuraButton: React.FC<AuraButtonProps> = ({ onClick }) => {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(!showChat);
    onClick?.();
  };

  return (
    <>
      <button 
        className="fixed bottom-32 lg:bottom-40 lg:right-2 lg:pr-32 lg:py-2 right-2 flex items-center gap-2 text-white hover:bg-opacity-85 bg-indigo-500 bg-opacity-50 sm:py-1 sm:px-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-50 md:px-3 md:py-3 group"
        onClick={handleClick}
        aria-label="Aura"
      >
        {/* <FaRobot className="text-2xl" /> */}
        <Image 
          src="/assets/img/aura.gif" 
          alt="Aura Icon" 
          width={50} 
          height={50}
          unoptimized // GIF'ler için önemli
          priority // Hızlı yükleme için
          className="rounded-full"
        />
           <h1 className="absolute hidden lg:block text-white text-2xl right-16 font-bold">Aura</h1>
      </button>
   
      {showChat && <ChatBot />}
    </>
  );
};

export default AuraButton;