"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    description: "Fast visa checker between countries.",
    icon: <FaPassport className="text-2xl text-indigo-500" />,
    href: "https://wandervisa-nine.vercel.app/",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);

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
    <main className="min-h-screen flex flex-col justify-between px-4">
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setDark(!dark)}
          className="text-foreground hover:opacity-80 transition cursor-pointer"
        >
          {dark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center w-full max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">WanderTools</h1>
          <p
            className={`text-lg mb-12 ${
              dark ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            A suite of free, minimal travel tools for digital nomads and
            explorers.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {apps.map(({ name, description, icon, href }) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.04 }}
                className="transition-transform"
              >
                <Link
                  href={href}
                  target="_blank"
                  className={`card block border p-6 rounded-xl text-center shadow hover:shadow-md transition-all h-full ${
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
        </motion.div>
      </div>

      <footer className="text-center text-xs text-neutral-500 py-6">
        © {new Date().getFullYear()} WanderTools. All rights reserved.
      </footer>
    </main>
  );
}
