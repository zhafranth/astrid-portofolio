import { useState } from "react";

const ButtonDarkMode = ({ onClick }) => {
  const [darkMode, setDarkMode] = useState(false);
  const isDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`w-14 h-7 rounded-full p-1 relative cursor-pointer ml-8 flex transition-all duration-1000 hover:shadow-xl ${
        darkMode
          ? "bg-gradient-to-tr from-[#6D85C3] via-[#334163] to-[#334163]"
          : "bg-gradient-to-tl from-[#FFE9AF] via-[#DCE6FF] to-[#DCE6FF]"
      }`}
      onClick={isDarkMode}
    >
      <div
        className={`h-full w-5 bg-blue-300 rounded-full transition-all duration-500 ${
          darkMode ? "ml-7" : "ml-0"
        }`}
      >
        <img
          src={darkMode ? "/images/mode-dark.png" : "/images/mode-light.png"}
          alt="mode"
          className="transition-all"
        />
      </div>
    </div>
  );
};

export default ButtonDarkMode;
