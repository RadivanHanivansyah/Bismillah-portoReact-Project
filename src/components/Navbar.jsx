import "../style.css";
function Navbar() {
  return (
    <nav className="h-16 flex items-center border justify-around">
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
      <div className="humberger-menu lg:hidden">
        <span className="block border-b h-2 w-7 border-black"></span>
        <span className="block border-b h-2 w-7 border-black"></span>
        <span className="block border-b h-2 w-7 border-black"></span>
      </div>
      <button>Get in Touch</button>
    </nav>
  );
}
export default Navbar;
