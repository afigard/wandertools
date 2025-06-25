import Link from "next/link";

const tools = [
  {
    name: "WanderAlert",
    description: "Travel Advisories",
    href: "https://wanderalert.vercel.app",
    emoji: "🚨",
  },
  {
    name: "WanderGoal",
    description: "Travel Goal Tracker",
    href: "https://www.wandergoal.fr",
    emoji: "🎯",
  },
  {
    name: "WanderVisa",
    description: "Visa Checker",
    href: "https://wandervisa-nine.vercel.app",
    emoji: "🛂",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">WanderTools</h1>
        <p className="text-lg text-gray-600">
          Lightweight travel utilities. Built for smart, modern explorers.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            target="_blank"
            className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition hover:scale-[1.02]"
          >
            <div className="text-4xl mb-3">{tool.emoji}</div>
            <h2 className="text-xl font-semibold mb-1">{tool.name}</h2>
            <p className="text-sm text-gray-500">{tool.description}</p>
          </Link>
        ))}
      </section>

      <footer className="mt-20 text-sm text-gray-500 text-center">
        <p>© {new Date().getFullYear()} WanderTools. All rights reserved.</p>
      </footer>
    </main>
  );
}
