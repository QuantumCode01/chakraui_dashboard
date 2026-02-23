import React from "react";
import { Switch } from "@headlessui/react";
import { useState } from "react";
export default function PlatformSettings() {
      const [settings, setSettings] = useState([
    { label: "Email me when someone follows me", enabled: true },
    { label: "Email me when someone answers on my post", enabled: false },
    { label: "Subscribe to newsletter", enabled: true },
  ]);
      const toggle = (index) => {
    const newSettings = settings.map((item, i) =>
      i === index
        ? { ...item, enabled: !item.enabled }
        : item
    );

    setSettings(newSettings);
      console.log(
      newSettings[index].label,
      newSettings[index].enabled ? "ON" : "OFF"
    );
  };

  return (
    <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm">
         <h3 className="font-bold mb-4">Platform Settings</h3>

         <p className="text-[#A0AEC0] text-xs">ACCOUNT</p>
      {settings.map((item, index) => (
        <div key={index} className="flex gap-3 items-center">

              <button
            onClick={() => toggle(index)}
            className={`w-7 h-4 flex items-center rounded-full p-1 transition ${
              item.enabled ? "bg-teal-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-2.5 h-[10.4px] bg-white rounded-full transform transition ${
                item.enabled ? "translate-x-2.5" : ""
              }`}
            ></div>
          </button>
          <p className="w-50 text-xs text-[#A0AEC0] ">{item.label}</p>

        
        </div>
      ))}
    </div>
  );
}