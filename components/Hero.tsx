"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroData } from "./data";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
  };

  const slideVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      // rotate: "180deg",
      x: direction > 0 ? "100%" : "-100%",
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      // rotate: "180deg",
      // opacity: 0,
      x: direction > 0 ? "-100%" : "100%",
      scale: 0.8,
      transition: { duration: 0.2 },
    }),
  };

  const textVariants = {
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      // rotate: "180deg",
      x: "-10%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="flex overflow-hidden bg-white text-black">
      <div className="relative h-full w-full overflow-hidden">
        <div className="grid grid-cols-1 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {heroData.map((slide, index) =>
              index === currentSlide ? (
                <div key={index}>
                  {/* TODO: Randomize bgcolor */}
                  <div className="relative h-[360px] w-full  bg-red-700">
                    <motion.picture
                      key={slide.headline}
                      className="relative block h-full w-full overflow-hidden"
                      custom={direction}
                      variants={slideVariants}
                      initial="initial"
                      animate="visible"
                      exit="exit"
                    >
                      <source
                        media="(min-width: 768px)"
                        srcSet={slide.imgDesktop as string}
                      />
                      <Image
                        key={slide.imgMobile}
                        src={slide.imgMobile}
                        alt={slide.headline}
                        fill
                        className="object-cover"
                      />
                    </motion.picture>
                    <div className="absolute bottom-0 right-0 flex justify-center space-x-4">
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
                  </div>
                  <div className="overflow-hidden p-8">
                    <div>
                      <motion.h2
                        key={slide.headline}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-2xl font-bold"
                      >
                        {slide.headline}
                      </motion.h2>

                      <motion.p
                        key={index}
                        initial={{ y: "200%", opacity: 0 }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.5 },
                        }}
                        exit={{
                          x: "10%",
                          opacity: 0,
                          transition: { duration: 0.5 },
                        }}
                        // transition={{ duration: "0.4" }}
                        className="mt-2"
                      >
                        {slide.bodyCopy}
                      </motion.p>
                    </div>
                  </div>
                </div>
              ) : null,
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
