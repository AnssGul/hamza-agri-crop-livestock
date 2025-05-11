import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "src/assets/images/farmhamza.jpg",

      alt: "Farm field at sunset",
      category: "farm"
    },
    {
      src: "src/assets/images/cattlefarm.jpg",
      alt: "Healthy young calf raised on a clean farm, known for tender and premium quality meat.",
      category: "livestock"
    },
    {
      src: "src/assets/images/horse.jpg",
      alt: "Beautiful horse in the field",
      category: "livestock"
    },
    {
      src: "https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cow grazing in the meadow",
      category: "livestock"
    },
    {
      src: "https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Wheat crop ready for harvest",
      category: "crops"
    },
    {
      src: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cotton field",
      category: "crops"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 font-serif mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-700">
            Take a visual journey through our farm life, livestock, and agricultural activities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer aspect-square transform transition-transform hover:scale-[1.02]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white w-full bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-sm uppercase tracking-wider opacity-80">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-colors"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-h-[80vh] max-w-[90vw] object-contain"
          />

          <button
            className="absolute right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-colors"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-sm">{galleryImages[selectedImage].alt}</p>
            <p className="text-xs opacity-70">{selectedImage + 1} of {galleryImages.length}</p>
          </div>
        </div>
      )}
    </section>
  );
};