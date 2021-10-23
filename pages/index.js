import { useContext } from "react";
import { darkModeState } from "../context/darkModeContext";
import { Hero, Header } from "../components";

export default function Home() {
  const { isDarkMode } = useContext(darkModeState);
  console.log(isDarkMode);
  return (
    <main className={`${isDarkMode && "dark"} `}>
      <div
        className={`font-roboto relative bg-white dark:bg-black transition-all duration-500 min-h-[100vh]`}
      >
        <Header />
        <Hero />
      </div>
    </main>
  );
}
