"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateHRPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "Human Resources",
    status: "Active",
    experience: "",
    joiningDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("HR Created:", form);
    alert("HR Member Created Successfully (Demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-red-600 blur-[160px] opacity-20 top-[-120px] left-[-120px]" />
      </div>

      {/* CARD */}
      <div className="relative w-full max-w-3xl glass-card p-8 md:p-10">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create HR Member
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            Add a new HR team member to WEXA system
          </p>
        </div>

        {/* FORM GRID */}
        <div className="grid md:grid-cols-2 gap-5">

          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Email Address" name="email" value={form.email} onChange={handleChange} />

          <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
          <Input label="Role (HR Position)" name="role" value={form.role} onChange={handleChange} />

          <Select
            label="Department"
            name="department"
            value={form.department}
            onChange={handleChange}
            options={["Human Resources", "Talent Acquisition", "Payroll", "Operations"]}
          />

          <Select
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
            options={["Active", "On Leave", "Remote"]}
          />

          <Input
            label="Experience (Years)"
            name="experience"
            value={form.experience}
            onChange={handleChange}
          />

          <Input
            label="Joining Date"
            name="joiningDate"
            type="date"
            value={form.joiningDate}
            onChange={handleChange}
          />

        </div>

        {/* ACTIONS */}
        <div className="flex flex-col md:flex-row justify-end gap-3 mt-10">

          <Link
            href="/dashboard/hr"
            className="px-5 py-3 text-sm rounded-lg border border-zinc-700 text-gray-300 hover:border-zinc-500 text-center"
          >
            Cancel
          </Link>

          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg shadow-lg shadow-red-900/30"
          >
            Create HR Member
          </button>

        </div>

      </div>

      {/* STYLE */}
      <style jsx>{`
        .glass-card {
          background: rgba(18, 18, 18, 0.7);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 0, 0, 0.15);
          border-radius: 20px;
          box-shadow: 0 0 40px rgba(255, 0, 0, 0.08);
        }
      `}</style>

    </div>
  );
}

/* ================= INPUT ================= */
function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="text-xs text-gray-400">{label}</label>
      <input
        {...props}
        className="w-full mt-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white outline-none focus:border-red-500"
      />
    </div>
  );
}

/* ================= SELECT ================= */
function Select({ label, options, ...props }: any) {
  return (
    <div>
      <label className="text-xs text-gray-400">{label}</label>
      <select
        {...props}
        className="w-full mt-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white outline-none focus:border-red-500"
      >
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}