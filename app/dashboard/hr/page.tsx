"use client";

import { useState } from "react";
import Link from "next/link";

export default function HRPage() {
  const [search, setSearch] = useState("");

  const hrMembers = [
    {
      id: "HR-001",
      name: "Ananya Das",
      email: "ananya@wexa.com",
      role: "Senior HR Manager",
      department: "Human Resources",
      status: "Active",
    },
    {
      id: "HR-002",
      name: "Rohit Meher",
      email: "rohit@wexa.com",
      role: "Recruiter",
      department: "Talent Acquisition",
      status: "Active",
    },
    {
      id: "HR-003",
      name: "Sneha Patra",
      email: "sneha@wexa.com",
      role: "HR Executive",
      department: "Operations",
      status: "On Leave",
    },
    {
      id: "HR-004",
      name: "Karan Jena",
      email: "karan@wexa.com",
      role: "Payroll Specialist",
      department: "Finance HR",
      status: "Remote",
    },
  ];

  const filtered = hrMembers.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-semibold text-white">
            HR Management
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage HR team, roles and responsibilities
          </p>
        </div>

        <Link
          href="/dashboard/hr/create"
          className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-semibold text-white text-center"
        >
          + Add HR
        </Link>

      </div>

      {/* SEARCH BAR */}
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search HR members..."
          className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white outline-none focus:border-red-500"
        />
      </div>

      {/* TABLE CARD */}
      <div className="glass-card overflow-x-auto">

        <table className="w-full text-sm min-w-[750px]">

          <thead className="bg-zinc-950 text-gray-400 text-xs uppercase">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-800">

            {filtered.map((h, i) => (
              <tr key={i} className="hover:bg-zinc-800/40 transition">

                <td className="p-4 text-gray-400">{h.id}</td>
                <td className="p-4 text-white font-medium">{h.name}</td>
                <td className="p-4 text-gray-300">{h.email}</td>
                <td className="p-4 text-gray-300">{h.role}</td>
                <td className="p-4 text-gray-300">{h.department}</td>

                <td className="p-4">
                  <StatusBadge status={h.status} />
                </td>

                <td className="p-4 flex gap-2">
                  <button className="px-3 py-1 text-xs rounded border border-zinc-700 hover:border-zinc-500 text-gray-300">
                    View
                  </button>
                  <button className="px-3 py-1 text-xs rounded border border-zinc-700 hover:border-red-500 text-red-400">
                    Edit
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
function StatusBadge({ status }: { status: string }) {
  const base = "px-3 py-1 rounded-full text-xs border";

  if (status === "Active") {
    return (
      <span className={`${base} text-green-400 border-green-500/30 bg-green-500/10`}>
        Active
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
    <span className={`${base} text-blue-400 border-blue-500/30 bg-blue-500/10`}>
      Remote
    </span>
  );
}