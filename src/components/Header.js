import React from 'react';
import { useState } from "react";

const Header = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("+123456789").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <header className="bg-green-600 text-white py-4 px-6 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-center md:justify-start">
        <img 
          src="/path-to-logo.png" 
          alt="Firma Stolarka Okienna Logo" 
          className="h-12 w-12 mr-4"
        />
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">Profenst</h1>
        </div>
      </div>
      <div className="mt-4 md:mt-0 text-center md:text-right">
        <button 
          onClick={handleCopy} 
          className="text-white text-lg md:text-xl font-semibold underline hover:no-underline focus:outline-none"
        >
          +123 456 789
        </button>
        {copied && <p className="text-sm text-green-300 mt-2">Number copied to clipboard!</p>}
      </div>
    </header>
  );
};

export default Header;