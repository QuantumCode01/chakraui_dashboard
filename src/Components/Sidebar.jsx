import { FiChevronDown } from "react-icons/fi";
import { IoHome } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { FaDropbox } from "react-icons/fa";
import { IoBuild } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";
import { IoHelpCircleSharp } from "react-icons/io5";
import Logo from "../assets/images/icon.svg";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  const menuItems = [
    {
      name: "Tables",
      path: "/tables",
      icon: <IoStatsChart className="w-4 h-4  group-hover:text-white" />,
    },
    {
      name: "Billing",
      path: "/billing",
      icon: <FaDropbox className="w-4 h-4   group-hover:text-white" />,
    },
    {
      name: "RTL",
      path: "/rtl",
      icon: <IoBuild className="w-4 h-4   group-hover:text-white" />,
    },
  ];

  const accountPages = [
    {
      name: "Profile",
      path: "/profile",
      icon: <IoPerson className="w-4 h-4  group-hover:text-white" />,
    },
    {
      name: "Sign In",
      path: "/signin",
      icon: <IoDocument className="w-4 h-4  group-hover:text-white" />,
    },
    {
      name: "Sign Up",
      path: "/signup",
      icon: <IoRocketSharp className="w-4 h-4  group-hover:text-white" />,
    },
  ];
  return (
    <div className="fixed top-0 left-0 h-screen overflow-y-auto w-72  bg-[#f8f9fa] p-6 flex flex-col justify-between custom-scroll">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8  flex items-center justify-center rounded">
            <span className=" font-bold text-sm">
              <img src={Logo} alt="" className="w-full h-full object-cover" />
            </span>
          </div>
          <h1 className="text-slate-700 font-bold text-sm tracking-wide">
            PURITY UI DASHBOARD
          </h1>
        </div>

        <div className="space-y-1">
          <NavLink to="/" end>
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-teal-50 shadow-[0px_3.5px_5.5px_0px_#00000005]"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-xl ${
                    isActive ? "bg-teal-500" : "bg-teal-400"
                  }`}
                >
                  <IoHome className="w-4 h-4 text-white" />
                </div>

                <span
                  className={`text-sm font-semibold ${
                    isActive ? "text-teal-600" : "text-slate-700"
                  }`}
                >
                  Dashboard
                </span>
              </div>
            )}
          </NavLink>

          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-xl transition
       ${
         isActive
           ? "bg-white shadow-[0px_3.5px_5.5px_0px_#00000005]"
           : "hover:bg-white hover:shadow-[0px_3.5px_5.5px_0px_#00000005]"
       }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-xl transition
            ${isActive ? "bg-teal-400" : "bg-white group-hover:bg-teal-400"}
            shadow-[0px_3.5px_5.5px_0px_#00000005]`}
                  >
                    <div
                      className={`${isActive ? "text-white" : "text-[#4FD1C5] group-hover:text-white"}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <span
                    className={`text-sm font-bold transition
            ${
              isActive
                ? "text-slate-700"
                : "text-slate-400 group-hover:text-slate-700"
            }`}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <p className="text-sm font-semibold text-slate-700 mt-5 mb-4 px-4">
          ACCOUNT PAGES
        </p>

        <div className="space-y-1">
          {accountPages.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-xl transition
       ${
         isActive
           ? "bg-white shadow-[0px_3.5px_5.5px_0px_#00000005]"
           : "hover:bg-white hover:shadow-[0px_3.5px_5.5px_0px_#00000005]"
       }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-xl transition
            ${isActive ? "bg-teal-400" : "bg-white group-hover:bg-teal-400"}
            shadow-[0px_3.5px_5.5px_0px_#00000005]`}
                  >
                    <div
                      className={`${isActive ? "text-white" : "text-[#4FD1C5] group-hover:text-white"}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  <span
                    className={`text-sm font-bold transition
            ${
              isActive
                ? "text-slate-700"
                : "text-slate-400 group-hover:text-slate-700"
            }`}
                  >
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl p-6 text-white relative ">
        <div className="w-10 h-10 bg-white/30 flex items-center justify-center rounded-lg mb-4">
          <IoHelpCircleSharp className="w-6 h-6 text-teal-400 " />
        </div>

        <h3 className="font-semibold text-sm">Need help?</h3>
        <p className="text-xs opacity-90 mb-4">Please check our docs</p>

        <button className="bg-white text-slate-700 text-xs font-bold py-2 rounded-xl w-full">
          DOCUMENTATION
        </button>
      </div>
    </div>
  );
}
