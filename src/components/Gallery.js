import React from 'react';

const Gallery = () => (
  <section className="py-8 text-center">
    <h2 className="text-2xl font-semibold mb-4">Galeria</h2>
    <div className="flex justify-center gap-4">
      <img src="/assets/okno1.jpg" alt="Okno 1" className="w-32 h-auto rounded-md" />
      <img src="/assets/okno2.jpg" alt="Okno 2" className="w-32 h-auto rounded-md" />
      <img src="/assets/okno3.jpg" alt="Okno 3" className="w-32 h-auto rounded-md" />
    </div>
  </section>
);

export default Gallery;