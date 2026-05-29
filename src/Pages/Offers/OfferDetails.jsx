// src/Pages/Offers/OfferDetails.jsx
import { useNavigate, useParams } from "react-router-dom";

const offersData = {
  1: {
    title: "Summer Spa Special - 50% OFF",
    status: "active",
    placementTag: "Homepage Banner",
    impressions: "125,000",
    clicks: "2,450",
    conversions: "180",
    revenue: "$18,500",
    description:
      "Experience luxury spa treatments at half price this summer! Our expert therapists are ready to help you relax and rejuvenate. Limited time offer - book now and save big on all premium services including deep tissue massage, aromatherapy, and hot stone treatments.",
    discountLabel: "50% OFF · Percentage Off",
    discountColor: "bg-yellow-400 text-gray-900",
    bg: "from-stone-400 to-stone-600",
    ctr: "1.96%",
    convRate: "7.35%",
    ctrAvg: "Industry average: 1.5%",
    convAvg: "Industry average: 5.2%",
    provider: {
      name: "Royal Spa Center",
      category: "SPA",
      email: "contact@royalspa.com",
      phone: "+966 50 123 4567",
      location: "Riyadh, King Fahd Road",
    },
    campaign: {
      applied: "Feb 1, 2026",
      expires: "Mar 31, 2026",
      progress: 45,
    },
  },
  2: {
    title: "Free Dental Checkup",
    status: "active",
    placementTag: "Search Banner",
    impressions: "98,000",
    clicks: "1,890",
    conversions: "142",
    revenue: "$14,200",
    description:
      "Book now and get a completely free dental checkup at Advanced Dental Clinic. Our experienced dentists will provide a thorough examination to keep your smile healthy.",
    discountLabel: "Free OFF · Promotional",
    discountColor: "bg-yellow-400 text-gray-900",
    bg: "from-teal-400 to-teal-700",
    ctr: "1.93%",
    convRate: "7.51%",
    ctrAvg: "Industry average: 1.5%",
    convAvg: "Industry average: 5.2%",
    provider: {
      name: "Advanced Dental Clinic",
      category: "DENTAL",
      email: "contact@dentalclinic.com",
      phone: "+966 50 234 5678",
      location: "Riyadh, Olaya Street",
    },
    campaign: {
      applied: "Feb 5, 2026",
      expires: "Feb 28, 2026",
      progress: 70,
    },
  },
  3: {
    title: "Premium Haircut Package",
    status: "pending",
    placementTag: "Search Banner",
    impressions: "54,000",
    clicks: "1,890",
    conversions: "142",
    revenue: "$4,250",
    description:
      "Get 3 haircuts for the price of 2 at Modern Cuts Barber. Our skilled barbers deliver premium grooming experiences tailored to your style.",
    discountLabel: "33% OFF · Bundle Offer",
    discountColor: "bg-yellow-400 text-gray-900",
    bg: "from-orange-700 to-gray-900",
    ctr: "3.50%",
    convRate: "7.51%",
    ctrAvg: "Industry average: 1.5%",
    convAvg: "Industry average: 5.2%",
    provider: {
      name: "Modern Cuts Barber",
      category: "BARBER",
      email: "info@moderncuts.com",
      phone: "+966 50 345 6789",
      location: "Jeddah, Tahlia Street",
    },
    campaign: {
      applied: "Feb 10, 2026",
      expires: "Mar 15, 2026",
      progress: 20,
    },
  },
  4: {
    title: "New Year Wellness",
    status: "expired",
    placementTag: "Homepage Banner",
    impressions: "45,000",
    clicks: "980",
    conversions: "60",
    revenue: "$6,800",
    description:
      "Start the new year with a complete wellness package. Includes massage, facial, and aromatherapy at 40% off for a limited time.",
    discountLabel: "40% OFF · Percentage Off",
    discountColor: "bg-yellow-400 text-gray-900",
    bg: "from-gray-400 to-gray-600",
    ctr: "2.18%",
    convRate: "6.12%",
    ctrAvg: "Industry average: 1.5%",
    convAvg: "Industry average: 5.2%",
    provider: {
      name: "Royal Spa Center",
      category: "SPA",
      email: "contact@royalspa.com",
      phone: "+966 50 123 4567",
      location: "Riyadh, King Fahd Road",
    },
    campaign: {
      applied: "Jan 1, 2026",
      expires: "Jan 31, 2026",
      progress: 100,
    },
  },
};

const statusStyle = {
  active:  "bg-green-500 text-white",
  pending: "bg-yellow-500 text-white",
  expired: "bg-gray-400 text-white",
};

