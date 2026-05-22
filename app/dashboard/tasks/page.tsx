"use client";

export default function TasksPage() {
  const tasks = [
    {
      employee: "Rahul Kumar",
      role: "Frontend Dev",
      title: "Dashboard UI Redesign",
      desc: "Improve HR dashboard with futuristic UI and analytics layout.",
      priority: "High",
      status: "In Progress",
      due: "28 May 2026",
      progress: 72,
    },
    {
      employee: "Priya Sharma",
      role: "HR Manager",
      title: "Hiring Pipeline",
      desc: "Conduct interviews and manage onboarding workflow.",
      priority: "Medium",
      status: "Pending",
      due: "02 June 2026",
      progress: 35,
    },
    {
      employee: "Amit Das",
      role: "Backend Dev",
      title: "Payroll API",
      desc: "Build secure payroll processing system with APIs.",
      priority: "High",
      status: "Completed",
      due: "18 May 2026",
      progress: 100,
    },
    {
      employee: "Neha Singh",
      role: "UI Designer",
      title: "Mobile Wireframes",
      desc: "Design responsive mobile HR system layouts.",
      priority: "Low",
      status: "In Progress",
      due: "10 June 2026",
      progress: 58,
    },
  ];

  return (
    <div className="space-y-10 relative">

      {/* BACK GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Tasks Dashboard
          </h1>
          <p className="text-gray-400 mt-2">
            Manage employee tasks and track progress
          </p>
        </div>

        <button className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow-[0_0_25px_rgba(255,0,0,0.25)]">
          + Create Task
        </button>
      </div>

      {/* GRID (FIXED 3 COLUMN LAYOUT) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

        {tasks.map((t, i) => (
          <div
            key={i}
            className="rounded-3xl border border-white/5 bg-zinc-950/70 backdrop-blur-xl p-6 shadow-[0_0_25px_rgba(255,0,0,0.06)] hover:shadow-[0_0_40px_rgba(255,0,0,0.15)] transition-all duration-300 hover:-translate-y-1"
          >

            {/* EMPLOYEE HEADER */}
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold">
                {t.employee.charAt(0)}
              </div>

              <div>
                <h3 className="text-white font-semibold">
                  {t.employee}
                </h3>
                <p className="text-xs text-gray-500">
                  {t.role}
                </p>
              </div>

            </div>

            {/* TITLE */}
            <h2 className="mt-5 text-xl font-bold text-white">
              {t.title}
            </h2>

            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              {t.desc}
            </p>

            {/* TAGS */}
            <div className="flex gap-2 flex-wrap mt-4">

              <Badge label={t.priority} />
              <Badge label={t.status} />

            </div>

            {/* META */}
            <div className="mt-5 space-y-3">

              <div className="flex justify-between text-sm text-gray-400">
                <span>Due: {t.due}</span>
                <span className="text-red-400 font-semibold">
                  {t.progress}%
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-red-400"
                  style={{ width: `${t.progress}%` }}
                />
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

/* ================= BADGE ================= */
function Badge({ label }: { label: string }) {
  const style =
    label === "High" || label === "Completed"
      ? "text-red-400 border-red-500/20 bg-red-500/10"
      : label === "Medium" || label === "In Progress"
      ? "text-yellow-400 border-yellow-500/20 bg-yellow-500/10"
      : "text-green-400 border-green-500/20 bg-green-500/10";

  return (
    <span className={`px-3 py-1 text-xs rounded-full border ${style}`}>
      {label}
    </span>
  );
}