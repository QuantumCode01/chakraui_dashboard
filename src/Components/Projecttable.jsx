import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SiAdobexd , SiSlack, SiSpotify } from "react-icons/si";
import { FaAtlassian, FaLinkedin } from "react-icons/fa";
import { DiGoogleDrive } from "react-icons/di";
import member from "../assets/images/members/member.svg";
import member4 from "../assets/images/members/member4.svg";
import member5 from "../assets/images/members/member5.svg";


export default function Projecttable() {
    const memberImages = {
  2: member,
  4: member4,
  5: member5,
};
  const projects = [
    {
      id: 1,
      icon: <SiAdobexd  className="text-fuchsia-600" size={22} />,
      name: "Chakra Soft UI Version",
      members: 5,
      budget: "$14,000",
      progress: 60,
    },
    {
      id: 2,
      icon: <FaAtlassian className="text-blue-500"size={22} />,
      name: "Add Progress Track",
      members: 2,
      budget: "$3,000",
      progress: 10,
    },
    {
      id: 3,
      icon: <SiSlack className="text-yellow-500" size={22}/>,
      name: "Fix Platform Errors",
      members: 2,
      budget: "Not set",
      progress: 100,
    },
    {
      id: 4,
      icon: <SiSpotify className="text-green-500" size={22}/>,
      name: "Launch our Mobile App",
      members: 4,
      budget: "$32,000",
      progress: 100,
    },
    {
      id: 5,
      icon: <DiGoogleDrive className="text-blue-600" size={22}/>,
      name: "Add the New Pricing Page",
      members: 5,
      budget: "$400",
      progress: 25,
    },
    {
      id: 6,
      icon: <FaLinkedin className="text-red-600" />,
      name: "Redesign New Online Shop",
      members: 2,
      budget: "$7,600",
      progress: 40,
    },
  ];
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_3.5px_5.5px_0px_#00000005]  bg-white/80 rounded-[15px] ">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Projects</h2>
          <p className="text-sm text-slate-400 mt-1">
            <span className="text-green-500 font-semibold">30 done</span> this
            month
          </p>
        </div>
        <BsThreeDotsVertical className="text-slate-400 cursor-pointer" />
      </div>

      {/* Table */}
      <div className="mt-6 ">
        {/* Table Head */}
        <div className="grid grid-cols-4 text-xs text-slate-400 font-semibold pb-3 border-b">
          <div>COMPANIES</div>
          <div>MEMBERS</div>
          <div>BUDGET</div>
          <div>COMPLETION</div>
        </div>

        {/* Rows */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-4 items-center py-4 border-b last:border-none"
          >
            {/* Company */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center  rounded-md">
                {project.icon}
              </div>
              <span className="text-sm font-semibold text-slate-700">
                {project.name}
              </span>
            </div>

            {/* Members (Dummy avatars stacked) */}
            {/* Members Image Based on Count */}
            <div>
             <img
  src={memberImages[project.members]}
  alt="members"
  className="h-8 object-contain"
/>
            </div>

            {/* Budget */}
            <div className="text-sm font-semibold text-slate-700">
              {project.budget}
            </div>

            {/* Completion */}
            <div>
              <p className="text-sm font-semibold text-teal-500 mb-1">
                {project.progress}%
              </p>
              <div className="w-full bg-slate-200 h-1 rounded-full">
                <div
                  className="bg-teal-400 h-1 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
