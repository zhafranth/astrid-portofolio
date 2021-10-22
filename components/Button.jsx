import React from "react";

const Button = ({ children }) => {
  return (
    <button className="rounded-full text-white px-6 py-3 bg-secondary hover:bg-opacity-80">
      {children}
    </button>
  );
};

export default Button;
