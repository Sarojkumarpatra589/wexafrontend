"use client";

import { useMemo, useState } from "react";

export default function LeavesPage() {
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("All");
  const [employee, setEmployee] = useState("All");

  const leaves = [
    {
      id: "LV-001",
      name: "Rahul Kumar",
      role: "Employee",
      type: "Sick Leave",
      date: "2026-05-20",
      status: "Approved",
    },
    {
      id: "LV-002",
      name: "Priya Sharma",
      role: "Employee",
      type: "Casual Leave",
      date: "2026-05-22",
      status: "Pending",
    },
    {
      id: "LV-003",
      name: "Amit Das",
      role: "HR",
      type: "Emergency Leave",
      date: "2026-04-18",
      status: "Rejected",
    },
    {
      id: "LV-004",
      name: "Neha Singh",
      role: "Employee",
      type: "Paid Leave",
      date: "2026-05-28",
      status: "Approved",
    },
    {
      id: "LV-005",
      name: "Karan Jena",
      role: "Employee",
      type: "Work From Home",
      date: "2026-05-25",
      status: "Pending",
    },
  ];

  /* ================= FILTER ================= */
  const filtered = useMemo(() => {
    return leaves.filter((l) => {
      const matchSearch = l.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchMonth =
        month === "All" || l.date.includes(month);

      const matchEmployee =
        employee === "All" || l.name === employee;

      return matchSearch && matchMonth && matchEmployee;
    });
  }, [search, month, employee]);

  /* ================= ANALYTICS ================= */
  const analytics = useMemo(() => {
    return {
      total: filtered.length,
      approved: filtered.filter(
        (l) => l.status === "Approved"
      ).length,
      pending: filtered.filter(
        (l) => l.status === "Pending"
      ).length,
      rejected: filtered.filter(
        (l) => l.status === "Rejected"
      ).length,
    };
  }, [filtered]);

  return (
    <div className="space-y-10">

      {/* ================= HEADER ================= */}
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Leave Management
          </h1>

          <p className="text-gray-400 text-sm md:text-base">
            Monitor and manage employee & HR leave activities
          </p>
        </div>

        <button className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-lg shadow-red-900/30 transition">
          + Request Leave
        </button>

      </section>

      {/* ================= FILTER SECTION ================= */}
      <section className="glass-card p-6">

        <div className="flex flex-col gap-6">

          <div>
            <h2 className="text-lg font-semibold text-white">
              Filters
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Filter leave records by employee or month
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* SEARCH */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wide text-gray-500">
                Search Employee
              </label>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search employee..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white outline-none focus:border-red-500 transition"
              />
            </div>

            {/* MONTH */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wide text-gray-500">
                Select Month
              </label>

              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white outline-none focus:border-red-500 transition"
              >
                <option>All</option>
                <option value="2026-05">May 2026</option>
                <option value="2026-04">April 2026</option>
              </select>
            </div>

            {/* EMPLOYEE */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wide text-gray-500">
                Employee
              </label>

              <select
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white outline-none focus:border-red-500 transition"
              >
                <option>All</option>
                <option>Rahul Kumar</option>
                <option>Priya Sharma</option>
                <option>Amit Das</option>
                <option>Neha Singh</option>
                <option>Karan Jena</option>
              </select>
            </div>

          </div>

        </div>

      </section>

      {/* ================= ANALYTICS ================= */}
      <section className="space-y-5">

        <div>
          <h2 className="text-xl font-semibold text-white">
            Analytics Overview
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Leave statistics and approval insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-4 gap-6">

          <Card
            title="Total Leaves"
            value={analytics.total}
            color="default"
          />

          <Card
            title="Approved"
            value={analytics.approved}
            color="green"
          />

          <Card
            title="Pending"
            value={analytics.pending}
            color="yellow"
          />

          <Card
            title="Rejected"
            value={analytics.rejected}
            color="red"
          />

        </div>

      </section>

      {/* ================= TABLE SECTION ================= */}
      <section className="space-y-5">

        <div>
          <h2 className="text-xl font-semibold text-white">
            Leave Requests
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Recent employee & HR leave records
          </p>
        </div>

        <div className="glass-card overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead className="bg-zinc-950/70 border-b border-zinc-800">
              <tr className="text-gray-400 text-xs uppercase tracking-wider">

                <th className="p-5 text-left">ID</th>
                <th className="p-5 text-left">Employee</th>
                <th className="p-5 text-left">Role</th>
                <th className="p-5 text-left">Leave Type</th>
                <th className="p-5 text-left">Date</th>
                <th className="p-5 text-left">Status</th>
                <th className="p-5 text-left">Actions</th>

              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800">

              {filtered.map((leave, i) => (
                <tr
                  key={i}
                  className="hover:bg-zinc-900/40 transition"
                >

                  <td className="p-5 text-gray-400 text-sm">
                    {leave.id}
                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-4">

                      <div className="w-11 h-11 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-semibold">
                        {leave.name.charAt(0)}
                      </div>

                      <div className="space-y-1">
                        <p className="text-white font-medium">
                          {leave.name}
                        </p>

                        <p className="text-xs text-gray-500">
                          WEXA Team
                        </p>
                      </div>

                    </div>

                  </td>

                  <td className="p-5 text-gray-300 text-sm">
                    {leave.role}
                  </td>

                  <td className="p-5 text-gray-300 text-sm">
                    {leave.type}
                  </td>

                  <td className="p-5 text-gray-300 text-sm">
                    {leave.date}
                  </td>

                  <td className="p-5">
                    <StatusBadge status={leave.status} />
                  </td>

                  <td className="p-5">

                    <div className="flex items-center gap-3">

                      <button className="px-3 py-1.5 rounded-lg border border-green-500/30 text-green-400 text-xs hover:bg-green-500/10 transition">
                        Approve
                      </button>

                      <button className="px-3 py-1.5 rounded-lg border border-red-500/30 text-red-400 text-xs hover:bg-red-500/10 transition">
                        Reject
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .glass-card {
          background: rgba(15, 15, 15, 0.75);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 0, 0, 0.12);
          border-radius: 24px;
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.05);
        }
      `}</style>

    </div>
  );
}

/* ================= CARD ================= */
function Card({
  title,
  value,
  color = "default",
}: {
  title: string;
  value: number;
  color?: "green" | "yellow" | "red" | "default";
}) {

  const colors: any = {
    green: "text-green-400 border-green-500/20",
    yellow: "text-yellow-400 border-yellow-500/20",
    red: "text-red-400 border-red-500/20",
    default: "text-white border-red-500/10",
  };

  return (
    <div
      className={`
        relative overflow-hidden
        rounded-2xl
        border
        ${colors[color]}
        bg-zinc-950/70
        backdrop-blur-xl
        p-6
        min-h-[150px]
        flex flex-col justify-between
        shadow-[0_0_25px_rgba(255,0,0,0.05)]
        hover:shadow-[0_0_35px_rgba(255,0,0,0.12)]
        transition-all duration-300
      `}
    >

      {/* GLOW */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-red-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 space-y-3">

        <p className="text-sm text-gray-400">
          {title}
        </p>

        <h2 className={`text-4xl font-bold ${colors[color].split(" ")[0]}`}>
          {value}
        </h2>

      </div>

      {/* BAR */}
      <div className="relative z-10 mt-6 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
        <div className="h-full w-2/3 bg-red-500 rounded-full" />
      </div>

    </div>
  );
}

/* ================= STATUS ================= */
function StatusBadge({ status }: { status: string }) {

  const base =
    "px-3 py-1 rounded-full text-xs border";

  if (status === "Approved") {
    return (
      <span className={`${base} text-green-400 border-green-500/30 bg-green-500/10`}>
        Approved
      </span>
    );
  }

  if (status === "Pending") {
    return (
      <span className={`${base} text-yellow-400 border-yellow-500/30 bg-yellow-500/10`}>
        Pending
      </span>
    );
  }

  return (
    <span className={`${base} text-red-400 border-red-500/30 bg-red-500/10`}>
      Rejected
    </span>
  );
}