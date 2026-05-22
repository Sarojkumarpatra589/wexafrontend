"use client";

import { useState } from "react";

export default function AnalyticsPage() {
  const [range, setRange] = useState("Monthly");

  return (
    <div className="space-y-10 relative">

      {/* BACK GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 relative z-10">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Analytics Dashboard
          </h1>
          <p className="text-gray-400 mt-2">
            Workforce insights & performance tracking
          </p>
        </div>

        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm"
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>

      </div>

      {/* ================= KPI GRID (FIXED) ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <Kpi title="Total Employees" value="520" />
        <Kpi title="Active Today" value="487" color="green" />
        <Kpi title="Pending Tasks" value="34" color="yellow" />
        <Kpi title="Payroll Cost" value="$128K" color="red" />

      </div>

      {/* ================= TOP CHARTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <Chart title="Employee Growth" />
        <Chart title="Attendance Rate" />
        <PieChart />

      </div>

      {/* ================= LOWER SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <BarChart />
        <Insights />

      </div>

    </div>
  );
}

/* ================= CARD WRAPPER ================= */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-950/70 border border-red-900/20 rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_25px_rgba(255,0,0,0.05)]">
      {children}
    </div>
  );
}

/* ================= KPI ================= */
function Kpi({
  title,
  value,
  color = "white",
}: any) {
  const colors: any = {
    green: "text-green-400",
    yellow: "text-yellow-400",
    red: "text-red-400",
    white: "text-white",
  };

  return (
    <Card>
      <p className="text-gray-400 text-sm">{title}</p>

      <h2 className={`text-3xl font-bold mt-2 ${colors[color]}`}>
        {value}
      </h2>

      <div className="h-2 bg-zinc-800 rounded-full mt-4 overflow-hidden">
        <div className="h-full w-3/4 bg-red-500 animate-pulse rounded-full" />
      </div>
    </Card>
  );
}

/* ================= LINE CHART ================= */
function Chart({ title }: any) {
  return (
    <Card>
      <div className="flex flex-col justify-between h-[240px]">

        <h3 className="text-white font-semibold">{title}</h3>

        <div className="flex items-end gap-2 h-32">

          {[35, 60, 45, 85, 70, 90, 55].map((h, i) => (
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
          Live performance data
        </p>

      </div>
    </Card>
  );
}

/* ================= PIE ================= */
function PieChart() {
  return (
    <Card>
      <div className="flex flex-col justify-between h-[240px]">

        <h3 className="text-white font-semibold">
          Department Split
        </h3>

        <div className="flex justify-center items-center flex-1">

          <div className="w-36 h-36 rounded-full border-[14px] border-red-500/50 border-t-yellow-400 border-r-green-400 border-b-blue-400 animate-spin-slow" />

        </div>

        <div className="text-xs text-gray-400 space-y-1">
          <p>🔴 Engineering</p>
          <p>🟢 HR</p>
          <p>🟡 Finance</p>
          <p>🔵 Design</p>
        </div>

      </div>
    </Card>
  );
}

/* ================= BAR ================= */
function BarChart() {
  return (
    <Card>
      <h3 className="text-white font-semibold mb-5">
        Department Performance
      </h3>

      <div className="space-y-4">

        <Bar label="Engineering" value={85} />
        <Bar label="HR" value={60} />
        <Bar label="Finance" value={75} />
        <Bar label="Design" value={55} />

      </div>
    </Card>
  );
}

/* ================= INSIGHTS ================= */
function Insights() {
  return (
    <Card>
      <h3 className="text-white font-semibold mb-4">
        AI Insights
      </h3>

      <div className="space-y-4 text-sm text-gray-300 leading-relaxed">

        <p>📊 Productivity increased by <span className="text-green-400">14%</span></p>

        <p>⚠️ Engineering workload slightly increased</p>

        <p>💰 Payroll accuracy at <span className="text-red-400">99%</span></p>

        <p>🚀 System performance is stable and optimized</p>

      </div>
    </Card>
  );
}

/* ================= BAR ================= */
function Bar({ label, value }: any) {
  return (
    <div>

      <div className="flex justify-between text-sm text-gray-400 mb-1">
        <span>{label}</span>
        <span className="text-red-400">{value}%</span>
      </div>

      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
}