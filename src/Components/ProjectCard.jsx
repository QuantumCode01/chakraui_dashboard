import React from "react";
import member4 from "../assets/images/members/member4.svg";
export default function ProjectCard({ id, image, title, description }) {
  return (
    <div className="bg-white rounded-2xl  overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-35 w-full object-cover rounded-xl"
      />
      <div className="p-2 pt-4 pb-0">
        <p className="text-xs text-[#A0AEC0]">Project#{id}</p>
        <h4 className="font-bold">{title}</h4>
        <p className="text-xs text-[#A0AEC0] mt-2">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <button className=" text-teal-500 border border-teal-500 text-[10px] font-semibold px-7 py-2 rounded-xl">
            View All
          </button>
          <img src={member4} alt="members" className="h-6 object-contain" />
        </div>
      </div>
    </div>
  );
}
