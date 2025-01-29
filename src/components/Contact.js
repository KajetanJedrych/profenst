import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => (
  <section className="py-16 bg-green-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Kontakt</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
            <Phone className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-center text-lg font-medium">+48 601 615 371</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-center text-lg font-medium">kontakt@stolarka.pl</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
            <MapPin className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-center text-lg font-medium">ul. Przykładowa 12<br />00-000 Miasto</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;