"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const navSections = [
    {
      title: "MAIN",
      items: [
        ["Dashboard", "/dashboard", "🏠"],
        ["Analytics", "/dashboard/analytics", "📊"],
        ["Reports", "/dashboard/reports", "📄"],
      ],
    },
    {
      title: "WORKFORCE",
      items: [
        ["Employees", "/dashboard/employees", "👥"],
        ["HR Panel", "/dashboard/hr", "🧠"],
        ["Departments", "/dashboard/departments", "🏢"],
        ["Attendance", "/dashboard/attendance", "📅"],
        ["Leaves", "/dashboard/leaves", "📝"],
        ["Tasks", "/dashboard/tasks", "⚡"],
      ],
    },
    {
      title: "SYSTEM",
      items: [
        ["Settings", "/dashboard/settings", "⚙️"],
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-red-600 blur-[200px] opacity-20 top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[200px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* ===================== */}
      {/* SIDEBAR */}
      {/* ===================== */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-72 glass-sidebar transform transition-transform duration-300 overflow-y-auto
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* LOGO */}
        <div className="p-6 border-b border-red-900/30">
          <h2 className="text-2xl font-bold tracking-widest text-red-500">
            WEXA AI
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            HR Command System
          </p>
        </div>

        {/* NAV */}
        <nav className="p-4 space-y-6 text-sm">

          {navSections.map((section, i) => (
            <div key={i}>
              <p className="text-xs text-gray-500 mb-2 tracking-wider">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map(([name, path, icon], idx) => {
                  const active = pathname === path;

                  return (
                    <Link
                      key={idx}
                      href={path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition
                        ${
                          active
                            ? "bg-red-600/20 border-red-500 text-red-400 shadow-[0_0_10px_rgba(255,0,0,0.2)]"
                            : "text-gray-300 border-transparent hover:bg-red-950/30 hover:border-red-900/40"
                        }`}
                    >
                      <span>{icon}</span>
                      <span>{name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* ===================== */}
      {/* MAIN AREA */}
      {/* ===================== */}
      <div className="flex-1 flex flex-col relative md:ml-5">

        {/* TOP BAR */}
        <header className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-red-900/30 bg-black/60 backdrop-blur-md sticky top-0 z-40">

          {/* MOBILE */}
          <button
            className="md:hidden text-red-400 text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* SEARCH (COMMAND STYLE) */}
          <div className="hidden md:flex flex-1 mx-6">
            <input
              placeholder="Search employees, HR, payroll, analytics..."
              className="w-full px-4 py-2 rounded-lg bg-zinc-950 border border-red-900/40 text-sm outline-none focus:border-red-500"
            />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">

            {/* SYSTEM STATUS */}
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              ONLINE
            </div>

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
                  <p>👤 New employee added</p>
                  <p className="mt-2">💰 Payroll generated</p>
                  <p className="mt-2">📝 Leave approved</p>
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
                <div className="absolute right-0 mt-2 w-44 bg-zinc-950 border border-red-900/40 rounded-lg p-2 text-sm">
                  <p className="p-2 hover:bg-red-950/40 rounded">Profile</p>
                  <p className="p-2 hover:bg-red-950/40 rounded">Settings</p>
                  <p className="p-2 hover:bg-red-950/40 rounded text-red-400">
                    Logout
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6 md:p-10">{children}</main>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .glass-sidebar {
          background: rgba(10, 10, 10, 0.75);
          backdrop-filter: blur(18px);
          border-right: 1px solid rgba(255, 0, 0, 0.15);
          box-shadow: 0 0 50px rgba(255, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
}