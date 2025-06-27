"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaPassport,
  FaExclamationTriangle,
  FaBullseye,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const apps = [
  {
    name: "WanderAlert",
    description: "Check real-time travel advisories.",
    icon: <FaExclamationTriangle className="text-2xl text-amber-500" />,
    href: "https://wanderalert.vercel.app/",
  },
  {
    name: "WanderGoal",
    description: "Track and plan your travel goals.",
    icon: <FaBullseye className="text-2xl text-[#4CAF50]" />,
    href: "https://www.wandergoal.fr/",
  },
  {
    name: "WanderVisa",
    description: "Explore visa rules by country.",
    icon: <FaPassport className="text-2xl text-indigo-500" />,
    href: "https://wandervisa-nine.vercel.app/",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      dark ? "#0a0a0a" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--foreground",
      dark ? "#ededed" : "#171717"
    );
    document.documentElement.style.setProperty(
      "--card-bg",
      dark ? "#1b1b1b" : "#f9f9f9"
    );
  }, [dark]);

  return (
    <main className="min-h-dvh flex flex-col justify-between px-4 py-6 sm:py-8">
      <header className="flex justify-between items-center w-full max-w-7xl mx-auto px-2 sm:px-4 sm:py-2">
        <Image
          src={dark ? "/logo-dark.png" : "/logo-light.png"}
          alt="WanderTools Logo"
          width={32}
          height={32}
          className="h-6 w-6 sm:h-8 sm:w-8"
        />
        <button
          onClick={() => setDark(!dark)}
          className="text-foreground hover:opacity-80 transition cursor-pointer"
        >
          {dark ? (
            <FaSun size={32} className="h-5 w-5 sm:h-7 sm:w-7" />
          ) : (
            <FaMoon size={32} className="h-5 w-5 sm:h-7 sm:w-7" />
          )}
        </button>
      </header>

      <div className="flex-grow flex items-center justify-center mt-10 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center w-full max-w-4xl"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-br from-indigo-500 to-amber-500 text-transparent bg-clip-text">
            WanderTools
          </h1>
          <p
            className={`text-base sm:text-lg mb-10 sm:mb-12 ${
              dark ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            A suite of free, minimal travel tools for digital nomads and
            explorers.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {apps.map(({ name, description, icon, href }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.04 }}
                className="transition-transform"
              >
                <Link
                  href={href}
                  target="_blank"
                  className={`card block border p-6 rounded-xl text-center shadow-md backdrop-blur-sm transition-all h-full ${
                    dark
                      ? "border-neutral-800 bg-[var(--card-bg)]"
                      : "border-neutral-200 bg-[var(--card-bg)]"
                  }`}
                >
                  <div className="flex justify-center mb-4">{icon}</div>
                  <h2 className="text-xl font-semibold mb-1">{name}</h2>
                  <p
                    className={`text-sm ${
                      dark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    {description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <p
            className={`text-sm sm:text-base text-muted mt-10 sm:mt-14 ${
              dark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Trusted by travelers in 40+ countries.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <footer className="flex justify-between items-center text-xs text-neutral-500 px-4 max-w-7xl mx-auto w-full mt-10 sm:mt-0">
          <span>© {new Date().getFullYear()} WanderTools.</span>
          <a
            href="https://instagram.com/ad.fgrd"
            target="_blank"
            className="underline hover:opacity-80"
          >
            Contact
          </a>
        </footer>
      </motion.div>
    </main>
  );
}
