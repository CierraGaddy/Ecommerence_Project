import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  { id: 1, src: "/Images/hero.png", alt: "Slider Image 1" },
  { id: 2, src: "/Images/hero-2.webp", alt: "Slider Image 2" },
  { id: 3, src: "/Images/hero-3.avif", alt: "Slider Image 3" },
];

const featuredProducts = [
  {
    id: 1,
    name: "Radiant Glow Foundation",
    price: "$30.00",
    image: "/Images/product1.jpeg",
  },
  {
    id: 2,
    name: "Hydrating Concealer",
    price: "$20.00",
    image: "/Images/product10.jpeg",
  },
  {
    id: 3,
    name: "Cream Contour Palette",
    price: "$40.00",
    image: "/Images/product11.jpeg",
  },
];

const customerReviews = [
  {
    id: 1,
    name: "Sophia M.",
    review: "Absolutely love the foundation! Lightweight yet full coverage!",
  },
  {
    id: 2,
    name: "Jessica R.",
    review:
      "The contour palette blends so smoothly! Definitely a must-have in my kit!",
  },
  {
    id: 3,
    name: "Emily K.",
    review: "Hydrating concealer is a game-changer! No more creases!",
  },
];

function Home() {
  const [sliderKey, setSliderKey] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const promises = sliderImages.map((img) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = img.src;
          image.onload = resolve;
          image.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
        setSliderKey((prevKey) => prevKey + 1);
      } catch (error) {
        console.error("Error loading images", error);
      }
    };

    loadImages();
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
      <p className="tagline">
        Discover beauty with high-quality, cruelty-free makeup products.
      </p>

      {/* Hero Slider */}
      {imagesLoaded ? (
        <Slider key={sliderKey} {...settings}>
          {sliderImages.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} className="hero-image" />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="slider-placeholder">Loading slider...</div>
      )}

      {/* Shop Now Button */}
      <button
        className="shop-now"
        onClick={() => (window.location.href = "#/products")}
      >
        Shop Now
      </button>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button
                className="add-to-cart"
                onClick={() => alert(`Added ${product.name} to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="customer-reviews">
        <h2>What Our Customers Say</h2>
        <div className="reviews-grid">
          {customerReviews.map((review) => (
            <div key={review.id} className="review-card">
              <p>"{review.review}"</p>
              <span>- {review.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <h2>About AESTHETICS</h2>
        <p>
          At AESTHETICS, we believe that makeup should enhance, not mask. Our
          products are crafted with love, using **vegan-friendly**,
          **cruelty-free** ingredients that are gentle on your skin and the
          planet.
        </p>
        <p>
          Whether you're going for a **natural glow** or **bold glam**, we've
          got the perfect product for you. Join us on our mission to redefine
          beauty!
        </p>
      </section>
    </div>
  );
}

export default Home;
