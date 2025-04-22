import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import InfoCard from "../../components/Cards/InfoCard";
import { LuHandCoins } from "react-icons/lu";
import { addThousandsSeparator } from "../../utils/helper";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import AddExpenseForm from "../../components/Forms/AddExpenseForm";

const Expense = () => {
  useUserAuth();

  const [expenseData, setExpenseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const fetchExpenseData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(API_PATHS.EXPENSE.GET_ALL_EXPENSE);

      if (response.data) {
        // Backend now returns the correct structure, so use it directly
        setExpenseData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong fetching expense. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  const handleExpenseAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  useEffect(() => {
    fetchExpenseData();
  }, [refreshTrigger]);

  // Default values for rendering before data loads
  const totalExpense = expenseData?.totalExpense || 0;
  const monthlyExpense = expenseData?.monthlyExpense || 0;
  const recentExpenses = expenseData?.recentExpenses || [];

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <InfoCard
            icon={<LuHandCoins />}
            label="Total Expense"
            value={addThousandsSeparator(totalExpense)}
            color="bg-red-500"
          />
          <InfoCard
            icon={<LuHandCoins />}
            label="This Month's Expense"
            value={addThousandsSeparator(monthlyExpense)}
            color="bg-red-400"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <AddExpenseForm onExpenseAdded={handleExpenseAdded} />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecentTransactions
              transactions={recentExpenses}
              title="Recent Expense Transactions"
              type="expense"
            />

            <FinanceOverview
              pageType="expense"
              totalExpense={totalExpense}
              monthlyExpense={monthlyExpense}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Expense;
