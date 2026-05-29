// src/Pages/Subscriptions/Checkout.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const planDetails = {
  starter:      { name: "Starter Plan",      services: "2 Services",   subtotal: 250,  tax: 35  },
  professional: { name: "Professional Plan", services: "4 Services",   subtotal: 500,  tax: 70  },
  unlimited:    { name: "Unlimited Plan",    services: "Unlimited",     subtotal: 3500, tax: 490 },
};

const savedCards = [
  { id: 1, brand: "visa",       last4: "4242", expires: "12/26" },
  { id: 2, brand: "mastercard", last4: "5555", expires: "08/25" },
];

// Simple card brand logos as SVG text
function CardBrand({ brand }) {
  if (brand === "visa") {
    return (
      <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center">
        <span className="text-white text-xs font-black italic tracking-tight">VISA</span>
      </div>
    );
  }
  return (
    <div className="w-12 h-8 flex items-center justify-center">
      <div className="relative w-8 h-8">
        <div className="absolute left-0 w-5 h-5 rounded-full bg-red-500 top-1.5" />
        <div className="absolute right-0 w-5 h-5 rounded-full bg-yellow-400 top-1.5 opacity-80" />
      </div>
    </div>
  );
}

export default function Checkout() {
  const navigate = useNavigate();
  const { planId } = useParams();
  const plan = planDetails[planId] || planDetails.professional;

  const [paymentMethod, setPaymentMethod] = useState("card"); // "card" | "wallet"
  const [cardView, setCardView] = useState("new");            // "new" | "saved"
  const [selectedCard, setSelectedCard] = useState(1);
  const [saveCard, setSaveCard] = useState(false);
  const [form, setForm] = useState({ number: "", expiry: "", cvv: "", name: "" });

  const total = plan.subtotal + plan.tax;

  return (
    <div className="w-full bg-gray-50 min-h-full p-6">
      {/* Back */}
      <button
        onClick={() => navigate("/subscriptions")}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-5 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
        </svg>
        Back to Plans
      </button>

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Complete Your Purchase</h1>
        <p className="text-sm text-gray-400 mt-0.5">
          Choose your payment method to activate {plan.name}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Left — Payment */}
        <div className="col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-bold text-gray-900 mb-4">Payment Method</h2>

          {/* Method Tabs */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setPaymentMethod("card")}
              className={`flex flex-col items-center gap-1.5 py-4 rounded-xl border-2 transition-all ${
                paymentMethod === "card"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <svg className={`w-6 h-6 ${paymentMethod === "card" ? "text-blue-500" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              <span className={`text-sm font-semibold ${paymentMethod === "card" ? "text-blue-600" : "text-gray-600"}`}>Credit Card</span>
              <span className="text-xs text-gray-400">Pay with Visa or Mastercard</span>
            </button>

            <button
              onClick={() => setPaymentMethod("wallet")}
              className={`flex flex-col items-center gap-1.5 py-4 rounded-xl border-2 transition-all ${
                paymentMethod === "wallet"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <svg className={`w-6 h-6 ${paymentMethod === "wallet" ? "text-blue-500" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
              </svg>
              <span className={`text-sm font-semibold ${paymentMethod === "wallet" ? "text-blue-600" : "text-gray-600"}`}>Digital Wallet</span>
              <span className="text-xs text-gray-400">Pay with wallet balance</span>
            </button>
          </div>

          {/* Credit Card Content */}
          {paymentMethod === "card" && (
            <>
              {cardView === "new" ? (
                <div className="space-y-4">
                  {/* Card Number */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Card Number</label>
                    <input
                      type="text"
                      maxLength={19}
                      placeholder="1234 5678 9012 3456"
                      value={form.number}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "").slice(0, 16);
                        const spaced = val.replace(/(.{4})/g, "$1 ").trim();
                        setForm(p => ({ ...p, number: spaced }));
                      }}
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 placeholder-gray-300"
                    />
                  </div>

                  {/* Expiry + CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength={5}
                        value={form.expiry}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, "").slice(0, 4);
                          if (val.length > 2) val = val.slice(0,2) + "/" + val.slice(2);
                          setForm(p => ({ ...p, expiry: val }));
                        }}
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 placeholder-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">CVV</label>
                      <input
                        type="password"
                        placeholder="123"
                        maxLength={4}
                        value={form.cvv}
                        onChange={(e) => setForm(p => ({ ...p, cvv: e.target.value.replace(/\D/g,"").slice(0,4) }))}
                        className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 placeholder-gray-300"
                      />
                    </div>
                  </div>

                  {/* Cardholder */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="Ahmed Ebrahim"
                      value={form.name}
                      onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 placeholder-gray-300"
                    />
                  </div>

                  {/* Save card + switch */}
                  <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div
                        onClick={() => setSaveCard(!saveCard)}
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${saveCard ? "bg-blue-500 border-blue-500" : "border-gray-300"}`}
                      >
                        {saveCard && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><polyline points="20 6 9 17 4 12"/></svg>}
                      </div>
                      <span className="text-sm text-gray-600">Save this card for future payments</span>
                    </label>
                  </div>

                  <button
                    onClick={() => setCardView("saved")}
                    className="text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors"
                  >
                    Use saved card instead
                  </button>
                </div>
              ) : (
                /* Saved Cards View */
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-gray-500 mb-3">Select a saved card</p>
                  {savedCards.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => setSelectedCard(card.id)}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedCard === card.id ? "border-blue-400 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <CardBrand brand={card.brand} />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                          {card.brand === "visa" ? "Visa" : "Mastercard"} •••• {card.last4}
                        </p>
                        <p className="text-xs text-gray-400">Expires {card.expires}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedCard === card.id ? "border-blue-500" : "border-gray-300"}`}>
                        {selectedCard === card.id && <div className="w-2.5 h-2.5 rounded-full bg-green-500" />}
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => setCardView("new")}
                    className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-500 hover:border-blue-300 hover:text-blue-500 transition-colors"
                  >
                    <span className="text-lg leading-none">+</span> Add New Card
                  </button>
                </div>
              )}
            </>
          )}

          {/* Digital Wallet Content */}
          {paymentMethod === "wallet" && (
            <div className="text-center py-8 text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/>
              </svg>
              <p className="text-sm font-medium text-gray-500">Wallet Balance: <span className="text-gray-900 font-bold">جنيه 1,200</span></p>
              <p className="text-xs mt-1">Your wallet will be charged upon confirmation</p>
            </div>
          )}
        </div>

        {/* Right — Order Summary */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h2 className="font-bold text-gray-900 mb-4">Order Summary</h2>

            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <p className="text-sm font-semibold text-gray-900">{plan.name}</p>
              <p className="text-xs text-gray-400">{plan.services}</p>
            </div>

            <div className="space-y-2.5 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium text-gray-900">جنيه {plan.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tax (14%)</span>
                <span className="font-medium text-gray-900">جنيه {plan.tax}</span>
              </div>
              <div className="border-t border-gray-100 pt-2.5 flex justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="font-bold text-blue-600 text-lg">جنيه {total}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/subscriptions")}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Complete Payment
            </button>

            <p className="text-xs text-gray-400 text-center mt-2.5 leading-relaxed">
              By completing this purchase, you agree to our Terms of Service
            </p>
          </div>

          {/* Secure payment notice */}
          <div className="bg-gray-900 text-white rounded-2xl px-4 py-3.5 flex items-center gap-3">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold">Secure Payment</p>
              <p className="text-xs text-gray-400">Your payment information is encrypted and secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}