"use client";

import { File, KeyRound, Map, PieChart, Shapes, User } from "lucide-react";
import Image from "next/image";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Item from "./Item";
import { toggleSidebar } from "@/redux/slices/sidebarSlice";

const Sidebar = () => {
  const data = useSelector((state: any) => state.sidebar);

  const dispatch = useDispatch();

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClick = () => {
    setOpenSidebar(!openSidebar);

    dispatch(toggleSidebar({ openSidebar }));
  };

  return (
    <div
      className={`absolute z-10 sm:relative bg-secondary text-muted-foreground min-h-screen overflow-hidden ${
        data.openSidebar ? "w-80 md:w-72 opacity-100" : "w-0 opacity-0"
      } duration-500 transition-width`}
    >
      <div className="md:flex items-center justify-center mt-6 hidden">
        <Link href="/">
          <Image
            src={"/logo-tax-center.png"}
            width={140}
            height={140}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex px-3 items-center justify-between mt-8 md:hidden">
        <Link href={"/"}>
          <Image
            src={"/logo-tax-center.png"}
            width={120}
            height={120}
            alt="logo"
          />
        </Link>
        <div onClick={handleClick} className="mt-3">
          <Map size={24} className="cursor-pointer text-black" />
        </div>
      </div>
      <div className="mt-6">
        <h1 className="pl-3 font-bold text-muted-foreground">Dashboard</h1>
        <Link href="/brevet">
          <Item label="Overview" icon={PieChart} />
        </Link>
        <Link href="/brevet/users">
          <Item label="Users" icon={User} />
        </Link>
        <Link href="/brevett">
          <Item label="Blog" icon={Shapes} />
        </Link>
        <Link href="/sign-up">
          <Item label="Sign Up" icon={KeyRound} />
        </Link>
        <Item label="User Profile" icon={User}>
          <Item label="Overview" icon={File} />
          <Item label="Project" icon={File} />
          <Item label="Campaign" icon={File} />
          <Item label="Documents" icon={File} />
          <Item label="Followers" icon={File} />
        </Item>
      </div>
    </div>
  );
};

export default Sidebar;
