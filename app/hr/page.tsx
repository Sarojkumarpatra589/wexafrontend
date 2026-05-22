"use client";

export default function HRDashboard() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          HR COMMAND CENTER
        </h1>
        <p className="text-gray-400 mt-2">
          Workforce management & employee operations hub
        </p>
      </div>

      {/* ===================== */}
      {/* HR STATS OVERVIEW */}
      {/* ===================== */}
      <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">

        {[
          ["Total Employees", "512"],
          ["New Hires", "18"],
          ["On Probation", "34"],
          ["Pending Leaves", "24"],
          ["Departments", "8"],
          ["Attrition Rate", "4.2%"],
        ].map((item, i) => (
          <div
            key={i}
            className="glass-card hover:scale-[1.02] transition"
          >
            <p className="text-gray-400 text-xs">{item[0]}</p>
            <h2 className="text-xl font-bold text-red-400 mt-1">
              {item[1]}
            </h2>
          </div>
        ))}
      </section>

      {/* ===================== */}
      {/* HR WORKFLOW PANELS */}
      {/* ===================== */}
      <section className="grid lg:grid-cols-3 gap-6">

        {/* EMPLOYEE PIPELINE */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">Hiring Pipeline</h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>🟢 Interview Scheduled - Rahul K.</li>
            <li>🟡 HR Review - Priya S.</li>
            <li>🔵 Offer Sent - Amit D.</li>
            <li>⚪ Background Check - Neha R.</li>
          </ul>
        </div>

        {/* LEAVE APPROVAL */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">Leave Requests</h3>

          <div className="space-y-3 text-sm">
            <div className="p-3 bg-black border border-red-900/30 rounded-lg">
              Sick Leave - Rahul (Pending)
            </div>
            <div className="p-3 bg-black border border-red-900/30 rounded-lg">
              Casual Leave - Priya (Approved)
            </div>
            <div className="p-3 bg-black border border-red-900/30 rounded-lg">
              Emergency - Amit (Pending)
            </div>
          </div>
        </div>

        {/* HR ACTION PANEL */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">HR Actions</h3>

          <div className="grid gap-3">
            {[
              ["➕ Add Employee"],
              ["📩 Send Offer Letter"],
              ["📊 Run Performance Review"],
              ["📁 Export HR Report"],
            ].map((a, i) => (
              <button
                key={i}
                className="p-3 border border-red-900/40 hover:border-red-500 hover:bg-red-950/40 rounded-lg text-sm text-left transition"
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* PERFORMANCE SNAPSHOT */}
      {/* ===================== */}
      <section className="grid lg:grid-cols-2 gap-6">

        {/* PERFORMANCE GRID */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">Employee Performance</h3>

          <div className="space-y-4">
            {[
              ["High Performers", 78],
              ["Average", 34],
              ["Needs Improvement", 12],
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item[0]}</span>
                  <span className="text-red-400">{item[1]}%</span>
                </div>

                <div className="w-full h-2 bg-black border border-red-900/30 rounded">
                  <div
                    className="h-full bg-red-500"
                    style={{ width: `${item[1]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HR NOTES */}
        <div className="glass-card">
          <h3 className="text-red-400 mb-4">HR Notes</h3>

          <textarea
            className="w-full h-40 p-3 bg-black border border-red-900/30 rounded-lg text-sm outline-none focus:border-red-500"
            placeholder="Write HR observations, feedback, or notes..."
          />
        </div>
      </section>

      {/* GLOBAL STYLE */}
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