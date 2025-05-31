import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import InfoCard from "../../components/Cards/InfoCard";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "../../utils/helper";
import TransactionList from "../../components/Dashboard/TransactionList";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import { useDashboard } from "../../context/DashboardContext";
<<<<<<< HEAD
=======
import { useTheme } from "../../context/ThemeContext";
>>>>>>> 1c7265a (final product)

const Home = () => {
  useUserAuth();
  const { refreshTrigger } = useDashboard();
  const navigate = useNavigate();
<<<<<<< HEAD
=======
  const { theme } = useTheme();
  const isDark = theme === "dark";
>>>>>>> 1c7265a (final product)

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );

      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    return () => {};
  }, [refreshTrigger]);

  return (
    <DashboardLayout activeMenu="Dashboard">
<<<<<<< HEAD
      <div className="my-5 mx-auto">
=======
      <div className={`my-5 mx-auto ${isDark ? "text-white" : ""}`}>
>>>>>>> 1c7265a (final product)
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color="bg-primary"
          />{" "}
          <InfoCard
            icon={<LuWalletMinimal />}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color="bg-orange-500"
          />{" "}
          <InfoCard
            icon={<LuHandCoins />}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
            color="bg-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
<<<<<<< HEAD
=======
          <div className={isDark ? "text-white" : ""}>
>>>>>>> 1c7265a (final product)
          <TransactionList
            transactions={dashboardData?.recentTransactions || []}
            title="Recent Transactions"
            hideDeleteBtn={true}
          />
<<<<<<< HEAD

=======
          </div>

          <div className={isDark ? "text-white" : ""}>
>>>>>>> 1c7265a (final product)
          <FinanceOverview
            totalBalance={dashboardData?.totalBalance || 0}
            totalIncome={dashboardData?.totalIncome || 0}
            totalExpense={dashboardData?.totalExpense || 0}
          />
<<<<<<< HEAD
=======
          </div>
>>>>>>> 1c7265a (final product)
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
