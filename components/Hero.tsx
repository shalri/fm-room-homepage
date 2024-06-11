"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hero as heroData } from "./data";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % hero.length);
  };

  return (
    <section className="h-screen overflow-hidden bg-white text-black">
      <div className="relative h-full">
        <AnimatePresence initial={false}>
          {hero.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={slide.imgDesktop}
                    />
                    <img
                      src={slide.imgMobile}
                      alt={slide.headline}
                      className="h-40 w-full object-cover"
                    />
                  </picture>
                  <motion.div
                    className="p-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-bold">{slide.headline}</h2>
                    <p className="mt-2">{slide.bodyCopy}</p>
                  </motion.div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
        <button
          onClick={prevSlide}
          className="rounded bg-gray-800 px-4 py-2 text-white"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="rounded bg-gray-800 px-4 py-2 text-white"
        >
          Next
        </button>
      </div>
    </section>
  );
}

// data.js
export const hero = [
  {
    imgDesktop: "../public/images/desktop-image-hero-1.jpg",
    imgMobile: "../public/images/mobile-image-hero-1.jpg",
    headline: "Discover innovative ways to decorate",
    bodyCopy:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    imgDesktop: "../public/images/desktop-image-hero-2.jpg",
    imgMobile: "../public/images/mobile-image-hero-2.jpg",
    headline: "We are available all across the globe",
    bodyCopy:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imgDesktop: "../public/images/desktop-image-hero-3.jpg",
    imgMobile: "../public/images/mobile-image-hero-3.jpg",
    headline: "Manufactured with the best materials",
    bodyCopy:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
