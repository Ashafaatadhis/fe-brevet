import React from "react";

const TitleDescription = ({ children, className }: any) => {
  return <p className={`text-gray-600 ${className}`}>{children}</p>;
};

export default TitleDescription;
