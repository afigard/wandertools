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
  FaEarthEurope,
  FaMoon,
  FaSun,
} from "react-icons/fa6";

const apps = [
  {
    name: "WanderAlert",
    description: "Check real-time travel advisories.",
    icon: <FaTriangleExclamation className="text-2xl text-amber-500" />,
    href: "https://wanderalert.vercel.app/",
    disabled: false,
    badge: "new",
  },
  {
    name: "WanderGoal",
    description: "Track and plan your travel goals.",
    icon: <FaBullseye className="text-2xl text-[#4CAF50]" />,
    href: "https://www.wandergoal.fr/",
    disabled: false,
  },
  {
    name: "WanderVisa",
    description: "Explore visa rules by country.",
    icon: <FaPassport className="text-2xl text-indigo-500" />,
    href: "https://wandervisa-nine.vercel.app/",
    disabled: false,
    badge: "new",
  },
  {
    name: "WanderBudget",
    description: "Preview daily travel costs by country.",
    icon: <FaMoneyCheckDollar className="text-2xl text-neutral-500" />,
    href: "",
    disabled: true,
  },
  {
    name: "WanderPack",
    description: "Organize your travel essentials.",
    icon: <FaSuitcaseRolling className="text-2xl text-neutral-500" />,
    href: "",
    disabled: true,
  },
  {
    name: "WanderSpin",
    description: "Spin the globe to pick your next trip.",
    icon: <FaEarthEurope className="text-2xl text-neutral-500" />,
    href: "",
    disabled: true,
  },
];

const reviews = [
  {
    name: "Sofia G.",
    location: "France",
    rating: 5,
    feedback:
      "WanderTools gave me everything I needed for my solo trip to South America. No fluff, just the essentials. Can’t wait to try WanderBudget!",
    avatar: "👩🏻",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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
            <Link
              href="#tools"
              className={`z-10 inline-block mt-4 sm:mt-6 mb-32 px-6 py-3 rounded-full text-sm sm:text-base shadow-md border ${
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
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 bg-gradient-to-br from-indigo-500 to-amber-500 text-transparent bg-clip-text">
              Tools
            </h2>
            <p
              className={`text-base sm:text-lg mb-8 ${
                dark ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              Already powering smarter trips around the world. Here’s what you
              can use.
            </p>
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
                          className={`absolute top-2 right-2 z-10 text-xs px-2 py-0.5 rounded-full font-medium shadow-sm tracking-wide ${
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

        <section
          id="reviews"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 max-w-7xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 bg-gradient-to-br from-indigo-500 to-amber-500 text-transparent bg-clip-text">
              Reviews
            </h2>
            <p
              className={`text-base sm:text-lg mb-8 ${
                dark ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              Trusted by travelers across 5+ countries. Here’s what some of them
              say.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`text-left bg-[var(--card-bg)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border ${
                    dark ? "border-neutral-800" : "border-neutral-200"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{review.avatar}</span>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p
                        className={`text-sm ${
                          dark ? "text-neutral-400" : "text-neutral-600"
                        }`}
                      >
                        {review.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p
                    className={`leading-relaxed ${
                      dark ? "text-neutral-300" : "text-neutral-700"
                    }`}
                  >
                    {review.feedback}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section
          id="waitlist"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 max-w-7xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 mt-32 text-center bg-gradient-to-br from-indigo-500 to-amber-500 text-transparent bg-clip-text">
              Waitlist
            </h2>
            <p
              className={`text-base sm:text-lg mb-8 ${
                dark ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              Get early access to upcoming tools. Join the waitlist and stay
              updated.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full sm:flex sm:items-center sm:justify-center gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className={`w-full sm:w-auto px-4 py-3 rounded-full border text-sm outline-none ${
                  dark
                    ? "border-neutral-800 bg-neutral-900 text-neutral-200 placeholder:text-neutral-600"
                    : "border-neutral-300 bg-neutral-100 text-neutral-800 placeholder:text-neutral-400"
                }`}
              />
              <button
                disabled
                type="submit"
                className={`mt-3 sm:mt-0 w-full sm:w-auto px-4 py-3 rounded-full border text-sm outline-none opacity-50 cursor-not-allowed ${
                  dark
                    ? "border-neutral-800 bg-neutral-900 text-neutral-200"
                    : "border-neutral-200 bg-neutral-100 text-neutral-800"
                }`}
              >
                Launching Soon
              </button>
            </form>
          </motion.div>
        </section>
      </main>

      <footer className="flex justify-between items-center text-xs text-neutral-500 px-8 py-6 sm:px-4 sm:py-8 max-w-7xl mx-auto w-full">
        <span>© {new Date().getFullYear()} WanderTools.</span>
        <a
          href="https://instagram.com/ad.fgrd"
          target="_blank"
          className="underline hover:opacity-80"
        >
          Contact
        </a>
      </footer>
    </>
  );
}
