import React from "react";

export default function ProfileInfo({ data }) {
  return (
    <div className="bg-white px-4 py-5 p rounded-2xl shadow-sm">
      <h3 className="font-bold mb-2">Profile Information</h3>

{Object.entries(data).map(([key, value]) => (
  <div key={key} className="py-2">

    {key === "about" ? (
      <p className="text-xs text-[#A0AEC0] leading-relaxed">
        {value}
      </p>
    ) : key === "social_media" ? (
      <div className="flex gap-3 items-center">
        <span className="text-xs text-gray-500 font-bold capitalize">
          Social media:
        </span>

        <div className="flex gap-4 text-[#A0AEC0] text-lg">
          {value.map((item, index) => {
            const Icon = item.icon;
            return (
              <a key={index} href={item.link}>
                <Icon className="cursor-pointer hover:text-blue-500 transition" />
              </a>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="flex gap-3">
        <span className="text-xs text-gray-500 font-bold capitalize">
          {key.replace("_", " ")}:
        </span>
        <span className="text-xs text-[#A0AEC0]">
          {value}
        </span>
      </div>
    )}

  </div>
))}

    </div>
  );
}