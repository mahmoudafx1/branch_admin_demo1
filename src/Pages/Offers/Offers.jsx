// src/Pages/Offers/Offers.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const offersData = [
  {
    id: 1,
    status: "active",
    discount: "50% OFF",
    discountColor: "bg-yellow-400 text-gray-900",
    title: "Summer Spa Special - 50% OFF",
    business: "Royal Spa Center",
    description: "Get 50% off on all spa services this summer",
    tags: ["homepage", "2450 Clicks", "180 Conv."],
    revenue: "$18,500",
    startDate: "Feb 1, 2026",
    endDate: "Mar 31, 2026",
    bg: "from-stone-400 to-stone-600",
  },
  {
    id: 2,
    status: "active",
    discount: "Free OFF",
    discountColor: "bg-yellow-400 text-gray-900",
    title: "Free Dental Checkup",
    business: "Advanced Dental Clinic",
    description: "Book now and get free dental checkup",
    tags: ["search", "1890 Clicks", "142 Conv."],
    revenue: "$14,200",
    startDate: "Feb 5, 2026",
    endDate: "Feb 28, 2026",
    bg: "from-teal-400 to-teal-600",
  },
  {
    id: 3,
    status: "pending",
    discount: "33% OFF",
    discountColor: "bg-yellow-400 text-gray-900",
    title: "Premium Haircut Package",
    business: "Modern Cuts Barber",
    description: "3 haircuts for the price of 2",
    tags: ["search", "1890 Clicks", "142 Conv."],
    revenue: "$4,250",
    startDate: "Feb 10, 2026",
    endDate: "Mar 15, 2026",
    bg: "from-orange-700 to-gray-900",
  },
  {
    id: 4,
    status: "expired",
    discount: "40% OFF",
    discountColor: "bg-yellow-400 text-gray-900",
    title: "New Year Wellness",
    business: "Royal Spa Center",
    description: "Start the new year with a wellness package",
    tags: ["homepage", "980 Clicks", "60 Conv."],
    revenue: "$6,800",
    startDate: "Jan 1, 2026",
    endDate: "Jan 31, 2026",
    bg: "from-gray-400 to-gray-600",
  },
];

const statusStyle = {
  active:  "bg-green-500 text-white",
  pending: "bg-yellow-500 text-white",
  expired: "bg-gray-400 text-white",
};

export default function Offers() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = offersData.filter((o) => {
    const matchTab = tab === "all" || o.status === "active";
    const matchSearch =
      o.title.toLowerCase().includes(search.toLowerCase()) ||
      o.business.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="w-full bg-gray-50 min-h-full p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Offers</h1>
        <p className="text-sm text-gray-400 mt-0.5">4 total advertisements</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon={<EyeIcon color="text-blue-500" />}     label="Total Clicks"   value="8,520"   />
        <StatCard icon={<TrendIcon color="text-green-500" />}  label="Conversions"    value="687"     />
        <StatCard icon={<DollarIcon color="text-yellow-500" />}label="Total Revenue"  value="$64,950" />
        <StatCard icon={<MegaIcon color="text-purple-500" />}  label="Conv. Rate"     value="8.1%"    />
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setTab("all")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
            tab === "all" ? "bg-blue-700 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          All Ads <span className={`text-xs px-1.5 py-0.5 rounded-full ${tab === "all" ? "bg-white/20" : "bg-gray-100"}`}>4</span>
        </button>
        <button
          onClick={() => setTab("active")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
            tab === "active" ? "bg-blue-700 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          Active <span className={`text-xs px-1.5 py-0.5 rounded-full ${tab === "active" ? "bg-white/20" : "bg-gray-100"}`}>2</span>
        </button>
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
          placeholder="Search advertisements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((offer) => (
          <div key={offer.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Image area */}
            <div className={`relative h-44 bg-gradient-to-br ${offer.bg}`}>
              <div className="absolute inset-0 bg-black/10" />
              {/* Status badge */}
              <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${statusStyle[offer.status]}`}>
                {offer.status}
              </span>
              {/* Discount badge */}
              <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1.5 rounded-full ${offer.discountColor}`}>
                {offer.discount}
              </span>
              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                {[0,1,2].map(i => <span key={i} className={`w-1.5 h-1.5 rounded-full ${i===0?"bg-white":"bg-white/40"}`}/>)}
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900 text-base mb-0.5">{offer.title}</h3>
              <p className="text-xs text-gray-400 mb-1">{offer.business}</p>
              <p className="text-xs text-gray-500 mb-3">{offer.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {offer.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-teal-50 text-teal-600 border border-teal-100 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Revenue + Dates */}
              <div className="space-y-1.5 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Revenue</span>
                  <span className="font-semibold text-gray-900">{offer.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Start Date</span>
                  <span className="font-semibold text-gray-900">{offer.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">End Date</span>
                  <span className="font-semibold text-gray-900">{offer.endDate}</span>
                </div>
              </div>

              <button
                onClick={() => navigate(`/offers/${offer.id}`)}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <EyeIcon color="text-white" size="w-4 h-4" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="mb-3">{icon}</div>
      <p className="text-xs text-gray-400 mb-0.5">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

const EyeIcon    = ({ color = "text-blue-500", size = "w-6 h-6" }) => <svg className={`${size} ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const TrendIcon  = ({ color = "text-green-500" }) => <svg className={`w-6 h-6 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const DollarIcon = ({ color = "text-yellow-500" }) => <svg className={`w-6 h-6 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const MegaIcon   = ({ color = "text-purple-500" }) => <svg className={`w-6 h-6 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M18 8a6 6 0 0 1 0 8"/><path d="M14.93 10.07a2 2 0 0 1 0 3.86"/><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>;