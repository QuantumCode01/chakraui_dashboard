import React from "react";
import { FaDiceD6 } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5"
import { IoBuild } from "react-icons/io5";
export default function OverviewTabs({ active, setActive }) {
  const tabs = [
    {
        tab:"Overview",
        icon:FaDiceD6,
    },
    {
        tab:"Teams",
        icon:IoDocuments,
    },
    {
        tab:"Projects",
        icon:IoBuild,
    },
    
   ];

  return (
    <div className="flex gap-6 mt-4 px-6 ml-auto">
      {tabs.map((item) => {
       const Icon=item.icon;

       return(
        <button
          key={item.tab}
          onClick={() => setActive(item.tab)}
          className={`text-[10px] w-35 justify-center flex font-bold py-3 uppercase cursor-pointer ${
            active === item.tab
              ? "shadow-[0px_2px_5.5px_0px_#0000000F] bg-white  rounded-xl"
              : "text-[#2D3748] "
          }`}
        >
           <Icon className="text-sm" />&nbsp;&nbsp;
          {item.tab}
        </button>
       );
        
})}
    </div>
  );
}