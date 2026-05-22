"use client";

import { useEffect, useState } from "react";

export default function ReportsPage() {
  const [filter, setFilter] = useState("Monthly");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSummary, setAiSummary] = useState("");

  const reports = [
    { title: "Payroll Efficiency", value: 82 },
    { title: "Attendance Rate", value: 91 },
    { title: "Task Completion", value: 76 },
    { title: "Employee Performance", value: 88 },
  ];

  /* ================= AI SUMMARY GENERATOR ================= */
  const generateAISummary = () => {
    setAiLoading(true);
    setAiSummary("");

    setTimeout(() => {
      setAiSummary(
        "AI Insight: Workforce efficiency is stable at 84%. Attendance is strong, but task completion shows slight delay in backend team. Payroll processing remains optimized with no anomalies detected."
      );
      setAiLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-10 relative">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 relative z-10">

        <div>
          <h1 className="text-4xl font-bold text-white">
            AI Reports Center
          </h1>
          <p className="text-gray-400 mt-2">
            Real-time analytics + AI-powered insights
          </p>
        </div>

        <div className="flex gap-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm"
          >
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>

          <button
            onClick={generateAISummary}
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow-[0_0_25px_rgba(255,0,0,0.25)]"
          >
            🤖 Generate AI Summary
          </button>
        </div>

      </div>

      {/* AI SUMMARY BOX */}
      <div className="card relative overflow-hidden">

        <h2 className="text-lg font-semibold text-white mb-3">
          AI Insight Engine
        </h2>

        {aiLoading ? (
          <div className="flex gap-2 items-center text-gray-400">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200" />
            <span className="ml-2">Analyzing workforce data...</span>
          </div>
        ) : aiSummary ? (
          <p className="text-gray-300 leading-relaxed">
            {aiSummary}
          </p>
        ) : (
          <p className="text-gray-500">
            Click “Generate AI Summary” to analyze system performance
          </p>
        )}

        {/* glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 blur-3xl rounded-full" />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {reports.map((r, i) => (
          <div key={i} className="card">

            <p className="text-gray-400 text-sm">{r.title}</p>

            <h2 className="text-3xl font-bold text-white mt-2">
              {r.value}%
            </h2>

            {/* animated bar */}
            <div className="h-2 bg-zinc-800 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-red-400 animate-pulse"
                style={{
                  width: `${r.value}%`,
                }}
              />
            </div>

          </div>
        ))}

      </div>

      {/* LIVE CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <LiveChart title="Payroll Flow" />
        <LiveChart title="Attendance Pulse" />
        <LiveChart title="Task Activity" />

      </div>

      {/* TABLE */}
      <div className="card">

        <h2 className="text-white font-semibold mb-4">
          System Report Logs
        </h2>

        <div className="space-y-3">

          {["Payroll generated", "Attendance synced", "AI analysis completed"].map(
            (log, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800"
              >
                <span className="text-gray-300">{log}</span>
                <span className="text-green-400 text-xs">Live</span>
              </div>
            )
          )}

        </div>

      </div>

      {/* STYLE */}
      <style jsx>{`
        .card {
          background: rgba(15, 15, 15, 0.7);
          border: 1px solid rgba(255, 0, 0, 0.12);
          border-radius: 24px;
          padding: 24px;
          backdrop-filter: blur(16px);
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.05);
        }
      `}</style>

    </div>
  );
}

/* ================= LIVE CHART ================= */
function LiveChart({ title }: { title: string }) {
  return (
    <div className="card h-[220px] flex flex-col justify-between">

      <h3 className="text-white font-semibold">{title}</h3>

      <div className="flex items-end gap-2 h-28">

        {[60, 30, 80, 40, 95, 50, 70].map((h, i) => (
          <div
            key={i}
            className="w-3 bg-red-500/70 rounded-t-md animate-pulse"
            style={{
              height: `${h}%`,
              animationDelay: `${i * 100}ms`,
            }}
          />
        ))}

      </div>

      <p className="text-xs text-gray-500">
        Live streaming data visualization
      </p>

    </div>
  );
}