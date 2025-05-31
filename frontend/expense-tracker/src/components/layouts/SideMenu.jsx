import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";
<<<<<<< HEAD

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
=======
import { useTheme } from "../../context/ThemeContext";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const { theme } = useTheme();
  const isDark = theme === "dark";
>>>>>>> 1c7265a (final product)

  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
<<<<<<< HEAD
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-300/50 p-5 sticky top-[61px] z-20 ">
=======
    <div className={`w-64 h-[calc(100vh-61px)] border-r p-5 sticky top-[61px] z-20 ${
      isDark 
        ? "bg-gray-900 border-gray-700" 
        : "bg-white border-gray-400"
    }`}>
>>>>>>> 1c7265a (final product)
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profileImageUrl ? (
          <img
            src={user?.profileImageUrl || ""}
            alt={user?.fullName || "User profile"}
            className="w-20 h-20 bg-slate-400 rounded-full "
          />
        ) : (
          <CharAvatar
            fullName={user?.fullName}
            width="w-20"
            height="h-20"
            style="text-xl"
          />
        )}
<<<<<<< HEAD
        <h5 className="text-gray-950 font-medium leading-6 ">
=======
        <h5 className={`font-medium leading-6 ${isDark ? "text-white" : "text-gray-950"}`}>
>>>>>>> 1c7265a (final product)
          {user?.fullName || ""}
        </h5>
      </div>
      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
<<<<<<< HEAD
          className={`w-full flex items-center gap-4 text-[15px] ${
            activeMenu === item.label
              ? "text-white bg-primary"
              : "text-gray-700 hover:bg-gray-100"
          } py-3 px-6 rounded-lg mb-3 transition-colors duration-150 cursor-pointer`}
=======
          className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3 transition-colors duration-150 cursor-pointer ${
            activeMenu === item.label
              ? "text-white bg-primary"
              : isDark
              ? "text-gray-200 hover:bg-gray-800"
              : "text-gray-700 hover:bg-gray-100"
          }`}
>>>>>>> 1c7265a (final product)
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
