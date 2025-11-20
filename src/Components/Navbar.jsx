import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Target, Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Careers");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Careers", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Skills", path: "/skills" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-black text-white  fixed w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-6 py-3">
        {/* Left Section: Email */}
        <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300">
          <Target size={24} className="text-purple-400 animate-pulse sm:text-28" />
          <span className="text-sm xs:text-base sm:text-lg font-semibold font-sans hover:text-purple-400 transition-all duration-300 truncate">
            mail@geroldesigns.com
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-8 flex-1 justify-center text-sm xs:text-base">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`relative cursor-pointer pb-1 transition-all duration-300 hover:text-purple-400 hover:scale-110 ${
                active === item.name ? "text-purple-400" : ""
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-purple-400 transition-all duration-300 ${
                  active === item.name ? "w-full" : "w-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block ml-auto px-3 sm:px-4 py-1 sm:py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50 active:scale-95 text-sm xs:text-base">
          Connect
        </button>

        {/* Mobile Menu Toggle */}
        <button className="block md:hidden ml-auto" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-[#0d0d0d] transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-3 px-4 sm:px-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setActive(item.name);
                setOpen(false);
              }}
              className={`cursor-pointer pb-1 text-sm xs:text-base transition-all duration-300 hover:text-purple-400 ${
                active === item.name ? "text-purple-400" : ""
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}

          {/* Mobile Button */}
          <button
            className="w-full mt-2 px-3 sm:px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/50 active:scale-95 text-sm xs:text-base"
          >
            Connect
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
