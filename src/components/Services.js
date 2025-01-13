import React from 'react';
import {Check } from 'lucide-react';

const Services = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Nasze usługi</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Okresowy przegląd techniczny okien i drzwi",
          "Diagnostyka problemów z izolacją termiczną i akustyczną",
          "Czyszczenie i konserwacja okien i drzwi",
          "Regulacja okien i drzwi",
          "Modernizacja okien i drzwi",
          "Montaż dodatkowych zabezpieczeń",
          "Usuwanie parowania szyb",
          "Doradztwo w wyborze okien i drzwi",
          "Przygotowanie okien i drzwi do sezonu",
          "Montowanie nawiewników",
          "Montaż moskitier i rolet",
          "Serwis okien i drzwi zabytkowych"
        ].map((service, index) => (
          <div 
            key={index}
            className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-700 font-medium">{service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;