import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// Slider images and content
const sliderImages = [
  { id: 1, src: "/Images/hero.png", alt: "Slider Image 1" },
  { id: 2, src: "/Images/product1.jpeg", alt: "Slider Image 2" },
  { id: 3, src: "/Images/product2.jpeg", alt: "Slider Image 3" },
];

function Home() {
  const settings = {
    dots: true, // Enable dots for navigation if desired
    infinite: true, // Enable infinite looping
    speed: 500, // Speed of transitions in milliseconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Disable arrows
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the duration (in milliseconds) between slides
  };

  return (
    <div className="home">
      <h1>Welcome to Our Makeup Store</h1>
      <p>Discover top-quality makeup products for every occasion!</p>

      {/* Slider */}
      <Slider {...settings}>
        {sliderImages.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>

      {/* Shop Now Button */}
      <button
        className="shop-now"
        onClick={() => (window.location.href = "#/products")}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Home;
