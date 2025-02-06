//Slider and homepage info
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// List of images used in the slider (main banner images)
const sliderImages = [
  { id: 1, src: "/Images/hero.png", alt: "Slider Image 1" },
  { id: 2, src: "/Images/hero-2.webp", alt: "Slider Image 2" },
  { id: 3, src: "/Images/hero-3.avif", alt: "Slider Image 3" },
];

// Featured products section - these are the highlighted makeup products
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
    image: "/Images/product7.jpeg",
  },
  {
    id: 3,
    name: "Cream Contour Palette",
    price: "$40.00",
    image: "/Images/product11.jpeg",
  },
];

// Customer reviews - These show feedback from happy customers
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
  {
    id: 4,
    name: "Adam Z.",
    review: "I've tried all of the products and I haven’t gone back since!",
  },
];

function Home() {
  // State to manage the slider's reloading mechanism
  const [sliderKey, setSliderKey] = useState(0);
  // State to track if images have loaded
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Effect that ensures images are loaded before showing the slider
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
        setSliderKey((prevKey) => prevKey + 1); // Refresh slider
      } catch (error) {
        console.error("Error loading images", error);
      }
    };

    loadImages();
  }, []);

  // Slider settings for smooth transitions and autoplay
  const settings = {
    dots: true, // Show small indicator dots
    infinite: true, // Make the slider loop endlessly
    speed: 500, // Slide transition speed (milliseconds)
    slidesToShow: 1, // Only show one image at a time
    slidesToScroll: 1, // Move one slide at a time
    arrows: false, // Hide navigation arrows
    autoplay: true, // Automatically switch slides
    autoplaySpeed: 3000, // 3 seconds per slide
  };

  return (
    <div className="home">
      {/* Hero Slider Section */}
      {imagesLoaded ? (
        <Slider key={sliderKey} {...settings}>
          {sliderImages.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} className="hero-image" />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="slider-placeholder">Loading slider...</div> // Shows loading text if images aren't ready
      )}

      {/* About the brand */}
      <section className="about-us">
        <h2>OUR BRAND</h2>
        <p>
          At AESTHETICS, we believe that makeup should enhance, not mask. Our
          products are crafted with love, using vegan-friendly, cruelty-free
          ingredients that are gentle on your skin and the planet.
        </p>
        <p>
          Whether you're going for a natural glow or bold glam, we've got the
          perfect product for you. Join us on our mission to redefine beauty!
        </p>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>FEATURED PRODUCTS</h2>
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

      {/* Button to go to the products page */}
      <button
        className="shop-now"
        onClick={() => (window.location.href = "#/products")}
      >
        Shop Now
      </button>

      {/* Small tagline beneath the button */}
      <p className="tagline">
        Discover beauty with high-quality, cruelty-free makeup products.
      </p>

      {/* Customer Reviews Section */}
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
    </div>
  );
}

export default Home; // Export the Home component so it can be used elsewhere
