import React from "react";
import { useState } from "react";
import OverviewTabs from "./OverviewTabs";
export default function ProfileHeader({ coverImage, avatar, name, email }) {
     const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div className="relative">

      {/* Cover */}
      <div
        className="h-64 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      />

      {/* Profile Card */}
      <div className="bg-white/60 backdrop-blur-[21px] shadow-[0px_2px_5.5px_0px_#00000005] rounded-2xl mx-6 -mt-16 p-6 flex items-center justify-between">

        <div className="flex items-center gap-4 w-full">
          <img
            src={avatar}
            alt="avatar"
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div>
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
          <OverviewTabs active={activeTab} setActive={setActiveTab}/>
        </div>

      </div>
    </div>
  );
}