import React from "react";

export default function Useractivitycard({ title, value, Icon }) {
  return (
    <div class="bg-white  p-2 w-[25%]">
      <div class="flex items-center space-x-3">
        <div class="bg-teal-400 p-2 rounded-lg text-white">
          <Icon className="w-3 h-3 text-white" />
        </div>
        <span class="text-[#A0AEC0] font-bold text-xs tracking-wide">
          {title}
        </span>
      </div>

      <div class="mt-3 text-[18px] font-bold  text-slate-900 leading-tight">
        {value}
      </div>

      <div class="mt-2 bg-gray-200 rounded-full h-1">
        <div class="bg-teal-400 h-1 rounded-full w-[60%]"></div>
      </div>
    </div>
  );
}
