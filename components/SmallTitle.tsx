import React from "react";

const SmallTitle = ({ children, className }: any) => {
  return (
    <h1
      className={`text-gray-600 font-semibold text-sm py-1 px-2 bg-shadesYellowTaxCenter1/30 rounded-full shadow-md w-fit ${className}`}
    >
      {children}
    </h1>
  );
};

export default SmallTitle;
