import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  { id: 1, src: "/Images/hero.png", alt: "Slider Image 1" },
  { id: 2, src: "/Images/hero-2.webp", alt: "Slider Image 2" },
  { id: 3, src: "/Images/hero-3.avif", alt: "Slider Image 3" },
];

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove arrows
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Set slide duration
  };

  return (
    <div className="home">
      {/* Slider */}
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
      <p>
        Explore our collection of premium, cruelty-free makeup products designed
        to inspire confidence and beauty in every individual.
      </p>
      {/* Shop Now Button */}
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
