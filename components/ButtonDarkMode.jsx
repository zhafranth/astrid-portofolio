import { useContext } from "react";
import { darkModeState } from "../context/darkModeContext";

const ButtonDarkMode = () => {
  const { isDarkMode, handleDarkMode } = useContext(darkModeState);
  // console.log(isDarkMode);
  return (
    <div
      className={`w-14 h-7 rounded-full p-1 relative cursor-pointer ml-8 flex transition-all duration-1000 hover:shadow-xl ${
        isDarkMode
          ? "bg-gradient-to-tr from-[#6D85C3] via-[#6D85C3] to-[#334163]"
          : "bg-gradient-to-tl from-[#FFE9AF] via-[#DCE6FF] to-[#DCE6FF]"
      }`}
      onClick={handleDarkMode}
    >
      <div
        className={`h-full w-5 bg-blue-300 rounded-full transition-all duration-500 ${
          isDarkMode ? "ml-7" : "ml-0"
        }`}
      >
        <img
          src={isDarkMode ? "/images/mode-dark.png" : "/images/mode-light.png"}
          alt="mode"
          className="transition-all"
        />
      </div>
    </div>
  );
};

export default ButtonDarkMode;

// bg-gradient-to-tl from-[#FFE9AF] via-[#DCE6FF] to-[#DCE6FF]
