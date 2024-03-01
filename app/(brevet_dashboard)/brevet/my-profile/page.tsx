import React from "react";
import Header from "../_components/Header";
import FormUserData from "./_components/FormUserData";

const page = () => {
  return (
    <div>
      <Header mainTitleProps="Dashboard" subTitleProps="My Profile" />
      <FormUserData />
    </div>
  );
};

export default page;
