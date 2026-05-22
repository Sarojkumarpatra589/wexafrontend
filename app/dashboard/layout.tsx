import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: 200, padding: 20, background: "#eee" }}>
        <h3>Dashboard</h3>

        <nav>
          <div><Link href="/dashboard">Home</Link></div>
          <div><Link href="/dashboard/employees">Employees</Link></div>
          <div><Link href="/dashboard/attendance">Attendance</Link></div>
          <div><Link href="/dashboard/leaves">Leaves</Link></div>
          <div><Link href="/dashboard/payroll">Payroll</Link></div>
          <div><Link href="/dashboard/tasks">Tasks</Link></div>
        </nav>
      </aside>

      <main style={{ padding: 20 }}>{children}</main>
    </div>
  );
}