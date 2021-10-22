import React from "react";

const ButtonNav = ({ children }) => {
  return (
    <a
      href="/"
      className="relative text-lg text-black hover:text-white font-light inline-block py-1 px-6 bg-transparent transition-all rounded-md after:absolute after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-full after:top-0 after:left-0 after:z-10 after:bg-opacity-50 after:rounded-md"
    >
      <span className="relative z-30">{children}</span>
    </a>
  );
};

export default ButtonNav;
