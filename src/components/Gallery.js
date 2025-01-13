import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = [
    { src: "Drzwi.jpg", alt: "Okno 1" },
    { src: "home.jpg", alt: "Okno 2" },
    { src: "Okno.jpg", alt: "Okno 3" },
    { src: "1.jpg", alt: "Okno 4" },
    { src: "2.jpg", alt: "Okno 5" },
    { src: "3.jpg", alt: "Okno 6" },
    { src: "4.jpg", alt: "Okno 7" },
  ];

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canScrollRight) {
      scroll('right');
    }
    if (isRightSwipe && canScrollLeft) {
      scroll('left');
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Define touch event props
  const touchProps = {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  };

  return (
    <section className="py-8 md:py-12 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        Galeria
      </h2>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
          <button
            className="absolute top-4 right-4 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-200"
            onClick={() => setSelectedImage(null)}
          >
            Zamknij
          </button>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-green-600 rounded-full items-center justify-center cursor-pointer shadow-lg hover:bg-green-700 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 px-0 md:px-12 snap-x snap-mandatory no-scrollbar"
          {...touchProps}
          style={{
            scrollbarWidth: 'none',  // Firefox
            msOverflowStyle: 'none',  // IE and Edge
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style jsx global>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            .no-scrollbar {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}</style>
          
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative snap-center"
              style={{
                width: 'clamp(280px, calc(100vw - 3rem), 320px)',
                height: 'clamp(280px, calc(100vw - 3rem), 320px)'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-xl cursor-pointer shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-green-600 rounded-full items-center justify-center cursor-pointer shadow-lg hover:bg-green-700 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Gallery;