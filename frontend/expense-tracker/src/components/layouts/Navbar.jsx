import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";
<<<<<<< HEAD

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7  sticky top-0 z-30">
      <button
        className="block lg:hidden text-black"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
=======
import { useTheme } from "../../context/ThemeContext";

const Navbar = ({ activeMenu, children }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative flex items-center justify-center 
        border-b border-gray-200/50 backdrop-blur-[2px] 
        py-4 px-7 sticky top-0 z-30 
        ${isDark ? "bg-gray-900" : "bg-white border-gray-400"}`}
    >
      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className={`block lg:hidden absolute left-4 top-1/2 -translate-y-1/2 
          ${isDark ? "text-white" : "text-black"}`}
        onClick={() => setOpenSideMenu(!openSideMenu)}
>>>>>>> 1c7265a (final product)
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>
<<<<<<< HEAD
      <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-white ">
=======

      {/* Center Title */}
      <h2
        className={`mx-auto text-lg font-medium text-center 
          ${isDark ? "text-white" : "text-black"}`}
      >
        Expense Tracker
      </h2>

      {/* Right-Side Children (Optional) */}
      {children && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {children}
        </div>
      )}

      {/* Side Menu (Mobile View) */}
      {openSideMenu && (
        <div
          className={`fixed top-[61px] left-0 h-full w-64 
            ${isDark ? "bg-gray-900" : "bg-white"} 
            shadow-lg z-40`}
        >
>>>>>>> 1c7265a (final product)
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
