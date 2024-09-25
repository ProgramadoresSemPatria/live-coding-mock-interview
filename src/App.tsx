import { useMemo, useState } from "react";

type Expense = {
  expense: string;
  value: number;
};

function App() {
  const [expense, setExpenses] = useState("");
  const [value, setvalue] = useState(0);
  const [list, setList] = useState<Expense[]>([]);

  const AddExpense = () => {
    if (expense.trim() === "" || value <= 0) return;

    const expenseToAdd = {
      expense,
      value,
    };

    setList((prev) => [...prev, expenseToAdd]);
    setExpenses("");
    setvalue(0);
  };

  const amount = useMemo(() => {
    return list.reduce((acc, item) => acc + item.value, 0);
  }, [list]);

  return (
    <>
      <header>Expenses tracker</header>
      <div className="flex content-center items-center bg-blue-200">
        <p> total: {amount.toString().padEnd(2, ".")}</p>
        <div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            placeholder="Enter expense"
            value={expense}
            onChange={(e) => setExpenses(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            type="number"
            min={0}
            className="input input-bordered w-full max-w-xs"
            placeholder="Amount"
            value={value}
            onChange={(e) => setvalue(Number(e.target.value))}
          />
        </div>
        <button className="btn btn-primary" onClick={AddExpense}>
          Add
        </button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.expense} - {item.value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
