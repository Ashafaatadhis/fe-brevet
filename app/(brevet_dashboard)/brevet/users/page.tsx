import React from "react";
import Header from "../_components/Header";
import { DataTableDemo } from "@/components/DataTable";

const page = () => {
  return (
    <div>
      <Header mainTitleProps="Dashboard" subTitleProps="Users" />
      <div>
        <h1 className="font-medium mb-6">Users List</h1>
        <DataTableDemo />
      </div>
    </div>
  );
};

export default page;
