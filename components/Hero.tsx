"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroData } from "./data";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
  };
  return (
    <section className="flex overflow-hidden bg-white text-black">
      <div className="relative h-full w-full overflow-hidden">
        {/* <div className="flex flex-col items-center justify-center text-center"> */}
        {heroData.map(
          (slide, index) =>
            index === currentSlide && (
              <div
                key={index}
                className="grid grid-cols-1 overflow-hidden"
                // className="block"
              >
                <div
                  className="relative h-[360px] w-full"
                  // initial={{ opacity: 0, x: -100 }}
                  // animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0, display: "hidden", x: 100 }}
                  // transition={{ duration: 0.5 }}
                >
                  {/* <AnimatePresence initial={false}> */}

                  {/* <AnimatePresence initial={false}> */}
                  <AnimatePresence>
                    <motion.picture
                      key="slide"
                      className="relative block h-full w-full overflow-hidden"
                      initial={{ opacity: 0.2, x: "-100%" }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1 },
                      }}
                      exit={{
                        opacity: 0,
                        rotate: "360deg",
                        x: "100%",
                        scale: 0,
                        transition: { duration: 1 },
                      }}
                      // transition={{ duration: 0.5 }}
                    >
                      <source
                        media="(min-width: 768px)"
                        srcSet={slide.imgDesktop as string}
                      />
                      <Image
                        src={slide.imgMobile}
                        alt={slide.headline}
                        fill
                        className="object-cover"
                      />
                    </motion.picture>
                  </AnimatePresence>
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
                  <AnimatePresence>
                    <motion.div
                      key="para"
                      initial={{ y: "-100%", opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.6,
                        },
                      }}
                      exit={{
                        rotate: "180deg",
                        y: "100%",
                        opacity: 0,
                        transition: {
                          duration: 1,
                        },
                      }}
                      // transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold">{slide.headline}</h2>
                      <p className="mt-2">{slide.bodyCopy}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            ),
        )}
      </div>
    </section>
  );
}
