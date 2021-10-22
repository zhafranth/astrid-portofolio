import { useState } from "react";
import ButtonNav from "./ButtonNav";
import ButtonDarkMode from "./ButtonDarkMode";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const isDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header
      className={`transition-all absolute top-0 left-0 w-full h-20 z-30 animate-fade-top ${
        darkMode && "dark"
      }`}
    >
      <div className="container h-full flex items-center px-6 justify-between md:justify-end">
        <div className="flex gap-x-8 items-center">
          <ButtonNav>Home</ButtonNav>
          <ButtonNav>Skills</ButtonNav>
          <ButtonNav>Eksperience</ButtonNav>
        </div>
        <ButtonDarkMode onClick={isDarkMode} />
      </div>
    </header>
  );
};

export default Header;
