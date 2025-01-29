import React from "react";
import Slider from "react-slick";

// Slider images and content
const sliderImages = [
  { id: 1, src: "hero.png", alt: "Slider Image 1" },
  { id: 2, src: "product1.jpeg", alt: "Slider Image 2" },
  { id: 3, src: "product2.jpeg", alt: "Slider Image 3" },
];

function Home() {
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show 1 image per slide
    slidesToScroll: 1, // Scroll 1 image at a time
  };

  return (
    <div>
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
    </div>
  );
}

export default Home;
