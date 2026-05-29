import React from "react";
import { Bell, Menu } from "lucide-react";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center border-b border-slate-200 bg-white px-6">
      <div className="flex w-full items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-95"
          >
            <Menu size={20} />
          </button>

          <div className="hidden sm:block">
            <h5 className="text-sm font-bold leading-none tracking-tight text-slate-800">
              Admin Dashboard
            </h5>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Manage your platform
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="relative rounded-full p-2.5 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-800"
          >
            <Bell size={20} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
          </button>

          <div className="mx-1 hidden h-6 w-px bg-slate-200 sm:block"></div>

          <button className="group flex items-center gap-3 pl-2">
            <div className="hidden text-right md:block">
              <p className="text-sm font-semibold leading-tight text-slate-800">
                Admin User
              </p>
              <p className="text-xs font-medium text-slate-400">
                admin@booklyx.com
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 text-sm font-bold text-white shadow-sm ring-1 ring-slate-200 transition-transform group-hover:scale-105">
              A
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;