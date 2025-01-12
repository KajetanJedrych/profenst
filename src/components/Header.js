import React from 'react';
import { useState } from "react";
import {Copy, Check } from 'lucide-react';

const Header = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("+123456789").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-6 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="image.png" 
            alt="Profenst Logo" 
            className="h-40 w-40"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <button 
            onClick={handleCopy} 
            className="group flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-all duration-200"
          >
            <span className="text-xl font-medium">+123 456 789</span>
            {copied ? (
              <Check className="w-5 h-5 text-green-300" />
            ) : (
              <Copy className="w-5 h-5 opacity-75 group-hover:opacity-100" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;