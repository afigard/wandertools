"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaTriangleExclamation,
  FaBullseye,
  FaPassport,
  FaMoneyCheckDollar,
  FaSuitcaseRolling,
  FaGlobe,
  FaMoon,
  FaSun,
} from "react-icons/fa6";
import FeedbackForm from "./components/FeedbackForm";

const apps = [
  {
    name: "WanderAlert",
    description: "Check real-time travel advisories.",
    icon: <FaTriangleExclamation className="text-2xl text-orange-500" />,
    href: "https://wanderalert.vercel.app/",
    disabled: false,
  },
  {
    name: "WanderBudget",
    description: "Preview daily travel costs by country.",
    icon: <FaMoneyCheckDollar className="text-2xl text-yellow-500" />,
    href: "https://wanderbudget.vercel.app/",
    disabled: false,
  },
  {
    name: "WanderGoal",
    description: "Track and plan your travel goals.",
    icon: <FaBullseye className="text-2xl text-[#4CAF50]" />,
    href: "https://wandergoal.fr/",
    disabled: false,
  },
  {
    name: "WanderSpin",
    description: "Spin the globe to pick your next trip.",
    icon: <FaGlobe className="text-2xl text-rose-500" />,
    href: "https://wanderspin.vercel.app/",
    disabled: false,
    badge: "new",
  },
  {
    name: "WanderVisa",
    description: "Explore visa rules by country.",
    icon: <FaPassport className="text-2xl text-indigo-500" />,
    href: "https://wandervisa-nine.vercel.app/",
    disabled: false,
  },
  {
    name: "WanderPack",
    description: "Organize your travel essentials.",
    icon: <FaSuitcaseRolling className="text-2xl text-neutral-500" />,
    href: "",
    disabled: true,
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
    <>
      <header className="sticky top-0 z-50 bg-[var(--background)]/50 backdrop-blur-sm flex justify-between items-center w-full max-w-7xl mx-auto px-6 py-6 sm:px-4 sm:py-10">
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
            <FaSun size={32} className="h-6 w-6 sm:h-8 sm:w-8" />
          ) : (
            <FaMoon size={32} className="h-6 w-6 sm:h-8 sm:w-8" />
          )}
        </button>
      </header>

      <main className="min-h-dvh flex flex-col px-4 py-6 sm:py-8">
        <section
          id="hero"
          className="flex flex-col items-center justify-center flex-grow text-center min-h-screen"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-4xl px-4"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-br from-indigo-500 to-orange-500 text-transparent bg-clip-text">
              WanderTools
            </h1>
            <p
              className={`text-base sm:text-lg mb-10 sm:mb-12 ${
                dark ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              A suite of free tools to help you plan and manage your trips.
            </p>
            <Link
              href="#tools"
              className={`z-10 inline-block mt-4 sm:mt-6 mb-32 px-6 py-3 rounded-2xl text-sm sm:text-base shadow-md border ${
                dark
                  ? "border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-200"
                  : "border-neutral-200 bg-neutral-100 hover:bg-neutral-200 text-neutral-800"
              }`}
            >
              Explore Tools
            </Link>
          </motion.div>
        </section>

        <section
          id="tools"
          className="min-h-screen flex flex-col justify-center text-center px-4 py-16 sm:py-24 max-w-7xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="grid gap-6 sm:grid-cols-3">
              {apps.map(
                ({ name, description, icon, href, disabled, badge }) => (
                  <motion.div
                    key={name}
                    whileHover={!disabled ? { scale: 1.04 } : {}}
                    className="transition-transform relative"
                  >
                    <Link
                      href={href}
                      target="_blank"
                      className={`card block bg-[var(--card-bg)] border p-6 rounded-xl text-center shadow-md backdrop-blur-sm transition-all h-full ${
                        dark ? "border-neutral-800" : "border-neutral-200"
                      } ${disabled ? "opacity-50 pointer-events-none" : ""}`}
                    >
                      {(disabled || badge === "new") && (
                        <div
                          className={`absolute top-2 right-2 z-10 text-xs px-2 py-0.5 rounded-xl font-medium shadow-sm tracking-wide ${
                            disabled
                              ? dark
                                ? "bg-neutral-600 text-black"
                                : "bg-neutral-400 text-white"
                              : dark
                              ? "bg-neutral-300 text-black"
                              : "bg-neutral-700 text-white"
                          }`}
                        >
                          {disabled
                            ? "Coming Soon"
                            : badge === "new"
                            ? "New"
                            : null}
                        </div>
                      )}
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
                )
              )}
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="flex justify-between items-center text-xs text-neutral-500 px-8 py-6 sm:px-4 sm:py-8 max-w-7xl mx-auto w-full">
        <span>© {new Date().getFullYear()} WanderTools.</span>
        <FeedbackForm appName="WanderTools" dark={dark} />
      </footer>
    </>
  );
}
