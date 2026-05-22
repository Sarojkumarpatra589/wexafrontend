"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    ["Home", "/dashboard", "🏠"],
     ["HR", "/hr/", "👥"],
    ["Employees", "/employee", "👥"],
    ["Attendance", "/dashboard/attendance", "📅"],
    ["Leaves", "/dashboard/leaves", "📝"],
    ["Payroll", "/dashboard/payroll", "💰"],
    ["Tasks", "/dashboard/tasks", "⚡"],
  ];

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">

      {/* BACKDROP GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-red-600 blur-[180px] opacity-20 top-[-100px] left-[-100px]" />
      </div>

      {/* SIDEBAR */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-72 glass-sidebar transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* LOGO */}
        <div className="p-6 border-b border-red-900/30">
          <h2 className="text-2xl font-bold tracking-widest text-red-500">
            WEXA
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Command Dashboard System
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="p-4 flex flex-col gap-2 text-sm">
          {navItems.map(([name, path, icon], i) => {
            const active = pathname === path;

            return (
              <Link
                key={i}
                href={path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition border
                  ${
                    active
                      ? "bg-red-600/20 border-red-500 text-red-400"
                      : "text-gray-300 border-transparent hover:bg-red-950/30 hover:border-red-900/40"
                  }`}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col relative">

        {/* TOP BAR */}
        <header className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-red-900/30 bg-black/60 backdrop-blur-md sticky top-0 z-40">

          {/* MOBILE MENU */}
          <button
            className="md:hidden text-red-400 text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* SEARCH BAR */}
          <div className="hidden md:flex flex-1 mx-6">
            <input
              placeholder="Search employees, tasks, payroll..."
              className="w-full px-4 py-2 rounded-lg bg-zinc-950 border border-red-900/40 text-sm text-white outline-none focus:border-red-500"
            />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">

            {/* NOTIFICATIONS */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="px-3 py-2 rounded-lg border border-red-900/30 hover:border-red-500"
              >
                🔔
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-zinc-950 border border-red-900/40 rounded-lg p-3 text-sm">
                  <p className="text-gray-300">New employee added</p>
                  <p className="text-gray-300 mt-2">Payroll generated</p>
                  <p className="text-gray-300 mt-2">Leave request approved</p>
                </div>
              )}
            </div>

            {/* PROFILE */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="px-3 py-2 rounded-lg bg-red-600 text-white text-sm"
              >
                Admin
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-zinc-950 border border-red-900/40 rounded-lg p-2 text-sm">
                  <p className="p-2 hover:bg-red-950/40 rounded cursor-pointer">
                    Profile
                  </p>
                  <p className="p-2 hover:bg-red-950/40 rounded cursor-pointer">
                    Settings
                  </p>
                  <p className="p-2 hover:bg-red-950/40 rounded cursor-pointer text-red-400">
                    Logout
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-6 md:p-10">{children}</main>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .glass-sidebar {
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(18px);
          border-right: 1px solid rgba(255, 0, 0, 0.15);
          box-shadow: 0 0 40px rgba(255, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
}