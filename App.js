
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [dashboard, setDashboard] = useState({});
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/dashboard")
      .then(res => setDashboard(res.data));

    axios.get("http://localhost:5000/api/expenses")
      .then(res => setExpenses(res.data));

    axios.get("http://localhost:5000/api/income")
      .then(res => setIncome(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Personal Finance Tracker</h1>

      <h2>Dashboard</h2>
      <p>Total Income: {dashboard.totalIncome}</p>
      <p>Total Expenses: {dashboard.totalExpenses}</p>
      <p>Balance: {dashboard.balance}</p>

      <h2>Expenses</h2>
      <ul>
        {expenses.map(e => (
          <li key={e.id}>{e.title} - {e.amount}</li>
        ))}
      </ul>

      <h2>Income</h2>
      <ul>
        {income.map(i => (
          <li key={i.id}>{i.source} - {i.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;