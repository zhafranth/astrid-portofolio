import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`rounded-full text-white px-12 py-3 bg-secondary hover:bg-opacity-80 ${className} transition-all`}
      style={{ animationFillMode: "backwards" }}
    >
      {children}
    </button>
  );
};

export default Button;