const categoryColors = {
  SPA:    "bg-teal-100 text-teal-700",
  DENTAL: "bg-blue-100 text-blue-700",
  BARBER: "bg-orange-100 text-orange-700",
};

export default function OfferDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const offer = offersData[id] || offersData[1];
  const p = offer.provider;
  const c = offer.campaign;

  return (
    <div className="w-full bg-gray-50 min-h-full p-6">
      {/* Back */}
      <button
        onClick={() => navigate("/offers")}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-5 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
        </svg>
        Back to Offers
      </button>

      {/* Hero dark card */}
      <div className="bg-gray-900 rounded-2xl p-6 mb-6 text-white">
        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 ${statusStyle[offer.status]}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
              {offer.status}
            </span>
            <span className="bg-gray-700 text-gray-200 text-xs font-medium px-3 py-1.5 rounded-full">
              {offer.placementTag}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
              ✓ Active
            </button>
            <button className="w-9 h-9 bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
              </svg>
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-5">{offer.title}</h1>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: <EyeIcon />,    label: "IMPRESSIONS", value: offer.impressions },
            { icon: <CursorIcon />, label: "CLICKS",      value: offer.clicks },
            { icon: <CheckIcon />,  label: "CONVERSIONS", value: offer.conversions },
            { icon: <DollarIcon />, label: "REVENUE",     value: offer.revenue },
          ].map((s) => (
            <div key={s.label} className="bg-gray-800 rounded-xl p-4">
              <div className="text-gray-400 mb-1.5">{s.icon}</div>
              <p className="text-xs text-gray-400 mb-0.5">{s.label}</p>
              <p className="text-xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left — preview + metrics */}
        <div className="col-span-2 flex flex-col gap-4">

          {/* Ad Preview */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-50">
              <h2 className="font-bold text-gray-900">Advertisement Preview</h2>
            </div>
            {/* Fake ad preview */}
            <div className="m-4 rounded-xl overflow-hidden border border-gray-100">
              <div className={`h-40 bg-gradient-to-br ${offer.bg} relative`}>
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="bg-yellow-50 p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{offer.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{offer.description}</p>
                <span className={`inline-block text-xs font-bold px-4 py-2 rounded-full ${offer.discountColor}`}>
                  {offer.discountLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h2 className="font-bold text-gray-900 mb-4">Performance Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <MetricCard
                icon={<TrendIcon />}
                iconBg="bg-blue-500"
                label="Click-Through Rate"
                value={offer.ctr}
                valueColor="text-blue-600"
                sub={offer.ctrAvg}
              />
              <MetricCard
                icon={<CheckCircleIcon />}
                iconBg="bg-green-500"
                label="Conversion Rate"
                value={offer.convRate}
                valueColor="text-green-600"
                sub={offer.convAvg}
              />
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-4">
          {/* Provider Info */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900">Provider Information</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">BUSINESS NAME</p>
                <p className="text-sm font-medium text-gray-900">{p.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">CATEGORY</p>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${categoryColors[p.category] || "bg-gray-100 text-gray-600"}`}>
                  {p.category}
                </span>
              </div>
              <ProviderRow icon={<MailIcon />} value={p.email} />
              <ProviderRow icon={<PhoneIcon />} value={p.phone} />
              <ProviderRow icon={<LocationIcon />} value={p.location} />
            </div>
          </div>

          {/* Campaign Duration */}
          <div className="bg-gray-900 text-white rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 className="font-bold">Campaign Duration</h3>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-800 rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-0.5">Applied</p>
                <p className="text-sm font-semibold">{c.applied}</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-0.5">Expires</p>
                <p className="text-sm font-semibold">{c.expires}</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-gray-400">Progress</p>
                <p className="text-xs text-gray-400">{c.progress}% completed</p>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${c.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricCard({ icon, iconBg, label, value, valueColor, sub }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
      <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
        <p className={`text-xl font-bold ${valueColor}`}>{value}</p>
        <p className="text-xs text-gray-400">{sub}</p>
      </div>
    </div>
  );
}

function ProviderRow({ icon, value }) {
  return (
    <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3 py-2.5">
      <span className="text-gray-400 flex-shrink-0">{icon}</span>
      <span className="text-sm text-gray-700">{value}</span>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const EyeIcon        = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
const CursorIcon     = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M5 3l14 9-7 1-3 7z"/></svg>;
const CheckIcon      = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const DollarIcon     = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const TrendIcon      = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const CheckCircleIcon= () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const MailIcon       = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PhoneIcon      = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const LocationIcon   = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;