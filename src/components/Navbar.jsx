import { useState } from "react";
import "../style.css";
function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="h-16 flex items-center border justify-between px-5 lg:px-0 lg:justify-around font-roboto">
      <h3 className="text-xl font-semibold">Radivan</h3>
      <ul className="navbar hidden lg:flex lg:items-center lg:gap-12">
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
        className="humberger-menu lg:hidden hover:cursor-pointer"
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
      <button className="hidden lg:block">Get in Touch</button>
    </nav>
  );
}
export default Navbar;
