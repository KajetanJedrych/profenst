import React from 'react';
import {ExternalLink } from 'lucide-react';

const Footer = () => (
    <footer className="bg-green-700 text-white py-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center items-center space-x-2 text-sm md:text-base">
        <span>Created by</span>
        <a 
          href="https://kajetanjedrych.pl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-medium hover:text-green-300 transition-colors duration-200 flex items-center"
        >
          Kajetan Jędrych
          <ExternalLink className="w-4 h-4 ml-1 inline-block" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;