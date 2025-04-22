import React from "react";
import {
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";
import moment from "moment";

// Define thresholds and colors (adjust as needed)
const HIGH_VALUE_THRESHOLD = 1000; // Example threshold

const TransactionInfoCard = ({
  title,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete
}) => {
  const getAmountStyles = () =>
    type === "income"
      ? "bg-green-50 text-green-500 "
      : "bg-red-50 text-red-500";

  // Determine value indicator color
  const isHighValue = amount >= HIGH_VALUE_THRESHOLD;
  let indicatorColor = "bg-gray-300"; // Default/fallback color

  if (type === "income") {
    indicatorColor = isHighValue ? "bg-green-500" : "bg-green-200"; // Darker/Lighter Green
  } else if (type === "expense") {
    indicatorColor = isHighValue ? "bg-red-500" : "bg-red-200"; // Darker/Lighter Red
  }

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/60">
      {/* Value Indicator Circle */}
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
        <div className={`w-3 h-3 rounded-full ${indicatorColor}`}></div>
      </div>

      {/* Transaction Details */}
      <div className="flex-1 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-700 font-medium ">{title}</p>
          <p className="text-xs text-gray-400 mt-1">{moment(date).format("DD MMM YYYY")}</p>
        </div>
        {!hideDeleteBtn && (
          <button
            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer ml-auto"
            onClick={onDelete}
          >
            <LuTrash2 size={18} />
          </button>
        )}
      </div>

      {/* Amount Display */}
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}
      >
        <h6 className="text-xs font-medium ">
          {type === "income" ? "+" : "-"} ₹{amount}
        </h6>
        {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
      </div>
    </div>
  );
};

export default TransactionInfoCard;
