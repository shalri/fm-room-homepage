"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroData } from "./data";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

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
      x: direction > 0 ? "-100%" : "100%",
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      // rotate: "180deg",
      opacity: 0,
      // x: direction > 0 ? "100%" : "-100%",
      // scale: 0.8,
      transition: { duration: 0.5 },
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
    <section className="relative h-full w-full overflow-hidden">
      {/* // <div className="flex sm:flex-nowrap overflow-hidden"> */}
      <AnimatePresence mode="wait" initial={false}>
        {heroData.map((slide, index) =>
          index === currentSlide ? (
            <div key={index} className="sm:flex">
              {/* TODO: Randomize bgcolor */}
              <div className="relative h-[360px] w-full  bg-red-700  sm:min-h-[670px] sm:w-[60%]">
                <motion.picture
                  key={slide.headline}
                  className="relative block h-full w-full overflow-hidden"
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  <source
                    media="(min-width: 900px)"
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
                <div className="absolute bottom-0 right-0 z-20 flex justify-center sm:-right-[160px]">
                  <button
                    onClick={prevSlide}
                    className="prev-bg h-[55px] w-[55px] bg-contain p-4 duration-200 hover:bg-rh-very-dark-gray sm:h-[80px] sm:w-[80px]"
                  ></button>
                  <button
                    onClick={nextSlide}
                    className="next-bg transition-color h-[55px] w-[55px] p-4  text-white duration-200 hover:bg-rh-very-dark-gray sm:h-[80px] sm:w-[80px]"
                  ></button>
                </div>
              </div>
              <motion.div
                layout
                className="overflow-hidden bg-white px-8 py-[58px] sm:z-10 sm:mx-auto sm:flex sm:min-h-[460px] sm:w-[40%] sm:max-w-[500px] sm:shrink-0 sm:items-center"
              >
                <div>
                  <motion.h2
                    key={slide.headline}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-[2.5rem] font-semibold leading-[1]"
                    layout
                  >
                    {slide.headline}
                  </motion.h2>
                  <motion.p
                    layout
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
                    className="mt-4 text-rh-dark-gray"
                  >
                    {slide.bodyCopy}
                  </motion.p>
                  <motion.a
                    className="transition-color mb-3  mt-11 flex cursor-pointer items-baseline font-semibold uppercase tracking-[.8rem] text-rh-very-dark-gray duration-300 hover:text-rh-dark-gray"
                    href="#"
                    initial={{
                      x: "-200%",
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    exit={{ x: "30%" }}
                  >
                    Shop Now{" "}
                    <div className="relative ml-6 h-[12px] w-[40px]">
                      <Image
                        src="./images/icon-arrow.svg"
                        fill
                        alt="arrow icon"
                      />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          ) : null,
        )}
      </AnimatePresence>
      {/* // </div> */}
    </section>
  );
}
