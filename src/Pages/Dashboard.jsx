import React from "react";
import Dailystatuscard from "../Components/Dailystatuscard";
import { dashboardCards } from "../Data/Data";
import ogImage from "../assets/images/og-image 1.svg";
import image2 from "../assets/images/image2.svg";
import Analyticschart from "../Components/Analyticschart";
import SalesChart from "../Components/Saleschart";
import Useractivitycard from "../Components/Useractivitycard";
import Projecttable from "../Components/Projecttable";
import Orders from "../Components/Orders";
import { userCards } from "../Data/Data";
export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 max-w-12xl">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 gap-8 mb-8">
        {dashboardCards.map((card) => (
          <Dailystatuscard
            key={card.id}
            title={card.title}
            amount={card.amount}
            growth={card.growth}
            Icon={card.icon}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[60%] bg-gradient-to-br from-white to-slate-50 rounded-[15px] p-4.5 shadow-[0px_3.5px_5.5px_0px_#00000005]  relative overflow-hidden">
          <div className="flex items-stretch gap-4 ">
            <div className="basis-full md:basis-[60%] flex flex-col">
              <p className="text-[#A0AEC0] font-bold text-xs tracking-wide">
                Built by developers
              </p>
              <p className="text-lg font-bold mt-1 text-slate-900 leading-tight">
                Purity UI Dashboard
              </p>
              <p className="text-sm  text-[#A0AEC0]  mt-1 cursor-pointer">
                From colors, cards, typography to complex elements,you will find
                the full documentation.
              </p>

              <p className="text-xs font-semibold mt-auto  mt-1 hover:text-emerald-700 cursor-pointer">
                Read more →
              </p>
            </div>

            <div className="basis-full w-full lg:basis-[40%] bg-gradient-to-br  rounded-[15px] flex flex-col items-center justify-center shadow-lg">
              <div className="text-2xl font-black text-white">
                <img
                  src={ogImage}
                  alt=""
                  className="w-full h-full object-cover rounded-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-full md:basis-[38%] ">
          <img src={image2} alt="" className="w-full h-full " />
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-[40%] p-4 shadow-[0px_3.5px_5.5px_0px_#00000005]  bg-white/80 rounded-[15px]">
          <Analyticschart />
          <p className=" mt-6 text-[18px] font-bold  text-slate-900 leading-tight">
            Active Users
          </p>
          <span className="text-emerald-700  py-1 rounded-full text-xs font-bold inline-block">
            (+23) <span className="text-[#A0AEC0] font-normal">than last week</span>
          </span>

          <div className="flex gap-2 mt-6">
            {userCards.map((item) => (
              <Useractivitycard
                key={item.id}
                title={item.title}
                value={item.value}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[58%]  p-4 shadow-[0px_3.5px_5.5px_0px_#00000005]  bg-white/80 rounded-[15px]">
          <SalesChart />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-[60%] ">
            <Projecttable/>
        </div>
        <div className="w-full lg:w-[37%]">
           <Orders/>
        </div>
      </div>
     
    </div>
  );
}
