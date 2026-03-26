import { useState } from "react";
import { NavLink, Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.png"; 

export default function Header() {
  const [open, setOpen] = useState(false);

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-blue-500";

  const navLinks = (
    <div className="flex gap-8 justify-center flex-1">
      <NavLink to="/" className={navStyle} onClick={() => setOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/apps" className={navStyle} onClick={() => setOpen(false)}>
        Apps
      </NavLink>
      <NavLink
        to="/installation"
        className={navStyle}
        onClick={() => setOpen(false)}
      >
        Installation
      </NavLink>
    </div>
  );

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="w-10 h-10" />
          <h1 className="font-bold text-xl text-[#9F62F2]">HERO.IO</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center flex-1 gap-8">
          {navLinks}

          <a
            href="https://github.com/NishatTasnimAli/hero-io"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ml-auto"
          >
            <FaGithub />
            Contribute
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            className="text-2xl text-purple-600"
            onClick={() => setOpen(!open)}
          >
            {open ? <RxCross2 className="text-purple-600" /> : <HiOutlineMenuAlt1 className="text-purple-600" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4 text-sm transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <NavLink to="/" className={navStyle} onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/apps" className={navStyle} onClick={() => setOpen(false)}>
          Apps
        </NavLink>
        <NavLink
          to="/installation"
          className={navStyle}
          onClick={() => setOpen(false)}
        >
          Installation
        </NavLink>

        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-fit"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
}