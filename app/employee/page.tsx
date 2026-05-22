"use client";

import { useEffect, useState } from "react";

export default function EmployeeDashboard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          EMPLOYEE DASHBOARD
        </h1>
        <p className="text-gray-400 mt-2">
          Your personal workspace & performance hub
        </p>
      </div>

      {/* ===================== */}
      {/* PROFILE + CLOCK */}
      {/* ===================== */}
      <section className="grid lg:grid-cols-3 gap-6">

        {/* PROFILE CARD */}
        <div className="glass-card">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-black font-bold text-xl">
              R
            </div>

            <div>
              <h2 className="text-lg font-semibold">Rahul Kumar</h2>
              <p className="text-gray-400 text-sm">Frontend Developer</p>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-400 space-y-1">
            <p>Employee ID: WEXA-1024</p>
            <p>Department: Engineering</p>
            <p>Status: Active</p>
          </div>
        </div>

        {/* LIVE CLOCK */}
        <div className="glass-card flex flex-col justify-center">
          <p className="text-gray-400 text-sm">SYSTEM TIME</p>
          <h2 className="text-3xl font-bold text-red-400 mt-2 tracking-widest">
            {time}
          </h2>
          <p className="text-xs text-gray-500 mt-2">
            Auto-synced workplace clock
          </p>
        </div>

        {/* ATTENDANCE STATUS */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-3">Today's Attendance</h3>

          <div className="space-y-2 text-sm">
            <p>Clock In: 09:12 AM</p>
            <p>Clock Out: --</p>
            <p>Status: <span className="text-green-400">Present</span></p>
          </div>

          <button className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm">
            Mark Attendance
          </button>
        </div>
      </section>

      {/* ===================== */}
      {/* PERFORMANCE + SALARY */}
      {/* ===================== */}
      <section className="grid lg:grid-cols-2 gap-6">

        {/* PERFORMANCE */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">My Performance</h3>

          {[
            ["Task Completion", 82],
            ["Attendance Score", 95],
            ["Productivity", 76],
          ].map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{item[0]}</span>
                <span className="text-red-400">{item[1]}%</span>
              </div>

              <div className="w-full h-2 bg-black border border-red-900/30 rounded">
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${item[1]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* SALARY */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">Salary Overview</h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Base Salary</span>
              <span>₹45,000</span>
            </div>

            <div className="flex justify-between">
              <span>Bonus</span>
              <span>₹5,000</span>
            </div>

            <div className="flex justify-between">
              <span>Deductions</span>
              <span>-₹1,200</span>
            </div>

            <hr className="border-red-900/30" />

            <div className="flex justify-between text-red-400 font-bold">
              <span>Net Pay</span>
              <span>₹48,800</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* TASKS + LEAVE STATUS */}
      {/* ===================== */}
      <section className="grid lg:grid-cols-2 gap-6">

        {/* TASKS */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">My Tasks</h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>⚡ UI Dashboard Design - In Progress</li>
            <li>📊 API Integration - Pending</li>
            <li>🐞 Bug Fixes - Completed</li>
            <li>🚀 Deployment Task - Pending</li>
          </ul>
        </div>

        {/* LEAVE STATUS */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">Leave Status</h3>

          <div className="space-y-3 text-sm">
            <div className="p-3 border border-red-900/30 rounded-lg">
              Sick Leave - Approved
            </div>
            <div className="p-3 border border-red-900/30 rounded-lg">
              Casual Leave - Pending
            </div>
            <div className="p-3 border border-red-900/30 rounded-lg">
              Earned Leave - Available: 8 Days
            </div>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* QUICK ACTIONS */}
      {/* ===================== */}
      <section className="glass-card">
        <h3 className="text-red-400 mb-4">Quick Actions</h3>

        <div className="grid sm:grid-cols-4 gap-4">
          {[
            ["Request Leave", "🏖️"],
            ["View Payslip", "💰"],
            ["Submit Task", "📝"],
            ["Update Profile", "👤"],
          ].map((a, i) => (
            <button
              key={i}
              className="p-4 border border-red-900/30 hover:border-red-500 hover:bg-red-950/30 rounded-xl transition text-left"
            >
              <div className="text-xl">{a[1]}</div>
              <div className="text-sm mt-2">{a[0]}</div>
            </button>
          ))}
        </div>
      </section>

      {/* GLASS STYLE */}
      <style jsx>{`
        .glass-card {
          background: rgba(15, 15, 15, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 0, 0, 0.15);
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
}