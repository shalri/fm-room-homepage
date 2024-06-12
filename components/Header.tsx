"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./data";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
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
            className="absolute z-20 h-[100px] w-full bg-rh-white"
          />
        )}
      </AnimatePresence>
      <header className="absolute z-30 mb-6 flex w-full items-center justify-center px-6 pt-[45px]">
        <nav className="absolute flex w-full items-center justify-between px-6">
          <button
            className={cn(
              "hamburger hamburger--spring js-hamburger",
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
          </button>{" "}
          {isActive && (
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
                  <a href={link.url} className="z-10 font-bold text-rh-black">
                    {link.page}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </nav>
        <h1 className="flex w-full items-center justify-center text-lg font-bold">
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
