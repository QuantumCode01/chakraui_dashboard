import { FiSearch, FiUser, FiSettings, FiBell } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
export default function Navbar() {
  return (
    <div className="flex items-start justify-between mb-6 px-10 py-4">
      <div>
        <div className="text-sm text-slate-400">
          <span className="text-slate-500">Pages</span>
          <span className="mx-2">/</span>
          <span className="text-slate-700 font-medium">Dashboard</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mt-1">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Type here..."
            className="pl-9 pr-4 py-3 rounded-[15px] bg-white  border-[0.5px] border-[#E2E8F0] text-sm w-56"
          />
        </div>

        <div className="flex items-center gap-1 text-sm text-[#718096] cursor-pointer">
          <IoPerson className="w-4 h-4" />
          <span className="font-bold text-sm">Sign In</span>
        </div>

        {/* Icons */}
        <IoMdSettings className="text-[#718096] cursor-pointer w-4 h-4" />
        <IoMdNotifications className="text-[#718096] cursor-pointer" />
      </div>
    </div>
  );
}
