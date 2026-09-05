"use client";

import { useState, useEffect } from "react";

export default function AIChatbot() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "SYS_AI initialized. Ask me anything about Subham's skills, projects (AgriVision XAI), or experience!",
    },
  ]);

  // Prevent hydration mismatch caused by browser extensions injecting attributes
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userQuery = input.trim();
    const newMessages = [...messages, { role: "user", content: userQuery }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      let aiResponse =
        "Subham is a B.Tech CSE (AI & ML) graduate from GEC Jamui (2026), skilled in Full-Stack Web Development, Vision Transformers (ViT), and AI/ML systems.";

      const queryLower = userQuery.toLowerCase();
      if (queryLower.includes("project") || queryLower.includes("agrivision")) {
        aiResponse =
          "Subham's flagship project is AgriVision XAI — an AI-powered crop disease detection system using Vision Transformer (ViT) & XAI achieving 99.28% validation accuracy across 38 disease classes!";
      } else if (queryLower.includes("skill") || queryLower.includes("tech")) {
        aiResponse =
          "Core skills include Python, C/C++, React.js, Next.js, Deep Learning, Vision Transformers (ViT), Explainable AI (XAI), SQL, and Git/GitHub.";
      } else if (queryLower.includes("intern") || queryLower.includes("experience")) {
        aiResponse =
          "Subham completed 3 internships: Software Dev Intern at JhaJi Fastsewa, Website Dev Intern at Eisystems Technologies (IIT BHU), and Salesforce Developer Virtual Intern.";
      } else if (queryLower.includes("contact") || queryLower.includes("hire") || queryLower.includes("email")) {
        aiResponse =
          "You can reach Subham via email at shubhamkumarsingh355@gmail.com or phone at +91 9798686896, or use the contact form at the bottom of the page!";
      }

      setMessages([...newMessages, { role: "assistant", content: aiResponse }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-20 right-6 z-[998] font-mono text-xs">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[320px] sm:w-[380px] h-[480px] bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4 backdrop-blur-md">
          {/* Top Bar */}
          <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold uppercase tracking-wider text-white">Subham_AI // Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white px-2 py-0.5 rounded cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.role === "user"
                      ? "bg-white text-black font-semibold rounded-br-none"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-bl-none"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-zinc-900/90 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects..."
              className="flex-1 px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-white outline-none focus:border-emerald-400 text-xs"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black font-bold uppercase rounded-xl hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-zinc-900 border border-zinc-700 text-white shadow-2xl hover:border-emerald-400 hover:text-emerald-400 transition-all cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold tracking-wider uppercase text-[11px]">Ask Subham&apos;s AI</span>
        </button>
      )}
    </div>
  );
}