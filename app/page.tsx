import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl font-bold mb-6">
          Employee Management System
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mb-10">
          Manage employees, attendance, payroll, leaves, tasks,
          analytics and real-time updates from one centralized dashboard.
        </p>

        <div className="flex gap-4">

          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="border border-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl font-medium">
              Register
            </button>
          </Link>

        </div>

      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-20">

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-3">
            Employee Management
          </h2>

          <p className="text-gray-400">
            Add, update and manage employee profiles with role-based access.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-3">
            Attendance & Leaves
          </h2>

          <p className="text-gray-400">
            Track attendance, work hours and leave requests in real-time.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-3">
            Analytics Dashboard
          </h2>

          <p className="text-gray-400">
            View charts, reports and employee productivity metrics instantly.
          </p>
        </div>

      </section>

    </main>
  );
}