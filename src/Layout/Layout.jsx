import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div
        className={`
          fixed top-0 left-0 h-screen w-72 bg-[#f8f9fa] z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar />
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="flex-1 md:ml-72 w-full ">
        <div className="flex items-center bg-white px-4 py-3 shadow-sm md:hidden">
          <button className="md:hidden mr-4" onClick={() => setOpen(!open)}>
            <FiMenu className="w-6 h-6 text-slate-700" />
          </button>

          <Navbar />
        </div>

        <div className="p-6">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
