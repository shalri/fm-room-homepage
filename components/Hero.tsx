"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroData } from "./data";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
  const colors = [
    "bg-red-700",
    "bg-blue-700",
    "bg-yellow-500",
    "bg-green-700",
    "bg-purple-700",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [bgColor, setBgColor] = useState(colors[0]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
    setTimeout(() => {
      setBgColor(getRandomColor());
    }, 1200);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
    setTimeout(() => {
      setBgColor(getRandomColor());
    }, 1200);
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
    exit: () => ({
      opacity: 0,
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
      x: "-10%",
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <section className="relative h-full w-full overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        {heroData.map((slide, index) =>
          index === currentSlide ? (
            <div key={index} className="sm:flex">
              {/* TODO: Randomize bgcolor */}
              <div
                className={cn(
                  "transition-color relative h-[360px] w-full duration-300 sm:min-h-[670px] sm:w-[60%]",
                  `${bgColor}`,
                )}
              >
                <div className="h-full w-full overflow-hidden">
                  <motion.picture
                    key={slide.headline}
                    className="relative z-10 block h-full w-full overflow-hidden"
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
                </div>
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
                    className={cn(
                      "transition-color mb-3  mt-11 flex cursor-pointer items-baseline font-semibold uppercase tracking-[.8rem] text-rh-very-dark-gray hover:text-rh-dark-gray",
                    )}
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
                    whileHover={{
                      x: "20px",
                      transition: {
                        type: "spring",
                        duration: 0.1,
                      },
                    }}
                  >
                    Shop Now{" "}
                    <motion.div className="relative ml-6 h-[12px] w-[40px]">
                      <Image
                        src="./images/icon-arrow.svg"
                        fill
                        alt="arrow icon"
                      />
                    </motion.div>
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
