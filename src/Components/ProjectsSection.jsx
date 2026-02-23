import React from "react";
import ProjectCard from "./ProjectCard";
import { HiPlus } from "react-icons/hi";

export default function ProjectsSection({ projects }) {
  return (
    <div className="mt-10 px-4  py-5 shadow-sm bg-white rounded-[15px]">
      <h3 className="font-bold">Projects</h3>
      <p className="text-xs mb-5 text-[#A0AEC0]">Architects design houses</p>

      <div className="grid md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#718096] flex flex-col justify-center items-center">
             <p><HiPlus className="text-slate-400 cursor-pointer w-6 h-6"/></p>
             <p className="text-lg font-bold text-[#718096]">Create New Project</p>
           </div>
      </div>
    
    </div>
  );
}