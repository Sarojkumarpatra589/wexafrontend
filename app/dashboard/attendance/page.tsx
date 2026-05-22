"use client";

import { useState } from "react";

export default function AttendancePage() {
  const [search, setSearch] = useState("");

  const attendance = [
    {
      id: "EMP-001",
      name: "Rahul Kumar",
      department: "Engineering",
      date: "2026-05-22",
      checkIn: "09:12 AM",
      checkOut: "06:15 PM",
      status: "Present",
    },
    {
      id: "EMP-002",
      name: "Priya Sharma",
      department: "HR",
      date: "2026-05-22",
      checkIn: "-",
      checkOut: "-",
      status: "On Leave",
    },
    {
      id: "EMP-003",
      name: "Amit Das",
      department: "Engineering",
      date: "2026-05-22",
      checkIn: "10:05 AM",
      checkOut: "07:00 PM",
      status: "Late",
    },
    {
      id: "EMP-004",
      name: "Neha Singh",
      department: "Design",
      date: "2026-05-22",
      checkIn: "09:00 AM",
      checkOut: "05:45 PM",
      status: "Present",
    },
  ];

  const filtered = attendance.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Attendance
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Track employee attendance & working hours
        </p>
      </div>

      {/* TOOLBAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search employee..."
          className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white outline-none focus:border-red-500"
        />

        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm rounded-lg border border-zinc-700 hover:border-zinc-500">
            Export CSV
          </button>

          <button className="px-4 py-2 text-sm rounded-lg bg-red-600 hover:bg-red-700 text-white">
            + Mark Attendance
          </button>
        </div>

      </div>

      {/* TABLE */}
      <div className="glass-card overflow-x-auto">

        <table className="w-full text-sm min-w-[800px]">

          <thead className="bg-zinc-950 text-gray-400 text-xs uppercase">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Check In</th>
              <th className="p-4 text-left">Check Out</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800">

            {filtered.map((a) => (
              <tr key={a.id} className="hover:bg-zinc-800/40 transition">

                <td className="p-4 text-gray-400">{a.id}</td>
                <td className="p-4 text-white font-medium">{a.name}</td>
                <td className="p-4 text-gray-300">{a.department}</td>
                <td className="p-4 text-gray-300">{a.date}</td>
                <td className="p-4 text-gray-300">{a.checkIn}</td>
                <td className="p-4 text-gray-300">{a.checkOut}</td>

                <td className="p-4">
                  <StatusBadge status={a.status} />
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* STYLES */}
      <style jsx>{`
        .glass-card {
          background: rgba(18, 18, 18, 0.65);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 0, 0, 0.12);
          border-radius: 16px;
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.06);
        }
      `}</style>

    </div>
  );
}

/* ===================== */
/* STATUS BADGE */
/* ===================== */
function StatusBadge(props: { status: string }) {
  const { status } = props;

  const base = "px-3 py-1 rounded-full text-xs border";

  if (status === "Present") {
    return (
      <span className={`${base} text-green-400 border-green-500/30 bg-green-500/10`}>
        Present
      </span>
    );
  }

  if (status === "On Leave") {
    return (
      <span className={`${base} text-yellow-400 border-yellow-500/30 bg-yellow-500/10`}>
        On Leave
      </span>
    );
  }

  return (
    <span className={`${base} text-red-400 border-red-500/30 bg-red-500/10`}>
      Late
    </span>
  );
}