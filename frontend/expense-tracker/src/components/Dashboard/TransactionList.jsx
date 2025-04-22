import React from "react";
import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard";

// Accept onDelete prop from parent
const TransactionList = ({ transactions, title = "Transactions", type, onDelete }) => {
  return (
    <div className="card h-full flex flex-col"> 
      <div className="flex-shrink-0 flex items-center justify-between mb-4">
        <h5 className="text-lg">{title}</h5>
      </div>

      <div className="flex-grow overflow-y-auto space-y-2 pr-1">
        {transactions?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.type === "income" ? item.source : item.category}
            date={item.date}
            amount={item.amount}
            type={item.type}
            // Remove hideDeleteBtn prop
            // Pass down the specific delete handler for this item
            onDelete={() => onDelete && onDelete(item._id, item.type)} // Pass ID and type
          />
        ))}
        {(!transactions || transactions.length === 0) && (
          <p className="text-center text-gray-500 text-sm py-4">No transactions found.</p>
        )}
      </div>
    </div>
  );
};

export default TransactionList; 