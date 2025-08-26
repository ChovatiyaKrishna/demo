"use client";
import React, { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const links = ["Home", "State", "Services", "Projects", "Contacts"];

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {

      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <section>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        <div className="mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="h-10 w-10 font-bold bg-white rounded-full overflow-hidden">
            <img src={logo} alt="logo" className="h-full w-full object-cover" />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-5">
            {links.map((link) => (
              <li
                key={link}
                className="text-black cursor-pointer hover:text-blue-600  hover:font-medium transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div
            className="md:hidden text-xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 w-52 h-full bg-black text-white transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <span className="text-lg font-bold">Menu</span>
            <FaTimes className="cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          <div className="flex flex-col gap-6 mt-6 px-6">
            {links.map((link) => (
              <div
                key={link}
                className="cursor-pointer hover:text-gray-300 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
