import React from "react";
import { Calendar, DollarSign, TrendingUp, Wallet } from "lucide-react";

const Dashboard = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            {/* Filters */}
            <div className="flex gap-3 mb-6">
                {["Today", "This Week", "This Month", "This Year"].map((item, i) => (
                    <button
                        key={i}
                        className={`px-5 py-2 rounded-xl border text-sm transition
                        ${item === "This Month"
                                ? "bg-gray-900 text-white"
                                : "bg-white hover:bg-gray-100 text-gray-600 border-gray-200"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

                {/* Revenue Card */}
                <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-5 rounded-2xl shadow">
                    <div className="flex justify-between">
                        <DollarSign />
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                            +15.7%
                        </span>
                    </div>
                    <p className="text-sm mt-4 opacity-80">TOTAL REVENUE</p>
                    <h2 className="text-3xl font-bold">$68,950</h2>
                    <p className="text-xs opacity-70 mt-1">SAR</p>
                </div>

                {/* Bookings */}
                <div className="bg-white p-5 rounded-2xl shadow border">
                    <div className="text-blue-500">
                        <Calendar />
                    </div>
                    <p className="text-sm text-gray-500 mt-4">TOTAL BOOKINGS</p>
                    <h2 className="text-3xl font-bold">542</h2>
                    <p className="text-xs text-gray-400">Appointments</p>
                </div>

                {/* Avg */}
                <div className="bg-white p-5 rounded-2xl shadow border">
                    <div className="text-green-500">
                        <TrendingUp />
                    </div>
                    <p className="text-sm text-gray-500 mt-4">AVG PER BOOKING</p>
                    <h2 className="text-3xl font-bold">$127</h2>
                    <p className="text-xs text-gray-400">Average</p>
                </div>

                {/* Profit */}
                <div className="bg-white p-5 rounded-2xl shadow border">
                    <div className="text-orange-500">
                        <Wallet />
                    </div>
                    <p className="text-sm text-gray-500 mt-4">NET PROFIT</p>
                    <h2 className="text-3xl font-bold">$58608</h2>
                    <p className="text-xs text-gray-400">After fees</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Revenue Chart */}
                <div className="bg-white p-5 rounded-2xl shadow border">
                    <h3 className="font-semibold mb-4">Revenue vs Expenses</h3>

                    {/* Fake Chart */}
                    <div className="h-64 flex items-end gap-2">
                        {[40, 60, 50, 70, 90, 85].map((h, i) => (
                            <div key={i} className="flex flex-col items-center flex-1">
                                <div
                                    className="w-full bg-green-500 rounded-t-lg"
                                    style={{ height: `${h}%` }}
                                />
                                <div
                                    className="w-full bg-red-400 mt-1 rounded-t-lg"
                                    style={{ height: `${h / 2}%` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Expense Breakdown */}
                <div className="bg-white p-5 rounded-2xl shadow border">
                    <h3 className="font-semibold mb-4">Expense Breakdown</h3>

                    {[
                        { name: "Salaries", value: 49, amount: "$4,800" },
                        { name: "Utilities", value: 9, amount: "$900" },
                        { name: "Marketing", value: 9, amount: "$900" },
                    ].map((item, i) => (
                        <div key={i} className="mb-5">
                            <div className="flex justify-between text-sm">
                                <span>{item.name}</span>
                                <span>{item.amount}</span>
                            </div>

                            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                                <div
                                    className="bg-red-500 h-2 rounded-full"
                                    style={{ width: `${item.value}%` }}
                                />
                            </div>

                            <p className="text-xs text-gray-400 mt-1">
                                {item.value}% of total expenses
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white mt-6 p-4 rounded-2xl shadow border overflow-x-auto">

                <table className="w-full text-sm">
                    <thead className="text-gray-500 border-b">
                        <tr>
                            <th className="text-left p-2">Photo</th>
                            <th className="text-left p-2">Name</th>
                            <th className="text-left p-2">Email</th>
                            <th className="text-left p-2">Time Booking</th>
                            <th className="text-left p-2">Address</th>
                            <th className="text-left p-2">Date</th>
                            <th className="text-left p-2">Price</th>
                            <th className="text-center p-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[
                            {
                                name: "Sarah Ahmed",
                                email: "sara@example.com",
                                time: "04:45 PM",
                                address: "Riyadh, Saudi Arabia",
                                date: "25/1/2026",
                                price: "356 EG"
                            },
                            {
                                name: "Noor Mohammed",
                                email: "noor@example.com",
                                time: "04:45 PM",
                                address: "Jeddah, Saudi Arabia",
                                date: "25/1/2026",
                                price: "356 EG"
                            }
                        ].map((u, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="p-2">
                                    <div className="w-10 h-10 bg-gray-300 rounded-full" />
                                </td>
                                <td className="p-2">{u.name}</td>
                                <td className="p-2 text-gray-500">{u.email}</td>
                                <td className="p-2">{u.time}</td>
                                <td className="p-2">{u.address}</td>
                                <td className="p-2">{u.date}</td>
                                <td className="p-2 font-semibold">{u.price}</td>
                                <td className="p-2 text-center">
                                    <div className="flex justify-center gap-2 text-gray-500">
                                        <button>👁</button>
                                        <button>✏️</button>
                                        <button>🗑</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Dashboard;