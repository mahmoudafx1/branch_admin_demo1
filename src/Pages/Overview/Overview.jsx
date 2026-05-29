// Overview.jsx — BooklyX Dashboard Overview Page
// Designed to sit inside a sidebar layout as a flex-1 content area

const recentBookings = [
  { id: 1, name: "Ahmed Mohammed", service: "Deep Tissue Massage", date: "Feb 3, 2026", time: "2:00 PM", amount: "$250", status: "confirmed" },
  { id: 2, name: "Sara Ali", service: "Swedish Massage", date: "Feb 3, 2026", time: "3:30 PM", amount: "$200", status: "confirmed" },
  { id: 3, name: "Omar Hassan", service: "Hot Stone Therapy", date: "Feb 3, 2026", time: "5:00 PM", amount: "$300", status: "pending" },
  { id: 4, name: "Fatima Ibrahim", service: "Aromatherapy", date: "Feb 4, 2026", time: "10:00 AM", amount: "$220", status: "confirmed" },
  { id: 5, name: "Layla Nasser", service: "Aromatherapy", date: "Feb 4, 2026", time: "11:00 AM", amount: "$220", status: "confirmed" },
  { id: 6, name: "Khalid Saeed", service: "Aromatherapy", date: "Feb 4, 2026", time: "12:00 PM", amount: "$220", status: "confirmed" },
];

const topServices = [
  { rank: 1, name: "Deep Tissue Massage", bookings: 450, revenue: "$112,500", growth: 15 },
  { rank: 2, name: "Swedish Massage", bookings: 380, revenue: "$76,000", growth: 12 },
  { rank: 3, name: "Hot Stone Therapy", bookings: 280, revenue: "$84,000", growth: 18 },
  { rank: 4, name: "Aromatherapy", bookings: 140, revenue: "$30,800", growth: 8 },
];

// ─── Icons ───────────────────────────────────────────────────────────────────

const DollarIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);
const CalIcon = () => (
  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const BoxIcon = () => (
  <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);
const UsersIcon = () => (
  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const ArrowIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const TrendIcon = () => (
  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);

// Avatar placeholder with initials
function Avatar({ name, size = "md" }) {
  const colors = ["bg-blue-400", "bg-teal-400", "bg-orange-400", "bg-purple-400", "bg-pink-400", "bg-indigo-400"];
  const idx = name.charCodeAt(0) % colors.length;
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("");
  const sz = size === "md" ? "w-9 h-9 text-sm" : "w-8 h-8 text-xs";
  return (
    <div className={`${sz} ${colors[idx]} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
      {initials}
    </div>
  );
}

export default function Overview() {
  return (
    <div className="w-full bg-gray-50 min-h-full p-6 font-sans">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
        <p className="text-sm text-gray-500 mt-0.5">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* ── Stat Cards ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

        {/* Revenue — green accent card */}
        <div className="col-span-2 lg:col-span-1 bg-green-500 rounded-2xl p-5 text-white shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-white/20 rounded-lg p-2">
              <DollarIcon />
            </div>
          </div>
          <p className="text-xs font-medium text-green-100 uppercase tracking-wide mb-1">Total Revenue</p>
          <p className="text-3xl font-bold tracking-tight">$45,680</p>
          <p className="text-xs text-green-100 mt-1.5">+18.2% from last month</p>
        </div>

        {/* Total Bookings */}
        <StatCard
          icon={<CalIcon />}
          iconBg="bg-blue-50"
          label="Total Bookings"
          value="1,250"
          sub="+23.4% increase"
        />

        {/* Active Services */}
        <StatCard
          icon={<BoxIcon />}
          iconBg="bg-teal-50"
          label="Active Services"
          value="12"
          sub="+2 new services"
        />

        {/* Staff Members */}
        <StatCard
          icon={<UsersIcon />}
          iconBg="bg-orange-50"
          label="Staff Members"
          value="24"
          sub="+4 this month"
        />
      </div>

      {/* ── Main Content ────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Left — Recent Bookings (takes 2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
            <h2 className="font-semibold text-gray-900">Recent Bookings</h2>
            <button className="text-sm text-blue-500 hover:text-blue-600 font-medium transition-colors">
              View All
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {recentBookings.map((b) => (
              <div key={b.id} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
                <Avatar name={b.name} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{b.name}</p>
                  <p className="text-xs text-gray-400">{b.service}</p>
                </div>
                <div className="text-right mr-3 flex-shrink-0">
                  <p className="text-xs text-gray-500">{b.date}</p>
                  <p className="text-xs text-gray-400">{b.time}</p>
                </div>
                <div className="text-right flex-shrink-0 min-w-[80px] flex flex-col items-end gap-1">
                  <p className="text-sm font-semibold text-gray-900">{b.amount}</p>
                  <StatusBadge status={b.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-4">

          {/* Overall Rating */}
          <div className="bg-blue-700 rounded-2xl p-5 text-white shadow-sm">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-sm font-medium text-blue-200">Overall Rating</span>
            </div>
            <p className="text-5xl font-bold tracking-tight mb-1">4.9</p>
            <p className="text-sm text-blue-300">Based on 342 reviews</p>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <ClockIcon />
              <h3 className="font-semibold text-gray-900 text-sm">Today's Schedule</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Morning", count: 5 },
                { label: "Afternoon", count: 8 },
                { label: "Evening", count: 3 },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{s.label}</span>
                  <span className="text-sm font-medium text-gray-900">{s.count} bookings</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-semibold text-gray-900 text-sm mb-3">Quick Actions</h3>
            <div className="space-y-1">
              {["Add Staff Member", "Add Service", "Upgrade Plan"].map((action) => (
                <button
                  key={action}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm text-gray-700 font-medium"
                >
                  {action}
                  <ArrowIcon />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Top Performing Services ─────────────────────────────────────────── */}
      <div className="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-50">
          <h2 className="font-semibold text-gray-900">Top Performing Services</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {topServices.map((s) => (
            <div key={s.rank} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
              <span className="text-xs font-bold text-gray-400 w-6 flex-shrink-0">#{s.rank}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-xs text-gray-400">{s.bookings} bookings</span>
                  <span className="text-xs text-gray-300">•</span>
                  <span className="text-xs text-gray-400">{s.revenue} revenue</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full">
                <TrendIcon />
                <span className="text-xs font-semibold text-green-600">{s.growth}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ icon, iconBg, label, value, sub }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className={`${iconBg} rounded-xl w-10 h-10 flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{sub}</p>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    confirmed: "bg-green-50 text-green-600 border border-green-100",
    pending: "bg-yellow-50 text-yellow-600 border border-yellow-100",
    cancelled: "bg-red-50 text-red-500 border border-red-100",
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${styles[status] || styles.confirmed}`}>
      {status}
    </span>
  );
}
