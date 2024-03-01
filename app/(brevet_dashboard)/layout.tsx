"use client";
import React from "react";
import Sidebar from "./_components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="px-8 py-10 w-full">{children}</div>
    </section>
  );
};

export default MainLayout;
