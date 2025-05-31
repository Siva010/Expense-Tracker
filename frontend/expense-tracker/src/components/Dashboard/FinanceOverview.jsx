import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";
import { addThousandsSeparator } from "../../utils/helper";
<<<<<<< HEAD
=======
import { useTheme } from "../../context/ThemeContext";
>>>>>>> 1c7265a (final product)

// Define colors for consistency
const INCOME_COLOR = "#FF6900"; // Orange
const EXPENSE_COLOR = "#FA2C37"; // Red
const BALANCE_COLOR = "#875CF5"; // Purple
const MONTHLY_INCOME_COLOR = "#22C55E"; // Green
const MONTHLY_EXPENSE_COLOR = "#F87171"; // Lighter Red

const FinanceOverview = ({
  pageType = "dashboard", // default to dashboard view
  totalBalance,
  totalIncome,
  totalExpense,
  monthlyIncome, // Add monthly props
  monthlyExpense,
}) => {
<<<<<<< HEAD
=======
  // const { theme } = useTheme();
  // const isDark = theme === "dark";
>>>>>>> 1c7265a (final product)
  let chartData = [];
  let chartLabel = "";
  let chartTotalAmount = "";
  let chartColors = [];

  if (pageType === "income") {
    chartData = [
      { name: "Total Income", amount: totalIncome || 0 },
      { name: "Monthly Income", amount: monthlyIncome || 0 },
    ];
    chartLabel = "Total Income";
    chartTotalAmount = `₹${addThousandsSeparator(totalIncome || 0)}`;
    chartColors = [INCOME_COLOR, MONTHLY_INCOME_COLOR];
  } else if (pageType === "expense") {
    chartData = [
      { name: "Total Expense", amount: totalExpense || 0 },
      { name: "Monthly Expense", amount: monthlyExpense || 0 },
    ];
    chartLabel = "Total Expense";
    chartTotalAmount = `₹${addThousandsSeparator(totalExpense || 0)}`;
    chartColors = [EXPENSE_COLOR, MONTHLY_EXPENSE_COLOR];
  } else { // Default: Dashboard view
    chartData = [
      { name: "Total Balance", amount: totalBalance || 0 },
      { name: "Total Expenses", amount: totalExpense || 0 },
      { name: "Total Income", amount: totalIncome || 0 },
    ];
    chartLabel = "Total Balance";
    chartTotalAmount = `₹${addThousandsSeparator(totalBalance || 0)}`;
    chartColors = [BALANCE_COLOR, EXPENSE_COLOR, INCOME_COLOR];
  }

  // Filter out data points with zero amount to avoid cluttering the chart/legend
  chartData = chartData.filter(item => item.amount > 0);

  return (
<<<<<<< HEAD
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Financial Overview</h5>
      </div>
=======
    <div className={`card`}> 
>>>>>>> 1c7265a (final product)
      <CustomPieChart
        data={chartData}
        label={chartLabel}
        totalAmount={chartTotalAmount}
        colors={chartColors.slice(0, chartData.length)} // Ensure colors match filtered data
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
