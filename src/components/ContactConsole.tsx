"use client";

import { useState } from "react";
import { Terminal, Send, CheckCircle2 } from "lucide-react";

export default function ContactConsole() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 mb-10 text-xs font-mono text-emerald-400 uppercase tracking-widest">
        <Terminal className="w-4 h-4" />
        <span>// 05. DISPATCH PAYLOAD / TRANSMIT</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Reactive JSON Terminal Preview */}
        <div className="md:col-span-5 rounded-3xl bg-zinc-950/90 border border-zinc-800/80 p-6 backdrop-blur-xl shadow-2xl font-mono text-xs">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-zinc-800/80 text-zinc-500">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-zinc-400">payload_preview.json</span>
          </div>

          <pre className="text-zinc-300 overflow-x-auto leading-relaxed">
            <code>
{`{
  "target": "Subham Kumar Singh",
  "endpoint": "sks.dev/contact",
  "timestamp": "${new Date().toISOString().split("T")[0]}",
  "payload": {
    "sender": "${form.name || "awaiting_input..."}",
    "reply_to": "${form.email || "awaiting_input..."}",
    "topic": "${form.subject || "general_inquiry"}",
    "bytes": "${form.message.length} chars"
  }
}`}
            </code>
          </pre>
        </div>

        {/* Right: Input Fields with Extension Suppression */}
        <div className="md:col-span-7 rounded-3xl bg-zinc-950/60 border border-zinc-800/80 p-8 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-400 mb-2">// SENDER_NAME</label>
                <input
                  suppressHydrationWarning
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-2">// SENDER_EMAIL</label>
                <input
                  suppressHydrationWarning
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  required
                  className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 mb-2">// SUBJECT</label>
              <input
                suppressHydrationWarning
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Opportunity"
                required
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-zinc-400 mb-2">// MESSAGE_BODY</label>
              <textarea
                suppressHydrationWarning
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Transmission details..."
                required
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            <button
              suppressHydrationWarning
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-500 text-black font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Payload Transmitted</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Dispatch</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}