import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Employee Management System</h1>

      <p>
        Manage employees, attendance, payroll, and analytics in one system.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/login">
          <button style={{ marginRight: "10px" }}>Login</button>
        </Link>

        <Link href="/register">
          <button>Register</button>
        </Link>
      </div>
    </main>
  );
}