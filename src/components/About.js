import React from 'react';

const About = () => (
  <section className="py-16 bg-gradient-to-b from-green-50 to-white">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-green-600 rounded-xl transform rotate-3 opacity-20"></div>
        <img 
          src="/assets/main photo.jpg"
          alt="Zdjęcie firmy" 
          className="relative w-full rounded-xl shadow-xl"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-green-800">O nas</h2>
        <div className="w-20 h-1 bg-green-600 rounded-full"></div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Jesteśmy firmą z wieloletnim doświadczeniem w branży stolarki okiennej. 
          Dbamy o jakość i zadowolenie klienta. Nasza pasja do perfekcji i innowacji 
          pozwala nam dostarczać rozwiązania, które przekraczają oczekiwania.
        </p>
      </div>
    </div>
  </section>
);

export default About;