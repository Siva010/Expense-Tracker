import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import InfoCard from "../../components/Cards/InfoCard";
import { LuWalletMinimal } from "react-icons/lu";
import { addThousandsSeparator } from "../../utils/helper";
import RecentTransactions from "../../components/Dashboard/RecentTransactions";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import AddIncomeForm from "../../components/Forms/AddIncomeForm";

const Income = () => {
  useUserAuth();

  const [incomeData, setIncomeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const fetchIncomeData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);

      if (response.data) {
        // Backend now returns the correct structure, so use it directly
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong fetching income. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  const handleIncomeAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  useEffect(() => {
    fetchIncomeData();
  }, [refreshTrigger]);

  // Default values for rendering before data loads
  const totalIncome = incomeData?.totalIncome || 0;
  const monthlyIncome = incomeData?.monthlyIncome || 0;
  const recentIncomes = incomeData?.recentIncomes || [];

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <InfoCard
            icon={<LuWalletMinimal />}
            label="Total Income"
            value={addThousandsSeparator(totalIncome)}
            color="bg-orange-500"
          />
          <InfoCard
            icon={<LuWalletMinimal />}
            label="This Month's Income"
            value={addThousandsSeparator(monthlyIncome)}
            color="bg-green-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <AddIncomeForm onIncomeAdded={handleIncomeAdded} />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecentTransactions
              transactions={recentIncomes}
              title="Recent Income Transactions"
              type="income"
            />

            <FinanceOverview
              pageType="income"
              totalIncome={totalIncome}
              monthlyIncome={monthlyIncome}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;
