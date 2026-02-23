import React from "react";

export default function Dailystatuscard({ title, amount, growth, Icon }) {
  const isPositive = growth.startsWith("+");
  return (
    <div className="flex bg-white/80 backdrop-blur-xl rounded-[15px] p-4.5 shadow-[0px_3.5px_5.5px_0px_#00000005] border border-teal-100/50">
      <div className="flex flex-col  justify-between w-full ">
        <p className="text-[#A0AEC0] font-bold text-xs tracking-wide">
          {title}
        </p>
        <div className="flex">
          <p className="text-[18px] font-bold  text-slate-900 leading-tight">
            {amount}
          </p>
          <span
            className={`${isPositive ? "text-emerald-700" : "text-red-600"} px-2 py-1 rounded-full text-xs font-bold inline-block`}
          >
            {growth}
          </span>
        </div>
      </div>

      <div className="space-y-1">
        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
