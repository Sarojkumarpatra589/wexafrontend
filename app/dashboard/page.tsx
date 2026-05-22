"use client";

import { useEffect, useState } from "react";

export default function DashboardHome() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    ["Total Employees", 512],
    ["Present Today", 468],
    ["Pending Leaves", 24],
    ["Departments", 8],
    ["Active Tasks", 132],
    ["Monthly Payroll", 1250000],
  ];

  const chartBars = (values: number[]) =>
    values.map((v, i) => (
      <div
        key={i}
        className="w-3 bg-red-500/70 hover:bg-red-400 transition-all rounded-t-md shadow-[0_0_10px_rgba(255,0,0,0.3)]"
        style={{ height: `${v}px` }}
      />
    ));

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const today = new Date().getDate();

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10 space-y-10 relative overflow-hidden">

      {/* FUTURISTIC BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-red-600 blur-[200px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[200px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* HEADER */}
      <div className="relative">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          WEXA COMMAND CENTER
        </h1>
        <p className="text-gray-400 mt-2">
          Futuristic HR Intelligence Dashboard
        </p>
      </div>

      {/* TOP WIDGETS */}
      <section className="grid lg:grid-cols-3 gap-6 relative">

        {/* CLOCK */}
        <div className="glass-card">
          <p className="text-gray-400 text-sm">SYSTEM TIME</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2 tracking-widest">
            {time}
          </h2>
          <p className="text-xs text-gray-500 mt-2">
            Live synchronized clock
          </p>
        </div>

        {/* CALENDAR */}
        <div className="glass-card">
          <p className="text-gray-400 text-sm mb-2">CALENDAR GRID</p>

          <div className="grid grid-cols-7 text-xs text-gray-400 text-center">
            {days.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 mt-2 text-center text-xs">
            {Array.from({ length: 30 }).map((_, i) => {
              const d = i + 1;
              return (
                <div
                  key={i}
                  className={`p-1 rounded ${
                    d === today
                      ? "bg-red-500 text-black font-bold"
                      : "hover:bg-red-950/40 text-gray-400"
                  }`}
                >
                  {d}
                </div>
              );
            })}
          </div>
        </div>

        {/* SYSTEM STATUS */}
        <div className="glass-card">
          <p className="text-gray-400 text-sm">SYSTEM STATUS</p>

          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Uptime</span>
              <span className="text-green-400">99.9%</span>
            </div>
            <div className="flex justify-between">
              <span>API</span>
              <span className="text-green-400">Online</span>
            </div>
            <div className="flex justify-between">
              <span>Load</span>
              <span className="text-yellow-400">Moderate</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS CARDS */}
      <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
        {stats.map((s, i) => (
          <div key={i} className="glass-card hover:scale-[1.02] transition">
            <p className="text-gray-400 text-xs">{s[0]}</p>
            <h2 className="text-xl font-bold text-red-400 mt-1">
              {typeof s[1] === "number" && s[1] > 1000
                ? `₹${(s[1] / 1000).toFixed(1)}L`
                : s[1]}
            </h2>
          </div>
        ))}
      </section>

      {/* CHARTS */}
      <section className="grid lg:grid-cols-2 gap-6 relative">

        {/* ATTENDANCE CHART */}
        <div className="glass-card h-64">
          <h3 className="text-red-400 mb-4">Attendance Chart</h3>
          <div className="flex items-end gap-2 h-40">
            {chartBars([40, 70, 55, 80, 60, 90, 75])}
          </div>
        </div>

        {/* EMPLOYEE GROWTH */}
        <div className="glass-card h-64">
          <h3 className="text-red-400 mb-4">Employee Growth</h3>
          <div className="flex items-end gap-2 h-40">
            {chartBars([30, 45, 50, 65, 70, 85, 95])}
          </div>
        </div>

        {/* PAYROLL */}
        <div className="glass-card h-64">
          <h3 className="text-red-400 mb-4">Payroll Trend</h3>
          <div className="flex items-end gap-2 h-40">
            {chartBars([60, 55, 70, 80, 75, 90, 100])}
          </div>
        </div>

        {/* PERFORMANCE */}
        <div className="glass-card h-64">
          <h3 className="text-red-400 mb-4">Performance Index</h3>
          <div className="flex items-end gap-2 h-40">
            {chartBars([50, 65, 60, 85, 70, 95, 88])}
          </div>
        </div>
      </section>

      {/* ACTIVITY + ACTIONS */}
      <section className="grid lg:grid-cols-2 gap-6 relative">

        {/* RECENT ACTIVITY */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">Recent Activity</h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>👤 New employee onboarded - Rahul</li>
            <li>📅 Leave approved - Priya</li>
            <li>💰 Payroll processed successfully</li>
            <li>📊 Performance report generated</li>
          </ul>
        </div>

        {/* QUICK ACTIONS */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">Quick Actions</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Add Employee", "➕"],
              ["Generate Payroll", "💰"],
              ["Create Task", "📝"],
              ["Export Report", "📤"],
            ].map((a, i) => (
              <button
                key={i}
                className="p-4 rounded-xl border border-red-900/40 hover:border-red-500 hover:bg-red-950/40 transition text-left"
              >
                <div className="text-xl">{a[1]}</div>
                <div className="text-sm text-gray-300 mt-2">{a[0]}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GLASS STYLE */}
      <style jsx>{`
        .glass-card {
          background: rgba(20, 20, 20, 0.6);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 0, 0, 0.15);
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
}