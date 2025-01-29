import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  { id: 1, src: "/Images/hero.png", alt: "Slider Image 1" },
  { id: 2, src: "/Images/hero-2.webp", alt: "Slider Image 2" },
  { id: 3, src: "/Images/hero-3.avif", alt: "Slider Image 3" },
];

function Home() {
  const [sliderLoaded, setSliderLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSliderLoaded(true);
    }, 100); // Small delay to ensure rendering
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home">
      <h1>Welcome to AESTHETICS</h1>
      <p>
        Explore our collection of premium, cruelty-free makeup products designed
        to inspire confidence and beauty in every individual.
      </p>

      {/* Ensure Slider Loads Immediately */}
      {sliderLoaded ? (
        <Slider {...settings}>
          {sliderImages.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", height: "auto", borderRadius: "15px" }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="slider-placeholder">Loading slider...</div>
      )}

      <button
        className="shop-now"
        onClick={() => (window.location.href = "#/products")}
      >
        Shop Now
      </button>
      <p className="highlight-features">
        100% Cruelty-Free | Vegan Formulas | High-Quality Ingredients
      </p>
    </div>
  );
}

export default Home;
