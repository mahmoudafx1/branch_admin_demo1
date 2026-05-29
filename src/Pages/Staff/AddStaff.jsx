// src/Pages/Staff/AddStaff.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStaff() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", role: "", age: "",
    email: "", phone: "", salary: "", serviceType: "", startDate: "",
  });

  const handleImage = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const handleChange = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="w-full bg-gray-50 min-h-full p-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
        <span className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/")}>Dashboard</span>
        <span>›</span>
        <span className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/staff")}>Staff</span>
        <span>›</span>
        <span className="text-gray-700 font-medium">Add New Staff</span>
      </nav>

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Add New <span className="text-blue-600">Staff</span>
        </h1>
        <p className="text-sm text-gray-400 mt-1">Fill in staff member details</p>
      </div>

      <div className="max-w-3xl">
        {/* Image Upload */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          className={`border-2 border-dashed rounded-2xl p-10 text-center mb-6 transition-colors cursor-pointer ${
            dragging ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-white hover:border-blue-300"
          }`}
          onClick={() => document.getElementById("file-input").click()}
        >
          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImage(e.target.files[0])}
          />
          {image ? (
            <div className="flex flex-col items-center gap-3">
              <img src={image} alt="preview" className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-100" />
              <p className="text-sm text-gray-500">Click or drop to change</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-700">Drop your image here or <span className="text-blue-500">Browse</span></p>
              <p className="text-xs text-gray-400">Support: JPG, JPEG, PNG</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
          {/* Personal Info */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <Field label="FIRST NAME" placeholder="Mahmoud" value={form.firstName} onChange={(v) => handleChange("firstName", v)} />
              <Field label="LAST NAME" placeholder="Ibrahim" value={form.lastName} onChange={(v) => handleChange("lastName", v)} />
              <Field label="POSITION/ROLE" placeholder="Senior Massage Therapist" value={form.role} onChange={(v) => handleChange("role", v)} />
              <Field label="AGE" placeholder="32" value={form.age} onChange={(v) => handleChange("age", v)} type="number" />
            </div>
          </div>

          <div className="border-t border-gray-50" />

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <Field label="EMAIL ADDRESS" placeholder="mahmoudafx1@gmail.com" value={form.email} onChange={(v) => handleChange("email", v)} icon={<MailIcon />} />
              <Field label="PHONE NUMBER" placeholder="+966 50 123 4567" value={form.phone} onChange={(v) => handleChange("phone", v)} icon={<PhoneIcon />} />
            </div>
          </div>

          <div className="border-t border-gray-50" />

          {/* Employment */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Employment Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <Field label="MONTHLY SALARY (SAR)" placeholder="2500" value={form.salary} onChange={(v) => handleChange("salary", v)} icon={<DollarIcon />} type="number" />
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">SERVICE TYPES</label>
                <div className="relative">
                  <select
                    value={form.serviceType}
                    onChange={(e) => handleChange("serviceType", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-gray-700 appearance-none bg-white"
                  >
                    <option value="">Select service type</option>
                    <option>Deep Tissue Massage</option>
                    <option>Swedish Massage</option>
                    <option>Hot Stone Therapy</option>
                    <option>Aromatherapy</option>
                    <option>Sports Massage</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▾</span>
                </div>
              </div>
              <Field label="START DATE" placeholder="" value={form.startDate} onChange={(v) => handleChange("startDate", v)} icon={<CalIcon />} type="date" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => navigate("/staff")}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => navigate("/staff")}
            className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Save Staff Member
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, value, onChange, icon, type = "text" }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full ${icon ? "pl-9" : "pl-4"} pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-gray-700 placeholder-gray-300`}
        />
      </div>
    </div>
  );
}

const MailIcon  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PhoneIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const DollarIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const CalIcon   = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;