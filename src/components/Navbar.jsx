import { useState } from "react";
import "../style.css";
function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="h-16 flex items-center font-medium border-white justify-between px-5 lg:font-normal lg:px-0 lg:justify-around font-roboto">
      <h3 className="text-xl font-semibold">Radivan</h3>
      <ul
        className={`navbar ${
          active
            ? "translate-x-0 duration-700 ease-in-out"
            : "translate-x-full duration-700 ease-in-out"
        } z-50 absolute top-0 right-0 h-screen bg-black opacity-60 w-1/2 lg:w-auto flex justify-center flex-col gap-y-8 lg:gap-y-0 lg:flex-row text-white lg:h-0 lg:bg-white lg:opacity-100 lg:text-black lg:relative lg:top-0 text-center lg:translate-0 lg:flex items-center lg:gap-x-12`}
      >
        <li className="py-1 group hover:text-blue-500">
          <button className="group-hover:cursor-pointer">Home</button>
          <span className="block origin-left w-full group-hover:animate-border"></span>
        </li>
        <li className="py-1 group hover:text-blue-500">
          <button className="group-hover:cursor-pointer">Project</button>
          <span className="block origin-left w-full group-hover:animate-border"></span>
        </li>
        <li className="py-1 group hover:text-blue-500">
          <button className="group-hover:cursor-pointer">Contact</button>
          <span className="block origin-left w-full group-hover:animate-border"></span>
        </li>
      </ul>
      <div
        className="humberger-menu lg:hidden hover:cursor-pointer z-50"
        onClick={() => (active ? setActive(false) : setActive(true))}
      >
        <span
          className={`block border-b-4 h-2 w-9 border-black ${
            active
              ? "rotate-45 translate-x-[10%] border-red-700 border-b-4 translate-y-[90%] transition-all duration-500"
              : ""
          }`}
        ></span>
        <span
          className={`block border-b-4 h-2 w-9 border-black ${
            active ? "opacity-0 invisible transition-all duration-500" : ""
          }`}
        ></span>
        <span
          className={`block border-b-4 h-2 w-9 border-black ${
            active
              ? "-rotate-45 -translate-y-[90%] border-red-700 border-b-4 transition-all duration-500"
              : ""
          }`}
        ></span>
      </div>
      <button className="hidden lg:block border bg-blue-500 text-white px-8 py-1 rounded-3xl hover:cursor-pointer active:shadow-sm/50 active:shadow-blue-500 active:inset-shadow-sm/50 active:inset-shadow-black">
        Get in Touch
      </button>
    </nav>
  );
}
export default Navbar;
