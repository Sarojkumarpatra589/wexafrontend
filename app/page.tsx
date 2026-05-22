"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* NEON BACKGROUND LINES */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="neon-lines" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-red-900/30">
        <div className="flex items-center justify-between px-6 md:px-10 py-5">
          <h1 className="text-2xl font-bold tracking-widest text-red-500">
            WEXA
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-300 items-center">
            <a className="hover:text-red-400" href="#">
              Home
            </a>
            <a className="hover:text-red-400" href="#">
              Features
            </a>
            <a className="hover:text-red-400" href="#">
              Modules
            </a>
            <a className="hover:text-red-400" href="#">
              Pricing
            </a>
            <a className="hover:text-red-400" href="#">
              Contact
            </a>

            <Link
              href="/auth/login"
              className="px-4 py-2 border border-red-500 text-red-400 rounded-full hover:bg-red-500 hover:text-black transition"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white transition"
            >
              Register
            </Link>
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-red-400" />
            <span className="w-6 h-[2px] bg-red-400" />
            <span className="w-6 h-[2px] bg-red-400" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-300">
            <a href="#" className="hover:text-red-400">
              Home
            </a>
            <a href="#" className="hover:text-red-400">
              Features
            </a>
            <a href="#" className="hover:text-red-400">
              Modules
            </a>
            <a href="#" className="hover:text-red-400">
              Pricing
            </a>
            <a href="#" className="hover:text-red-400">
              Contact
            </a>

            <Link
              href="/auth/login"
              className="border border-red-500 text-red-400 px-4 py-2 rounded-full text-center"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="bg-red-600 px-4 py-2 rounded-full text-center"
            >
              Register
            </Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative text-center px-6 py-28">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          WEXA
        </h2>

        <p className="text-red-500 text-xl mt-4 tracking-widest">
          EMPLOYEE MANAGEMENT SYSTEM
        </p>

        <p className="max-w-2xl mx-auto mt-6 text-gray-400">
          A powerful AI-driven workforce management platform for attendance,
          payroll, performance, and analytics.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold shadow-lg shadow-red-900/40">
            Get Started
          </button>

          <button className="px-6 py-3 border border-red-500 text-red-400 rounded-full hover:bg-red-950">
            Book Demo
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-10 py-20">
        <h3 className="text-center text-3xl font-bold mb-12 text-red-400">
          Everything you need to manage workforce
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            ["Employee Management", "Manage all employee records easily"],
            ["Attendance System", "Track real-time attendance & shifts"],
            ["Payroll Automation", "Auto salary, bonus and deductions"],
            ["Performance Tracking", "AI-based employee evaluation"],
            ["Task Management", "Assign and monitor tasks"],
            ["Analytics Dashboard", "Powerful HR insights & reports"],
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-red-900/40 rounded-xl bg-zinc-950 hover:border-red-500 transition shadow-[0_0_20px_rgba(255,0,0,0.05)]"
            >
              <h4 className="text-lg font-semibold">{item[0]}</h4>
              <p className="text-gray-400 mt-2 text-sm">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 text-center">
        <h2 className="text-4xl font-bold">
          Ready to simplify your workforce?
        </h2>

        <p className="text-gray-400 mt-4">
          Start using WEXA EMS today and boost productivity.
        </p>

        <Link
          href="/auth/register"
          className="mt-8 inline-block px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-semibold shadow-lg shadow-red-900/40"
        >
          Get Started Free
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-10 border-t border-red-900/30 text-center text-gray-500 text-sm">
        © 2026 WEXA EMS. All rights reserved.
      </footer>

      {/* NEON ANIMATION STYLE */}
      <style jsx>{`
        .neon-lines {
          position: absolute;
          inset: -200px;
          background: repeating-linear-gradient(
            120deg,
            rgba(255, 0, 0, 0.08) 0px,
            rgba(255, 0, 0, 0.08) 2px,
            transparent 2px,
            transparent 80px
          );
          animation: move 10s linear infinite;
          filter: blur(0.3px);
        }

        @keyframes move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-80px);
          }
        }
      `}</style>
    </div>
  );
}