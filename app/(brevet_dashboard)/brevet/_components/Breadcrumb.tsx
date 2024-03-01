import React from "react";

const Breadcrumb = ({ mainTitle, subTitle }: any) => {
  return (
    <div className="gap-x-3 flex flex-row text-muted-foreground">
      <h1>{mainTitle}</h1>
      <span>/</span>
      <h1 className="text-primary">{subTitle}</h1>
    </div>
  );
};

export default Breadcrumb;
