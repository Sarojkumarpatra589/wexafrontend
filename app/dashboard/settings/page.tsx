"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <div className="space-y-10 relative">

      {/* BACK GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white">
          Project Settings
        </h1>
        <p className="text-gray-400 mt-2">
          Manage system preferences, security & notifications
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">

        {/* LEFT PANEL */}
        <div className="lg:col-span-2 space-y-8">

          {/* GENERAL SETTINGS */}
          <div className="card">
            <h2 className="section-title">General Settings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

              <Input label="Project Name" placeholder="WEXA EMS" />
              <Input label="Company Name" placeholder="WEXA Technologies" />
              <Input label="Admin Email" placeholder="admin@wexa.com" />
              <Input label="Time Zone" placeholder="IST (GMT+5:30)" />

            </div>
          </div>

          {/* NOTIFICATIONS */}
          <div className="card">
            <h2 className="section-title">Notifications</h2>

            <div className="space-y-4 mt-6">

              <Toggle
                label="Email Notifications"
                desc="Receive updates via email"
                value={emailNotif}
                setValue={setEmailNotif}
              />

              <Toggle
                label="System Alerts"
                desc="Get alerts for system events"
                value={true}
                setValue={() => {}}
              />

              <Toggle
                label="Weekly Reports"
                desc="Summary sent every week"
                value={false}
                setValue={() => {}}
              />

            </div>
          </div>

          {/* SECURITY */}
          <div className="card">
            <h2 className="section-title">Security</h2>

            <div className="space-y-4 mt-6">

              <Toggle
                label="Two Factor Authentication"
                desc="Add extra security layer"
                value={twoFA}
                setValue={setTwoFA}
              />

              <Toggle
                label="Login Alerts"
                desc="Notify on new login"
                value={true}
                setValue={() => {}}
              />

            </div>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-6">

          {/* QUICK CARD */}
          <div className="card">
            <h2 className="section-title">System Status</h2>

            <div className="mt-5 space-y-4">

              <Status label="Server" value="Active" color="green" />
              <Status label="Database" value="Healthy" color="green" />
              <Status label="API Latency" value="120ms" color="yellow" />
              <Status label="Storage" value="68%" color="red" />

            </div>
          </div>

          {/* SAVE */}
          <div className="card">
            <h2 className="section-title">Actions</h2>

            <button className="w-full mt-5 px-5 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold shadow-[0_0_25px_rgba(255,0,0,0.25)]">
              Save Changes
            </button>

            <button className="w-full mt-3 px-5 py-3 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-950/30">
              Reset Settings
            </button>
          </div>

        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .card {
          background: rgba(15, 15, 15, 0.7);
          border: 1px solid rgba(255, 0, 0, 0.12);
          border-radius: 24px;
          padding: 24px;
          backdrop-filter: blur(16px);
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.05);
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: white;
        }
      `}</style>

    </div>
  );
}

/* ================= INPUT ================= */
function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs text-gray-400 uppercase tracking-wider">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm outline-none focus:border-red-500 transition"
      />
    </div>
  );
}

/* ================= TOGGLE ================= */
function Toggle({
  label,
  desc,
  value,
  setValue,
}: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">

      <div>
        <p className="text-white font-medium">{label}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>

      <button
        onClick={() => setValue(!value)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          value ? "bg-red-600" : "bg-zinc-700"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transition ${
            value ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}

/* ================= STATUS ================= */
function Status({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: "green" | "yellow" | "red";
}) {
  const colors: any = {
    green: "text-green-400",
    yellow: "text-yellow-400",
    red: "text-red-400",
  };

  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-400">{label}</span>
      <span className={`${colors[color]} font-semibold`}>
        {value}
      </span>
    </div>
  );
}