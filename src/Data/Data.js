import { FaGlobe } from "react-icons/fa6"; import { FaWallet } from "react-icons/fa"; import { IoDocumentText, IoCart } from "react-icons/io5";

import { IoRocketSharp } from "react-icons/io5";import { IoBuild } from "react-icons/io5";

export const dashboardCards = [
  {
    id: 1,
    title: "Today's Money",
    amount: "$53,000",
    growth: "+55%",
    icon: FaWallet,
  },
  {
    id: 2,
    title: "Today's Users",
    amount: "2,300",
    growth: "+5%",
    icon: FaGlobe,
  },
  {
    id: 3,
    title: "New Clients",
    amount: "+3,052",
    growth: "-14%",
    icon: IoDocumentText,
  },
  {
    id: 4,
    title: "Total Sales",
    amount: "$173,000",
    growth: "+8%",
    icon: IoCart,
  },
];

export const userCards = [
  {
    id: 1,
    title: "Users",
    value: "32,984",
    icon: FaWallet,
  },
  {
     id: 2,
    title: "Clicks",
    value: "2.42m",
    icon: IoRocketSharp,
  },
  {
     id: 3,
    title: "Sales",
    value: "$2,400",
    icon: IoCart,
  },
  {
     id: 4,
    title: "Items",
    value: "320",
    icon: IoBuild,
  },
];