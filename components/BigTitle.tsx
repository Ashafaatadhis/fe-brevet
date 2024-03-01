import React from "react";

const BigTitle = ({ children, className }: any) => {
  return <h1 className={`font-bold text-3xl ${className}`}>{children}</h1>;
};

export default BigTitle;
