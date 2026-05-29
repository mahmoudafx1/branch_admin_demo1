import { useState } from "react";

const pendingBookings = [
  {
    id: 1,
    initials: "SJ",
    name: "Sarah Johnson",
    service: "Hair Styling & Color",
    date: "Oct 24, 2023",
    time: "10:30 AM",
    staff: "Emma Wilson",
    color: "bg-blue-400",
  },
  {
    id: 2,
    initials: "MC",
    name: "Michael Chen",
    service: "Beard Trim & Shave",
    date: "Oct 24, 2023",
    time: "2:00 PM",
    staff: "James Rodriguez",
    color: "bg-green-400",
  },
  {
    id: 3,
    initials: "ED",
    name: "Emily Davis",
    service: "Manicure & Pedicure",
    date: "Oct 25, 2023",
    time: "11:00 AM",
    staff: "Lisa Anderson",
    color: "bg-purple-400",
  },
  {
    id: 4,
    initials: "DM",
    name: "David Martinez",
    service: "Deep Tissue Massage",
    date: "Oct 25, 2023",
    time: "3:30 PM",
    staff: "Maria Garcia",
    color: "bg-orange-400",
  },
];

const pastBookings = [
  {
    id: 1,
    name: "Jennifer Smith",
    email: "jennifer.smith@email.com",
    service: "Hair Cut & Style",
    date: "Oct 20, 2023",
    time: "9:00 AM",
    staff: "Emma Wilson",
    status: "Completed",
  },
  {
    id: 2,
    name: "Robert Brown",
    email: "robert.brown@email.com",
    service: "Facial Treatment",
    date: "Oct 19, 2023",
    time: "1:30 PM",
    staff: "Lisa Anderson",
    status: "Cancelled",
  },
  {
    id: 3,
    name: "Amanda Taylor",
    email: "amanda.taylor@email.com",
    service: "Swedish Massage",
    date: "Oct 18, 2023",
    time: "10:00 AM",
    staff: "Maria Garcia",
    status: "Completed",
  },
  {
    id: 4,
    name: "Thomas Wilson",
    email: "thomas.wilson@email.com",
    service: "Hot Stone Therapy",
    date: "Oct 17, 2023",
    time: "4:00 PM",
    staff: "Maria Garcia",
    status: "No-show",
  },
];

const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-600",
  "No-show": "bg-gray-100 text-gray-600",
};

// Icons
const CalendarIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <polyline points="12 6 12 12 16 14" strokeWidth="2" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" />
    <circle cx="12" cy="7" r="4" strokeWidth="2" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" strokeWidth="2" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
  </svg>
);

const DotsIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" />
    <polyline points="7 10 12 15 17 10" strokeWidth="2" />
    <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" />
  </svg>
);

const CalIconSmall = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
  </svg>
);

export default function ManageBookings() {
  const [activeTab, setActiveTab] = useState("pending");
  const [bookings, setBookings] = useState(pendingBookings);
  const [filter, setFilter] = useState("");

  const handleApprove = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const handleReject = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const filteredPast = pastBookings.filter(
    (b) =>
      b.name.toLowerCase().includes(filter.toLowerCase()) ||
      b.staff.toLowerCase().includes(filter.toLowerCase())
  );

  const tabs = [
    { key: "pending", label: "Pending Requests", count: bookings.length },
    { key: "upcoming", label: "Upcoming" },
    { key: "past", label: "Past Bookings" },
  ];

  return (
    <div className="w-full bg-gray-50 p-6 font-sans">
      <div className="w-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Manage Bookings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Review and manage appointment requests and client history.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Pending Requests Tab */}
        {activeTab === "pending" && (
          <>
            {bookings.length === 0 ? (
              <div className="text-center py-16 text-gray-400 text-sm">
                No pending requests.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`${b.color} w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold`}
                        >
                          {b.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{b.name}</p>
                          <p className="text-xs text-gray-500">{b.service}</p>
                        </div>
                      </div>
                      <span className="bg-orange-50 text-orange-500 text-xs font-medium px-2.5 py-1 rounded-full border border-orange-100">
                        Pending
                      </span>
                    </div>

                    {/* Details */}
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <CalendarIcon />
                        <span>{b.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <ClockIcon />
                        <span>{b.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <UserIcon />
                        <span>{b.staff}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(b.id)}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(b.id)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                      >
                        Reject
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 rounded-lg transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Past Bookings History */}
            <PastBookingsSection filter={filter} setFilter={setFilter} data={filteredPast} />
          </>
        )}

        {/* Upcoming Tab */}
        {activeTab === "upcoming" && (
          <div className="text-center py-16 text-gray-400 text-sm">
            No upcoming appointments found.
          </div>
        )}

        {/* Past Bookings Tab */}
        {activeTab === "past" && (
          <PastBookingsSection filter={filter} setFilter={setFilter} data={filteredPast} />
        )}
      </div>
    </div>
  );
}

function PastBookingsSection({ filter, setFilter, data }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Past Bookings History</h2>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-0">
        {/* Search */}
        <div className="relative mb-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Filter by client or staff..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors">
            <CalIconSmall />
            Date Range
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors">
            <DownloadIcon />
            Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pb-3 pr-4">
                  Client
                </th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pb-3 pr-4">
                  Service
                </th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pb-3 pr-4">
                  Date & Time
                </th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pb-3 pr-4">
                  Staff
                </th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pb-3 pr-4">
                  Status
                </th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide pb-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                    i === data.length - 1 ? "border-0" : ""
                  }`}
                >
                  <td className="py-4 pr-4">
                    <p className="font-medium text-gray-900">{row.name}</p>
                    <p className="text-xs text-gray-400">{row.email}</p>
                  </td>
                  <td className="py-4 pr-4 text-gray-600">{row.service}</td>
                  <td className="py-4 pr-4 text-gray-600">
                    <p>{row.date}</p>
                    <p className="text-xs text-gray-400">{row.time}</p>
                  </td>
                  <td className="py-4 pr-4 text-gray-600">{row.staff}</td>
                  <td className="py-4 pr-4">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        statusStyles[row.status] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                      <DotsIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
