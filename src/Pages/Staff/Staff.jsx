// src/Pages/Staff/Staff.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialStaff = [
  { id: 1, name: "Mahmoud Ahmed",   role: "Senior Therapist",    rating: 4.9, experience: "10 years", price: "$80", active: true,  avatar: "MA" },
  { id: 2, name: "Mahmoud Karim",   role: "Massage Specialist",  rating: 4.9, experience: "10 years", price: "$80", active: true,  avatar: "MK" },
  { id: 3, name: "Mahmoud Salem",   role: "Spa Therapist",       rating: 4.9, experience: "10 years", price: "$80", active: true,  avatar: "MS" },
  { id: 4, name: "Abdelrhman Badr", role: "Senior Therapist",    rating: 4.9, experience: "10 years", price: "$80", active: true,  avatar: "AB" },
  { id: 5, name: "Abdelrhman Zaki", role: "Senior Therapist",    rating: 4.9, experience: "10 years", price: "$80", active: false, avatar: "AZ" },
  { id: 6, name: "Abdelrhman Omar", role: "Senior Therapist",    rating: 4.9, experience: "10 years", price: "$80", active: true,  avatar: "AO" },
];

const avatarColors = [
  "from-blue-500 to-blue-700",
  "from-teal-500 to-teal-700",
  "from-orange-500 to-orange-700",
  "from-purple-500 to-purple-700",
  "from-pink-500 to-pink-700",
  "from-indigo-500 to-indigo-700",
];

export default function Staff() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = initialStaff.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-gray-50 min-h-full p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage your team and track their performance</p>
        </div>
        <button
          onClick={() => navigate("/staff/add")}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <span className="text-lg leading-none">+</span> Add Staff Member
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Staff",     value: "6"         },
          { label: "Total Bookings",  value: "2030"      },
          { label: "Total Revenue",   value: "$609,000"  },
          { label: "Avg. Rating",     value: "4.7"       },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs text-gray-400 mb-1">{s.label}</p>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search staff..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((member, i) => (
          <div key={member.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Cover + Avatar */}
            <div className="relative h-28 bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 opacity-80" />
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm ring-4 ring-white`}>
                  {member.avatar}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="pt-10 pb-4 px-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-0.5">
                <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${member.active ? "bg-blue-500" : "bg-gray-300"}`} />
              </div>
              <p className="text-xs text-gray-400 mb-3">{member.role}</p>

              {/* Stats row */}
              <div className="flex items-center justify-around text-center border-t border-gray-50 pt-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-gray-700 flex items-center gap-0.5">
                    <span className="text-yellow-400">★</span> {member.rating}
                  </p>
                  <p className="text-[10px] text-gray-400">Rating</p>
                </div>
                <div className="w-px h-6 bg-gray-100" />
                <div>
                  <p className="text-xs font-semibold text-gray-700">{member.experience}</p>
                  <p className="text-[10px] text-gray-400">Experience</p>
                </div>
                <div className="w-px h-6 bg-gray-100" />
                <div>
                  <p className="text-xs font-semibold text-gray-700">{member.price}</p>
                  <p className="text-[10px] text-gray-400">Price</p>
                </div>
              </div>

              <button
                onClick={() => navigate(`/staff/${member.id}`)}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}