import Link from "next/link";

const ButtonNav = ({ children }) => {
  return (
    <Link href="/">
      <a className="relative text-lg text-black dark:text-white hover:text-white font-light inline-block py-1 px-6 bg-transparent transition-all rounded-md after:absolute after:bg-primary dark:after:bg-secondary after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-full after:top-0 after:left-0 after:z-10 after:bg-opacity-50 after:rounded-md">
        <span className="relative z-30">{children}</span>
      </a>
    </Link>
  );
};

export default ButtonNav;
