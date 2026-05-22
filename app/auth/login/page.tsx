"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 relative overflow-hidden">
      {/* NEON BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neon-bg" />
      </div>

      {/* LOGIN CARD */}
      <div className="relative w-full max-w-md p-8 rounded-2xl border border-red-900/40 bg-zinc-950 shadow-[0_0_60px_rgba(255,0,0,0.15)] backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-red-500 tracking-widest">
          WEXA LOGIN
        </h1>

        <p className="text-center text-gray-400 mt-2 text-sm">
          Access your employee dashboard
        </p>

        {/* FORM */}
        <form className="mt-8 flex flex-col gap-4">
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
            Login
          </button>
        </form>

        {/* LINKS */}
        <div className="text-center mt-6 text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-red-400 hover:text-red-300">
            Register
          </Link>
        </div>
      </div>

      {/* NEON ANIMATION */}
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