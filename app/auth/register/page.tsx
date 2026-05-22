"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 relative overflow-hidden">
      {/* NEON BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neon-bg" />
      </div>

      {/* REGISTER CARD */}
      <div className="relative w-full max-w-md p-8 rounded-2xl border border-red-900/40 bg-zinc-950 shadow-[0_0_60px_rgba(255,0,0,0.15)] backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-red-500 tracking-widest">
          WEXA REGISTER
        </h1>

        <p className="text-center text-gray-400 mt-2 text-sm">
          Create your employee account
        </p>

        {/* FORM */}
        <form className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-lg bg-black border border-red-900/40 focus:border-red-500 outline-none text-white placeholder-gray-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-black border border-red-900/40 focus:border-red-500 outline-none text-white placeholder-gray-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-black border border-red-900/40 focus:border-red-500 outline-none text-white placeholder-gray-500"
          />

          <button
            type="submit"
            className="mt-2 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold shadow-lg shadow-red-900/40 transition"
          >
            Create Account
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-red-900/40 flex-1" />
          <span className="text-gray-500 text-xs">OR</span>
          <div className="h-px bg-red-900/40 flex-1" />
        </div>

        {/* GOOGLE LOGIN */}
        <button className="w-full py-3 border border-red-500 text-red-400 rounded-lg hover:bg-red-950 transition flex items-center justify-center gap-2">
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
            />
          </svg>
          Register with Google
        </button>

        {/* LOGIN LINK */}
        <div className="text-center mt-6 text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-red-400 hover:text-red-300">
            Login
          </Link>
        </div>
      </div>

      {/* NEON BACKGROUND ANIMATION */}
      <style jsx>{`
        .neon-bg {
          position: absolute;
          inset: -200px;
          background: repeating-linear-gradient(
            120deg,
            rgba(255, 0, 0, 0.08) 0px,
            rgba(255, 0, 0, 0.08) 2px,
            transparent 2px,
            transparent 90px
          );
          animation: move 12s linear infinite;
          filter: blur(0.5px);
        }

        @keyframes move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-90px);
          }
        }
      `}</style>
    </div>
  );
}