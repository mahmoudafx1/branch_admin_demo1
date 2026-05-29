// src/Pages/Subscriptions/Subscriptions.jsx
import { useNavigate } from "react-router-dom";

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    price: "250",
    currency: "جنيه",
    services: "2",
    servicesLabel: "خدمات",
    color: "from-blue-500 to-blue-600",
    textColor: "text-white",
    popular: false,
    current: false,
    features: [
      "2 Active Services",
      "Basic Analytics",
      "Email Support",
      "Mobile App Access",
      "Standard Dashboard",
    ],
    btnClass: "bg-gray-900 hover:bg-gray-800 text-white",
  },
  {
    id: "professional",
    name: "Professional Plan",
    price: "500",
    currency: "جنيه",
    services: "4",
    servicesLabel: "خدمات",
    color: "from-purple-500 to-purple-700",
    textColor: "text-white",
    popular: true,
    current: false,
    features: [
      "4 Active Services",
      "Advanced Analytics",
      "Priority Support",
      "Mobile App Access",
      "Advanced Dashboard",
      "Custom Branding",
    ],
    btnClass: "bg-yellow-400 hover:bg-yellow-500 text-gray-900",
  },
  {
    id: "unlimited",
    name: "Unlimited Plan",
    price: "3500",
    currency: "جنيه",
    services: "Unlimited",
    servicesLabel: "خدمات",
    color: "from-orange-500 to-orange-600",
    textColor: "text-white",
    popular: false,
    current: true,
    features: [
      "Unlimited Services",
      "Premium Analytics",
      "24/7 Priority Support",
      "Mobile App Access",
      "Premium Dashboard",
      "Custom Branding",
      "API Access",
      "Dedicated Account Manager",
    ],
    btnClass: "bg-gray-100 text-gray-500 cursor-default",
  },
];

const paymentHistory = [
  { plan: "Unlimited Plan",    date: "Jan 15, 2026", amount: "$3500" },
  { plan: "Professional Plan", date: "Jan 15, 2025", amount: "$500"  },
  { plan: "Starter Plan",      date: "Jan 15, 2024", amount: "$250"  },
];

export default function Subscriptions() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-50 min-h-full p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Subscriptions</h1>
        <p className="text-sm text-gray-400 mt-0.5">Choose the perfect plan for your business</p>
      </div>

      {/* Current Plan Banner */}
      <div className="bg-blue-700 rounded-2xl p-6 mb-6 text-white flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-200 mb-1">Current Plan</p>
          <h2 className="text-2xl font-bold mb-1">Unlimited Plan</h2>
          <p className="text-3xl font-bold">
            $3500 <span className="text-lg font-normal text-blue-200">/ year</span>
          </p>
          <div className="flex items-center gap-1.5 mt-2 text-blue-200 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Renews on Jan 15, 2027
          </div>
        </div>
        <div className="bg-blue-600 rounded-xl px-5 py-3 text-center">
          <p className="text-xs text-blue-200 mb-0.5">Services</p>
          <p className="text-lg font-bold">Unlimited</p>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl overflow-hidden border-2 ${
              plan.current ? "border-orange-400" : "border-transparent"
            } shadow-sm bg-white`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  ⭐ Most Popular
                </span>
              </div>
            )}

            {/* Colored header */}
            <div className={`bg-gradient-to-br ${plan.color} p-5 pt-7`}>
              <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-4xl font-bold text-white">
                {plan.price} <span className="text-base font-normal">{plan.currency}</span>
              </p>
              <p className="text-white/70 text-sm mt-1">
                {plan.services} <br />{plan.servicesLabel}
              </p>
            </div>

            {/* Features */}
            <div className="p-5 flex flex-col gap-3">
              {plan.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}

              <button
                onClick={() => !plan.current && navigate(`/subscriptions/checkout/${plan.id}`)}
                className={`mt-4 w-full py-3 rounded-xl font-semibold text-sm transition-colors ${plan.btnClass}`}
              >
                {plan.current ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    Current Plan
                  </span>
                ) : "Choose Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50">
          <h2 className="font-bold text-gray-900">Payment History</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {paymentHistory.map((p) => (
            <div key={p.plan} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{p.plan}</p>
                <p className="text-xs text-gray-400">{p.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-sm font-bold text-gray-900">{p.amount}</p>
                <span className="bg-green-50 text-green-600 border border-green-100 text-xs font-semibold px-2.5 py-1 rounded-full">
                  Paid
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}