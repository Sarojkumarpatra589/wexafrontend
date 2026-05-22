"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("access");

    setUser({
      name: "Demo User",
      role: "Admin",
    });
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </main>
  );
}