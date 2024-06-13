"use client";

import { cn, debounce } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "./data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            exit={{ y: -100 }}
            className="fixed z-20 h-[100px] w-full bg-rh-white sm:hidden"
          />
        )}
      </AnimatePresence>
      <header className="absolute z-30 mb-6 flex w-full items-center justify-center px-6 pt-[45px]">
        {/* <nav className="absolute flex w-full items-center justify-between px-6"> */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.div
              key="bg"
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              className={cn(
                "fixed left-4 top-[29px] h-[42px] w-[42px] bg-rh-very-dark-gray",
                isActive ? "bg-red-500/0 transition-opacity duration-500" : "",
              )}
            />
          )}
        </AnimatePresence>
        <nav className="fixed flex w-full items-center justify-between px-6">
          <button
            className={cn(
              "hamburger hamburger--spring js-hamburger sm:hidden",
              isActive ? "is-active" : "",
            )}
            onClick={() => setIsActive(!isActive)}
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </button>
          {windowWidth > 900 ? (
            <motion.ul className="z-30 gap-x-8 sm:ml-44 sm:flex sm:pt-1">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <a
                    href={link.url}
                    className="underline-hover z-10 font-bold sm:pb-2 sm:text-rh-white"
                  >
                    {link.page}
                  </a>
                </li>
              ))}
            </motion.ul>
          ) : (
            isActive && (
              <motion.ul
                className="z-30 flex items-end gap-x-8"
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                exit={{ y: -100 }}
              >
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <a
                      href={link.url}
                      className="underline-hover z-10 pb-2 font-bold text-rh-black"
                    >
                      {link.page}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )
          )}
        </nav>
        <h1 className="flex w-full items-center justify-center text-lg font-bold sm:justify-start sm:px-10">
          <Link href="/">
            <div className="relative h-[16px] w-[66px]">
              <Image
                src="./images/logo.svg"
                fill
                alt="Room Logo"
                className="object-contain"
              />
            </div>
          </Link>
        </h1>
      </header>
    </>
  );
}
