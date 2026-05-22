

"use client";

import { useState } from "react";
import Link from "next/link";
export default function EmployeesPage() {
  const [search, setSearch] = useState("");

  const employees = [
    { id: "EMP-001", name: "Rahul Kumar", role: "Frontend Dev", dept: "Eng", status: "Active" },
    { id: "EMP-002", name: "Priya Sharma", role: "HR Manager", dept: "HR", status: "On Leave" },
    { id: "EMP-003", name: "Amit Das", role: "Backend Dev", dept: "Eng", status: "Remote" },
    { id: "EMP-004", name: "Neha Singh", role: "Designer", dept: "Design", status: "Active" },
  ];

  const filtered = employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          EMPLOYEE ANALYTICS
        </h1>
        <p className="text-gray-400 mt-1">
          Workforce overview & control system
        </p>
      </div>

      {/* ===================== */}
      {/* TABLE TOOLBAR (NEW FIX) */}
      {/* ===================== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* LEFT → SEARCH */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search employee..."
          className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-zinc-950 border border-red-900/40 text-sm outline-none focus:border-red-500"
        />

        {/* RIGHT → BUTTON */}
        <Link href="/dashboard/employees/add">
        <button className="px-5 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-semibold shadow-lg shadow-red-900/30 w-full md:w-auto">
            + Add Employee
        </button>
        </Link>

      </div>

      {/* ===================== */}
      {/* TABLE */}
      {/* ===================== */}
      <div className="glass-card overflow-x-auto">

        <table className="w-full text-sm min-w-[700px]">

          <thead>
            <tr className="text-gray-400 border-b border-red-900/30">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Dept</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((e, i) => (
              <tr
                key={i}
                className="border-b border-red-900/10 hover:bg-red-950/20 transition"
              >
                <td className="p-4 text-gray-400">{e.id}</td>
                <td className="p-4 font-medium">{e.name}</td>
                <td className="p-4 text-gray-300">{e.role}</td>
                <td className="p-4 text-gray-300">{e.dept}</td>

                {/* STATUS */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${
                      e.status === "Active"
                        ? "text-green-400 border-green-500/40 bg-green-500/10"
                        : e.status === "On Leave"
                        ? "text-yellow-400 border-yellow-500/40 bg-yellow-500/10"
                        : "text-blue-400 border-blue-500/40 bg-blue-500/10"
                    }`}
                  >
                    {e.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="p-4 flex gap-2">
                  <button className="px-3 py-1 text-xs rounded bg-blue-500/20 border border-blue-500/30 text-blue-400">
                    View
                  </button>
                  <button className="px-3 py-1 text-xs rounded bg-yellow-500/20 border border-yellow-500/30 text-yellow-400">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-xs rounded bg-red-500/20 border border-red-500/30 text-red-400">
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

      {/* STYLE */}
      <style jsx>{`
        .glass-card {
          background: rgba(15, 15, 15, 0.65);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 0, 0, 0.15);
          border-radius: 16px;
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.08);
        }
      `}</style>

    </div>
  );
}