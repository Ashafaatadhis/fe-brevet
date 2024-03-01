"use client";
import CardStats from "@/components/CardStats";
import { Coins, Folder, Map, User } from "lucide-react";
import React, { useEffect } from "react";
import Header from "./_components/Header";
import Cookies from "js-cookie";
import axiosInstance from "@/lib/axiosInstance";

const page = () => {
  const fetchData = async () => {
    axiosInstance.interceptors.request.use((config) => {
      console.log(Cookies.get("authToken"));
      // config.headers.Authorization()
      return config;
    });
    await axiosInstance.get("/protected/user");
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header mainTitleProps="Dashboard" subTitleProps="Overview" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8">
        <CardStats
          label="Projects"
          icon={Folder}
          statsNumber={21}
          trendPercentage={3.5}
          isBlue
        />
        <CardStats
          label="Members"
          icon={User}
          statsNumber={36}
          trendPercentage={5.5}
        />
        <CardStats
          label="Clients"
          icon={Folder}
          statsNumber={8}
          trendPercentage={-1.5}
          isBlue
        />
        <CardStats
          label="Revenues"
          icon={Coins}
          statsNumber={150986}
          trendPercentage={23.8}
        />
      </div>
    </div>
  );
};

export default page;
