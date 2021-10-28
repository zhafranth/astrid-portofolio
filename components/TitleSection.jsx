import React from "react";

const TitleSection = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-5xl text-black dark:text-white transition-all text-center font-ibm-serif font-bold my-24">
      {children}
    </h2>
  );
};

export default TitleSection;
