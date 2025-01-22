import { useState, useEffect } from 'react';
import image1 from '../../assets/images/hero/Concrete-Transformer-Foundation-and-Oil-Containment.jpg';
import image2 from '../../assets/images/hero/Pondasi Bore Pile Petani Bangko.jpg';
import image3 from '../../assets/images/hero/Pondasi Bore Pile Petani Menggala.jpg';
import image4 from '../../assets/images/hero/rest-area-tol-pekanbaru-dumai-HKI.jpg';

type ImageType = {
  src: string;
  alt: string;
};

function Hero() {
  const images: ImageType[] = [
    { src: image1, alt: 'Slide 1' },
    { src: image2, alt: 'Slide 2' },
    { src: image3, alt: 'Slide 3' },
    { src: image4, alt: 'Slide 4' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // const handleThumbnailClick = (index: number) => {
  //   setCurrentImageIndex(index);
  // };

  return (
    <div className="hero">
      <div className="hero-image-slider">
        <img 
          src={images[currentImageIndex].src} 
          alt={images[currentImageIndex].alt} 
        />
        <button className="prev-button" onClick={handlePrev}>‹</button>
        <button className="next-button" onClick={handleNext}>›</button>
      </div>
      {/* <div className="hero-thumbnails">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleThumbnailClick(index)}
            className={index === currentImageIndex ? 'active-thumbnail' : ''}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Hero;
