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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
