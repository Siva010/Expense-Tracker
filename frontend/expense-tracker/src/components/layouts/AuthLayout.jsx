import React from "react";
<<<<<<< HEAD
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex ">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black"> Expense Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat overflow-hidden p-8 relative">
        <div className="w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5 " />

        <div className="grid grid-cols-1 z-20">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-primary"
          />
        </div>
        <img
          src={CARD_2}
          alt="card"
          className="w-64  lg:w-[90%] absolute  bottom-10 shadow-lg shadow-blue-400/15"
        />
=======
import { useTheme } from "../../context/ThemeContext";

const AuthLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen w-full flex items-center justify-center relative overflow-hidden ${isDark ? "bg-gray-900" : "bg-gradient-to-br from-indigo-100 via-white to-indigo-200"}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-[0_8px_20px_-4px_rgba(0,0,0,0.15)] font-semibold transition-all duration-200 focus:outline-none ${
          isDark 
            ? "bg-gray-800 text-yellow-300 hover:bg-gray-700" 
            : "bg-white text-indigo-700 hover:bg-indigo-100 shadow-[0_8px_20px_-4px_rgba(99,102,241,0.25)] hover:shadow-[0_12px_30px_-4px_rgba(99,102,241,0.35)]"
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor"/></svg>
        ) : (
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        )}
        {isDark ? "Light" : "Dark"} Mode
      </button>
      {/* Unique floating accent shape */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full opacity-30 animate-pulse-slow z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300 rounded-full opacity-20 animate-float z-0" />
      <div className={`relative z-10 w-full max-w-md mx-auto p-8 rounded-2xl shadow-2xl border backdrop-blur-md flex flex-col items-center justify-center min-h-[500px] ${
        isDark 
          ? "bg-gray-800 border-gray-700 text-white" 
          : "bg-white/90 border-indigo-100/60 shadow-[0_12px_40px_-4px_rgba(99,102,241,0.3)] hover:shadow-[0_16px_50px_-4px_rgba(99,102,241,0.4)]"
      }`}> 
        <div className="w-full flex flex-col items-center justify-center">{children}</div>
>>>>>>> 1c7265a (final product)
      </div>
    </div>
  );
};

export default AuthLayout;

<<<<<<< HEAD
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-denter justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">${value}</span>
      </div>
    </div>
  );
};
=======
/*
  Animations for accent shapes (add to index.css):
  @keyframes pulse-slow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.5; } }
  .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
  .animate-float { animation: float 6s ease-in-out infinite; }
*/
>>>>>>> 1c7265a (final product)
