// src/Pages/Staff/EditStaff.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const staffData = {
  1: { firstName: "Mahmoud", lastName: "Ahmed",   role: "Senior Therapist",   email: "mahmoudafx1@gmail.com", phone: "+966 50 123 4567", experience: "8 years", specialties: "Deep Tissue Massage, Swedish Massage", status: "Active" },
  2: { firstName: "Mahmoud", lastName: "Karim",   role: "Massage Specialist", email: "mkarim@gmail.com",       phone: "+966 50 111 2222", experience: "5 years", specialties: "Swedish Massage, Sports Massage",     status: "Active" },
  3: { firstName: "Mahmoud", lastName: "Salem",   role: "Spa Therapist",      email: "msalem@gmail.com",       phone: "+966 50 333 4444", experience: "3 years", specialties: "Aromatherapy, Hot Stone Therapy",    status: "Active" },
  4: { firstName: "Abdelrhman", lastName: "Badr", role: "Senior Therapist",   email: "abadr@gmail.com",        phone: "+966 50 555 6666", experience: "10 years", specialties: "Deep Tissue Massage, Aromatherapy", status: "Active" },
};

export default function EditStaff() {
  const navigate = useNavigate();
  const { id } = useParams();
  const base = staffData[id] || staffData[1];

  const [form, setForm] = useState({ ...base });
  const [image, setImage] = useState(null);

  const handleChange = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleImage = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full bg-gray-50 min-h-full p-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4">
        <span className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/")}>Dashboard</span>
        <span>›</span>
        <span className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/staff")}>Staff</span>
        <span>›</span>
        <span className="text-gray-700 font-medium">Edit Staff</span>
      </nav>

      {/* Title + Actions */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Edit Staff Member</h1>
          <p className="text-sm text-gray-400 mt-0.5">Update information for {form.firstName} {form.lastName}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/staff/${id}`)}
            className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => navigate(`/staff/${id}`)}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
            </svg>
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Form — left 2 cols */}
        <div className="col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <h2 className="text-base font-bold text-gray-900">Basic Information</h2>

          <Field label="Full Name" placeholder="Mahmoud" value={form.firstName} onChange={(v) => handleChange("firstName", v)} icon={<UserIcon />} />
          <Field label="Job Role" placeholder="Senior Therapist" value={form.role} onChange={(v) => handleChange("role", v)} icon={<BriefIcon />} />

          <div className="grid grid-cols-2 gap-4">
            <Field label="Email" placeholder="mahmoudafx1@gmail.com" value={form.email} onChange={(v) => handleChange("email", v)} icon={<MailIcon />} />
            <Field label="Phone" placeholder="+966 50 123 4567" value={form.phone} onChange={(v) => handleChange("phone", v)} icon={<PhoneIcon />} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Join Date" placeholder="" value={""} onChange={() => {}} icon={<CalIcon />} type="date" />
            <Field label="Experience" placeholder="8 years" value={form.experience} onChange={(v) => handleChange("experience", v)} />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Specialties</label>
            <textarea
              rows={3}
              placeholder="Enter specialties separated by commas"
              value={form.specialties}
              onChange={(e) => handleChange("specialties", e.target.value)}
              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 text-gray-700 placeholder-gray-300 resize-none"
            />
            <p className="text-xs text-gray-400 mt-1">Separate multiple specialties with commas</p>
          </div>

          <Field label="Status" placeholder="Active" value={form.status} onChange={(v) => handleChange("status", v)} />
        </div>

        {/* Right sidebar */}
        <div className="flex flex-col gap-4">
          {/* Profile image */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Profile Image</h3>
            <div className="relative mb-3">
              {image ? (
                <img src={image} alt="profile" className="w-full h-36 object-cover rounded-xl" />
              ) : (
                <div className="w-full h-36 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                  {form.firstName[0]}{form.lastName[0]}
                </div>
              )}
              <button
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs transition-colors"
              >
                ✕
              </button>
            </div>
            <label className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 cursor-pointer transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
              </svg>
              Change Image
              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImage(e.target.files[0])} />
            </label>
            <p className="text-xs text-gray-400 text-center mt-1.5">PNG, JPG up to 5MB</p>
          </div>

          {/* Tips */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <p className="text-sm font-semibold text-gray-800 mb-2">💡 Tips</p>
            <ul className="space-y-1.5 text-xs text-gray-500">
              <li>• Keep contact information up to date</li>
              <li>• Add all relevant specialties</li>
              <li>• Update status when staff goes on leave</li>
              <li>• Use a professional profile photo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, value, onChange, icon, type = "text" }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label} <span className="text-red-400">*</span></label>
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

const UserIcon  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BriefIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
const MailIcon  = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PhoneIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const CalIcon   = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;