"use client";
import { useState } from "react";

export default function FeedbackForm({
  appName,
  dark,
}: {
  appName: string;
  dark: boolean;
}) {
  const [show, setShow] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mdkdqjvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback, app: appName }),
      });

      if (res.ok) {
        setStatus("sent");
        setFeedback("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="hover:opacity-80 text-xs cursor-pointer"
      >
        Contact
      </button>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center text-center bg-black/10 backdrop-blur-xs z-50">
          <div
            className={`bg-[var(--card-bg)] rounded-xl p-6 w-[90%] max-w-md shadow-lg border ${
              dark ? "border-neutral-800" : "border-neutral-200"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-br from-indigo-500 to-orange-500 text-transparent bg-clip-text mb-1">
              Feedback
            </h2>
            <p
              className={`text-sm mb-5 ${
                dark ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              Share your ideas, suggestions or remarks.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Hidden field to track which app it came from */}
              <input type="hidden" name="app" value={appName} />

              <textarea
                name="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Your feedback"
                className={`w-full p-3 rounded-xl border text-sm focus:outline-none ${
                  dark
                    ? "border-neutral-800 bg-neutral-900 text-neutral-200 placeholder:text-neutral-600"
                    : "border-neutral-300 bg-neutral-100 text-neutral-800 placeholder:text-neutral-400"
                }`}
                rows={5}
                required
              />

              <div className="flex justify-center gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className={`px-4 py-2 rounded-2xl text-sm border cursor-pointer ${
                    dark
                      ? "border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-300"
                      : "border-neutral-200 bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                  }`}
                  disabled={status === "sending"}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-2xl text-sm text-neutral-100 bg-gradient-to-br from-indigo-500 to-orange-500 hover:from-indigo-400 hover:to-orange-400 cursor-pointer"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send"}
                </button>
              </div>
            </form>

            {status === "sent" && (
              <p className="text-green-500 opacity-90 text-sm mt-5">
                ✅ Feedback sent
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 opacity-90 text-sm mt-5">
                ❌ Something went wrong
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
