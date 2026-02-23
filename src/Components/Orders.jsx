
import { IoMdNotifications } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { FaDropbox } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { IoCard } from "react-icons/io5";

export default function Orders() {
  const orders = [
    {
      id: 1,
      icon: <IoMdNotifications  />,
      color: "text-teal-500",
      title: "$2400, Design changes",
      time: "22 DEC 7:20 PM",
    },
    {
      id: 2,
      icon: <IoLogoCss3   />,
      color: "text-red-500",
      title: "New order #4219423",
      time: "21 DEC 11:21 PM",
    },
    {
      id: 3,
      icon: <IoCart />,
      color: "text-blue-500",
      title: "Server Payments for April",
      time: "21 DEC 9:28 PM",
    },
    {
      id: 4,
      icon: <IoCard  />,
      color: "text-orange-500",
      title: "New card added for order #3210145",
      time: "20 DEC 3:52 PM",
    },
    {
      id: 5,
      icon: <FaDropbox />,
      color: "text-purple-500",
      title: "Unlock packages for Development",
      time: "19 DEC 11:35 PM",
    },
    {
      id: 6,
      icon: <SiAdobexd />,
      color: "text-fuchsia-600",
      title: "New order #9851258",
      time: "18 DEC 4:41 PM",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_3.5px_5.5px_0px_#00000005]">
      
   
      <h2 className="text-lg font-bold text-slate-800">
        Orders overview
      </h2>
      <p className="text-sm mt-1">
        <span className="text-green-500 font-semibold">+30%</span>{" "}
        <span className="text-slate-400">this month</span>
      </p>


      <div className="mt-6 space-y-8">
        {orders.map((item) => (
          <div key={item.id} className="flex gap-2 relative">
            
          
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg  ${item.color}`}
              >
                {item.icon}
              </div>
              {item.id !== orders.length && (
                <div className="w-[2px] flex-1 bg-slate-200 mt-2"></div>
              )}
            </div>

        
            <div>
              <p className="text-sm font-semibold text-slate-700">
                {item.title}
              </p>
              <p className="text-xs text-slate-400 font-bold mt-1">
                {item.time}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}