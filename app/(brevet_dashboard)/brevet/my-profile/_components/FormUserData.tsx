"use client";

import { Input } from "@/components/ui/input";
import axiosInstance from "@/lib/axiosInstance";
import { AxiosError } from "axios";
import React from "react";

interface ErrorResponseData {
  message: string;
}

const FormUserData = () => {
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(
        "/protected/user/65e12334a52c671bdb603c58"
      );
      console.log(response);
    } catch (error) {
      const err = error as AxiosError<ErrorResponseData>;
      console.log(err.response?.data?.message);
    }
  };

  return (
    <div className="bg-secondary w-full rounded-md p-6" onClick={fetchData}>
      <h1 className="font-bold text-muted-foreground">{`zidan's Profile`}</h1>

      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 justify-between gap-4 md:gap-8">
        <div className="w-full">
          <Input type="text" placeholder="Email" />
        </div>
        <div className="w-full">
          <Input type="text" placeholder="Fullname" />
        </div>
        <div className="w-full">
          <Input type="text" placeholder="Username" />
        </div>
        <div className="w-full">
          <Input type="text" placeholder="Phone Number" />
        </div>
        <div className="w-full">
          <Input type="text" placeholder="Role" />
        </div>
        <div className="w-full">
          <Input type="text" placeholder="Type user" />
        </div>
      </form>
    </div>
  );
};

export default FormUserData;
