import React from "react";
import Slider from "react-slick";

// Slider images and content
const sliderImages = [
  { id: 1, src: "/hero.png", alt: "Slider Image 1" }, // Public folder paths
  { id: 2, src: "/product1.jpeg", alt: "Slider Image 2" },
  { id: 3, src: "/product2.jpeg", alt: "Slider Image 3" },
];

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
