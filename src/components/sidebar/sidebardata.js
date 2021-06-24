import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { CgCalendarDates } from "react-icons/cg";
import { MdLocalHospital, MdHealing } from "react-icons/md";
import { IoCellular } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
// import { ReactComponent as Logo } from "../../assets/medicx.jpeg";

const SideBarData = [
  {
    title: "Dashboard",
    path: "./dashboard",
    icon: <RiDashboardFill />
  },
  {
    title: "Calender",
    path: "./calender",
    icon: <CgCalendarDates />
  },
  {
    title: "Appointments",
    path: "./appointments",
    icon: <MdLocalHospital />
  },
  {
    title: "Statistics",
    path: "./statistics",
    icon: <IoCellular />
  },
  {
    title: "Chats",
    path: "./chats",
    icon: <BiMessage />
  },
  {
    title: "Support",
    path: "./support",
    icon: <MdHealing />
  }
];

export default SideBarData;
