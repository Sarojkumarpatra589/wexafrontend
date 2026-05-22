"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddEmployeePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    department: "Engineering",
    status: "Active",
    salary: "",
    joiningDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-red-600 blur-[160px] opacity-20 top-[-120px] left-[-120px]" />
      </div>

      {/* CARD */}
      <div className="relative w-full max-w-3xl glass-card p-8 md:p-10">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Add New Employee
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            Onboard a new team member into WEXA system
          </p>
        </div>

        {/* ================= PERSONAL ================= */}
        <Section title="Personal Information">

          <div className="grid md:grid-cols-2 gap-4">

            <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
            <Input label="Email Address" name="email" value={form.email} onChange={handleChange} />

            <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
            <Input label="Role / Position" name="role" value={form.role} onChange={handleChange} />

          </div>

        </Section>

        {/* ================= WORK ================= */}
        <Section title="Work Details">

          <div className="grid md:grid-cols-2 gap-4">

            <Select
              label="Department"
              name="department"
              value={form.department}
              onChange={handleChange}
              options={["Engineering", "HR", "Design", "Marketing"]}
            />

            <Select
              label="Status"
              name="status"
              value={form.status}
              onChange={handleChange}
              options={["Active", "On Leave", "Remote"]}
            />

            <Input
              label="Joining Date"
              name="joiningDate"
              type="date"
              value={form.joiningDate}
              onChange={handleChange}
            />

          </div>

        </Section>

        {/* ================= SALARY ================= */}
        <Section title="Compensation">

          <Input
            label="Monthly Salary (₹)"
            name="salary"
            value={form.salary}
            onChange={handleChange}
          />

        </Section>

        {/* ACTIONS */}
        <div className="flex flex-col md:flex-row gap-3 justify-end mt-10">

          <Link
            href="/dashboard/employees"
            className="px-5 py-3 text-sm rounded-lg border border-zinc-700 text-gray-300 hover:border-zinc-500 text-center"
          >
            Cancel
          </Link>

          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg shadow-lg shadow-red-900/30">
            Create Employee
          </button>

        </div>

      </div>

      {/* STYLES */}
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

/* ================= SECTION ================= */
function Section({ title, children }: any) {
  return (
    <div className="mb-6">
      <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-3">
        {title}
      </h2>
      {children}
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