import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ data }) {
  return (
    <div className='expenses'>
      {data.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
