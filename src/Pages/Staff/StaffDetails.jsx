// src/Pages/Staff/StaffDetails.jsx
import { useNavigate, useParams } from "react-router-dom";

const staffData = {
  1: {
    name: "Mahmoud Ahmed", role: "Senior Massage Therapist",
    totalBookings: 1250, reviews: 245, completed: 1198, monthlyRevenue: "$18,750",
    email: "mahmoudafx1@gmail.com", phone: "+123456789",
    joinDate: "2/5/2000", experience: "8 years",
    specialties: ["Deep Tissue Massage", "Swedish Massage", "Sports Massage", "Aromatherapy"],
    performance: { successRate: 96, satisfaction: 98, punctuality: 94 },
    recentBookings: [
      { client: "Ahmed Mohammed", service: "Deep Tissue Massage", date: "Feb 3, 2026", time: "2:00 PM", amount: "$250", status: "confirmed" },
      { client: "Sara Ali",       service: "Swedish Massage",     date: "Feb 3, 2026", time: "3:30 PM", amount: "$200", status: "confirmed" },
      { client: "Omar Hassan",    service: "Hot Stone Therapy",   date: "Feb 3, 2026", time: "5:00 PM", amount: "$300", status: "pending"   },
      { client: "Fatima Ibrahim", service: "Aromatherapy",        date: "Feb 4, 2026", time: "10:00 AM",amount: "$220", status: "confirmed" },
    ],
  },
};

const fallback = staffData[1];

export default function StaffDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const s = staffData[id] || fallback;

  const initials = s.name.split(" ").map(w => w[0]).join("").slice(0, 2);

  return (
    <div className="w-full bg-gray-50 min-h-full p-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
        <span className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/")}>Dashboard</span>
        <span>›</span>
        <span className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/staff")}>Staff</span>
        <span>›</span>
        <span className="text-gray-700 font-medium">{s.name}</span>
      </nav>

      {/* Hero Card */}
      <div className="bg-gray-900 rounded-2xl p-6 mb-6 text-white">
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-3xl font-bold text-white flex-shrink-0">
            {initials}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold">{s.name}</h1>
                <p className="text-gray-400 text-sm mt-0.5">{s.role}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="flex items-center gap-1.5 bg-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                    Top Performer
                  </span>
                  <span className="flex items-center gap-1.5 bg-green-500 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    ✓ Active
                  </span>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => navigate(`/staff/${id}/edit`)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-xl transition-colors border border-gray-700"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Edit
                </button>
                <button
                  onClick={() => navigate("/staff")}
                  className="flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                    <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3 mt-5">
          {[
            { icon: <PeopleIcon />, label: "Total Bookings",  value: s.totalBookings },
            { icon: <StarIcon />,   label: "Reviews",         value: s.reviews },
            { icon: <BoxIcon />,    label: "Completed",       value: s.completed },
            { icon: <DollarIcon />, label: "Monthly Revenue", value: s.monthlyRevenue },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-800 rounded-xl p-4">
              <div className="text-gray-400 mb-2">{stat.icon}</div>
              <p className="text-xs text-gray-400 mb-0.5">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Basic Info form (read-only style) */}
        <div className="col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
          <h2 className="font-bold text-gray-900">Basic Information</h2>

          <ReadField label="Full Name *"   value={s.name}        icon={<UserIcon />} />
          <ReadField label="Job Role *"    value={s.role}        icon={<BriefIcon />} />
          <div className="grid grid-cols-2 gap-4">
            <ReadField label="Email *"     value={s.email}       icon={<MailIcon />} />
            <ReadField label="Phone *"     value={s.phone}       icon={<PhoneIcon />} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ReadField label="Join Date *" value={s.joinDate}    icon={<CalIcon />} />
            <ReadField label="Experience"  value={s.experience} />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1.5">Specialties</label>
            <div className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl text-gray-400 bg-gray-50 min-h-[80px]">
              Enter specialties separated by commas
            </div>
            <p className="text-xs text-gray-400 mt-1">Separate multiple specialties with commas</p>
          </div>

          <ReadField label="Status *" value="" />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          {/* Specialties */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Specialties</h3>
            <div className="space-y-3">
              {s.specialties.map((sp, i) => (
                <div key={sp} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gray-900 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-700">{sp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Performance</h3>
            <div className="space-y-4">
              <ProgressBar label="SUCCESS RATE"          value={s.performance.successRate}  color="bg-green-500" />
              <ProgressBar label="CUSTOMER SATISFACTION" value={s.performance.satisfaction}  color="bg-blue-500"  />
              <ProgressBar label="PUNCTUALITY"           value={s.performance.punctuality}   color="bg-teal-500"  />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50">
          <h2 className="font-bold text-gray-900">Recent Bookings</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {s.recentBookings.map((b, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-3 hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                {b.client.split(" ").map(w => w[0]).join("").slice(0,2)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{b.client}</p>
                <p className="text-xs text-gray-400">{b.service}</p>
              </div>
              <div className="text-right mr-4">
                <p className="text-xs text-gray-500">{b.date}</p>
                <p className="text-xs text-gray-400">{b.time}</p>
              </div>
              <p className="text-sm font-semibold text-gray-900 mr-3">{b.amount}</p>
              <StatusBadge status={b.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReadField({ label, value, icon }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-400 mb-1.5">{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">{icon}</span>}
        <div className={`${icon ? "pl-9" : "pl-4"} pr-4 py-2.5 text-sm border border-gray-200 rounded-xl text-gray-500 bg-white`}>
          {value || <span className="text-gray-300">—</span>}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, value, color }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
        <span className="text-xs font-bold text-gray-700">{value}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    confirmed: "bg-green-50 text-green-600 border border-green-100",
    pending:   "bg-yellow-50 text-yellow-600 border border-yellow-100",
    cancelled: "bg-red-50 text-red-500 border border-red-100",
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${styles[status] || styles.confirmed}`}>
      {status}
    </span>
  );
}

const PeopleIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const StarIcon   = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const BoxIcon    = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>;
const DollarIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const UserIcon   = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BriefIcon  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
const MailIcon   = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PhoneIcon  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const CalIcon    = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;