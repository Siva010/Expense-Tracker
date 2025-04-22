const xlsx = require("xlsx");
const Expense = require("../models/Expense");
const moment = require("moment");

//Add Expense source
exports.addExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, category, amount, date } = req.body;

    // Validation: Check for missing fields
    if (!category || !amount || !date || !icon) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newExpense = new Expense({
      userId,
      icon,
      category,
      amount,
      date: new Date(date),
      type: "expense",
    });
    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    console.error("Error adding Expense:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//Get All Expense source with Aggregates
exports.getAllExpense = async (req, res) => {
  const userId = req.user.id;
  try {
    const allExpense = await Expense.find({ userId }).sort({ date: -1 });

    // Calculate Total Expense
    const totalExpense = allExpense.reduce((sum, item) => sum + item.amount, 0);

    // Calculate Monthly Expense (Based on the month of the MOST RECENT transaction)
    let monthlyExpense = 0;
    if (allExpense.length > 0) {
        const mostRecentDate = moment(allExpense[0].date);
        const startOfMonth = mostRecentDate.clone().startOf('month').toDate();
        const endOfMonth = mostRecentDate.clone().endOf('month').toDate();

        monthlyExpense = allExpense
          .filter(item => moment(item.date).isBetween(startOfMonth, endOfMonth, null, '[]'))
          .reduce((sum, item) => sum + item.amount, 0);
    }

    // Get Recent Expenses (e.g., latest 5)
    const recentExpenses = allExpense.slice(0, 5);

    // Prepare last 30 days expenses
    const thirtyDaysAgo = moment().subtract(30, 'days').startOf('day').toDate();
    const last30daysExpenses = {
        transactions: allExpense.filter(item => moment(item.date).isSameOrAfter(thirtyDaysAgo))
    };

    res.json({
      totalExpense,
      monthlyExpense, // Now calculated based on most recent transaction's month
      recentExpenses,
      last30daysExpenses,
      allExpense
    });

  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//delete Expense  source
exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("Error deleting Expense:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//download Expense  Excel
exports.downloadExpenseExcel = async (req, res) => {
  const userId = req.user.id;
  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });

    // Prepare data for Excel
    const data = expense.map((item) => ({
      category: item.category,
      Amount: item.amount,
      Date: item.date,
    }));
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "expense");
    xlsx.writeFile(wb, "expense_details.xlsx");
    res.download("expense_details.xlsx");
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
