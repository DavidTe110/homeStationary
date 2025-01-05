import React, { useState } from "react";

function Images({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Volver al principio cuando se alcanza el final
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1); // Volver al final cuando se alcanza el principio
    }
  };

  return (
    <div className="flex flex-col items-center my-4">
      {images.length === 1 ? (
        // Si solo hay una imagen, se muestra como una imagen estática
        <img src={images[0]} alt="Galería" className="w-full max-w-md" />
      ) : (
        // Si hay más de una imagen, se muestra el slider manual
        <div className="relative w-full max-w-md">
          <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            className="w-full h-auto rounded-lg"
          />
          {/* Botones de navegación */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            {"<"}
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Images;
