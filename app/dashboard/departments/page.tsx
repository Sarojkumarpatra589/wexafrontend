"use client";

import { useState } from "react";

export default function DepartmentPage() {
  const [departments, setDepartments] = useState([
    { id: 1, name: "Engineering", head: "Rahul Kumar", members: 120 },
    { id: 2, name: "HR", head: "Priya Sharma", members: 18 },
    { id: 3, name: "Finance", head: "Amit Das", members: 25 },
  ]);

  const [name, setName] = useState("");
  const [head, setHead] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!name || !head) return;

    if (editId) {
      setDepartments((prev) =>
        prev.map((d) =>
          d.id === editId ? { ...d, name, head } : d
        )
      );
      setEditId(null);
    } else {
      setDepartments([
        ...departments,
        {
          id: Date.now(),
          name,
          head,
          members: Math.floor(Math.random() * 100),
        },
      ]);
    }

    setName("");
    setHead("");
  };

  const handleEdit = (dept: any) => {
    setName(dept.name);
    setHead(dept.head);
    setEditId(dept.id);
  };

  const handleDelete = (id: number) => {
    setDepartments(departments.filter((d) => d.id !== id));
  };

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          DEPARTMENT CONTROL PANEL
        </h1>
        <p className="text-gray-400 mt-2">
          Manage organization structure & teams
        </p>
      </div>

      {/* ===================== */}
      {/* ADD / EDIT FORM */}
      {/* ===================== */}
      <div className="glass-card">
        <h2 className="text-red-400 mb-4">
          {editId ? "Edit Department" : "Add Department"}
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Department Name"
            className="p-3 bg-black border border-red-900/30 rounded-lg outline-none focus:border-red-500"
          />

          <input
            value={head}
            onChange={(e) => setHead(e.target.value)}
            placeholder="Department Head"
            className="p-3 bg-black border border-red-900/30 rounded-lg outline-none focus:border-red-500"
          />

          <button
            onClick={handleSubmit}
            className="bg-red-600 hover:bg-red-700 rounded-lg py-3 font-semibold"
          >
            {editId ? "Update Department" : "Add Department"}
          </button>
        </div>
      </div>

      {/* ===================== */}
      {/* DEPARTMENT TABLE */}
      {/* ===================== */}
      <div className="glass-card">
        <h2 className="text-red-400 mb-4">Department List</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-400 border-b border-red-900/30">
                <th className="p-3">ID</th>
                <th className="p-3">Department</th>
                <th className="p-3">Head</th>
                <th className="p-3">Members</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {departments.map((d) => (
                <tr
                  key={d.id}
                  className="border-b border-red-900/20 hover:bg-red-950/20"
                >
                  <td className="p-3 text-gray-400">{d.id}</td>
                  <td className="p-3 text-white">{d.name}</td>
                  <td className="p-3 text-gray-300">{d.head}</td>
                  <td className="p-3 text-red-400">{d.members}</td>

                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleEdit(d)}
                      className="px-3 py-1 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(d.id)}
                      className="px-3 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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