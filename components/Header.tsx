"use client";

import { cn, debounce } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "./data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);
    const handleScroll = debounce(() => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }, 100);

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsNavActive(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isNavActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            exit={{ opacity: 0 }}
            className="fixed z-30 h-full w-full bg-rh-black/50 backdrop-blur-sm sm:hidden"
          />
        )}
      </AnimatePresence>
      <header
        ref={navRef}
        className={cn(
          "fixed z-[15] mb-6 flex w-full items-center justify-start px-6 pt-[45px] sm:absolute",
          isNavActive ? "z-50 bg-rh-white" : "",
        )}
      >
        <nav
          className={cn(
            "flex w-[45%] items-center justify-between sm:w-[50%] sm:px-6",
            isNavActive ? "w-full" : "",
          )}
        >
          <button
            className={cn(
              "hamburger hamburger--spring js-hamburger bg-rh-black/0 p-4 transition-opacity duration-300 sm:hidden",
              isNavActive ? "is-active bg-rh-black/0" : "",
              showScrollButton && !isNavActive
                ? "-mt-10 bg-rh-black/80 transition-opacity duration-300"
                : "",
            )}
            onClick={() => setIsNavActive(!isNavActive)}
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="hamburger-box ">
              <div className="hamburger-inner"></div>
            </div>
          </button>
          {windowWidth > 900 ? (
            <motion.ul className="gap-x-8 sm:flex sm:pt-0">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <a
                    href={link.url}
                    className="underline-hover font-bold sm:pb-2 sm:text-rh-white"
                  >
                    {link.page}
                  </a>
                </li>
              ))}
            </motion.ul>
          ) : (
            isNavActive && (
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
                      onClick={() => setIsNavActive(false)}
                    >
                      {link.page}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )
          )}
        </nav>
        <h1
          className={cn(
            "flex items-center justify-evenly text-lg font-bold opacity-100 transition-opacity duration-500 sm:order-first sm:justify-start sm:px-10",
            isNavActive || showScrollButton ? "opacity-0" : "",
          )}
        >
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
