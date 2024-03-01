"use client";

import { LogOut, Map } from "lucide-react";
import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/slices/sidebarSlice";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";
import retreiveUserDataFromCookie from "@/lib/retriveUserDataFromCookie";
import Cookies from "js-cookie";

const Header = ({ mainTitleProps, subTitleProps }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const storedUserData = retreiveUserDataFromCookie();

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClick = () => {
    setOpenSidebar(!openSidebar);

    dispatch(toggleSidebar({ openSidebar }));
  };

  const handleLogout = async (e: any) => {
    e.preventDefault();
    try {
      await axiosInstance.delete("/logout");
      // Delete the "authToken" cookie
      Cookies.remove("authToken");

      // Delete the "userData" cookie
      Cookies.remove("userData");
      dispatch(logout("berhasil logout"));
      router.push("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="mb-8 flex flex-row items-center justify-between">
      <div onClick={handleClick} className="flex flex-row gap-x-8">
        <Map size={24} className="cursor-pointer text-black" />
        <Breadcrumb mainTitle={mainTitleProps} subTitle={subTitleProps} />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-fit">
          <Avatar>
            <AvatarImage src={storedUserData.image} alt="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Hello {storedUserData.username}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/brevet/my-profile"}>My Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/brevet/my-course"}>My Course</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/brevet/my-workshop"}>My Workshop</Link>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>
            <Button
              variant={"destructive"}
              size={"sm"}
              className="w-full flex flex-row justify-center gap-x-2"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              <p>Log Out</p>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
