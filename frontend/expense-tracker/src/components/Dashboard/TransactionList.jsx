import React from "react";
import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import { useTheme } from "../../context/ThemeContext";

// Accept onDelete prop from parent
const TransactionList = ({ transactions, title = "Transactions", type, onDelete, hideDeleteBtn }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div className={`card h-full flex flex-col ${
      isDark 
        ? "bg-gray-800" 
        : "bg-white/70 shadow-[0_8px_30px_-4px_rgba(99,102,241,0.25)] hover:shadow-[0_12px_40px_-4px_rgba(99,102,241,0.35)]"
    }`}> 
      <div className="flex-shrink-0 flex items-center justify-between mb-4">
        <h5 className={`text-lg font-medium ${isDark ? "text-white" : "text-gray-800"}`}>{title}</h5>
      </div>

      <div className="flex-grow overflow-y-auto space-y-2 pr-1">
        {transactions?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === "income" ? item.source : item.category}
            date={item.date}
            amount={item.amount}
            type={item.type}
            hideDeleteBtn={hideDeleteBtn}
            onDelete={() => onDelete && onDelete(item._id, item.type)}
          />
        ))}
        {(!transactions || transactions.length === 0) && (
          <p className={`text-center text-sm py-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            No transactions found.
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionList; 