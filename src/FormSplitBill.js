import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [payingBill, setPayingBill] = useState("user");

  const userExpense = bill ? bill - myExpense : ""; //ternary operator cause at first it will be empty string

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !myExpense) return;
    onSplitBill(payingBill === "user" ? userExpense : -myExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>Your expense </label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(+e.target.value > bill ? myExpense : +e.target.value)
        }
      />

      <label>{selectedFriend.name}'s' expense </label>
      <input type="number" disabled value={userExpense} />

      <label>Who is paying the bill?</label>
      <select
        value={payingBill}
        onChange={(e) => setPayingBill(e.target.value)}
      >
        <option value="user"> You </option>
        <option value="friend"> {selectedFriend.name} </option>
      </select>

      <Button>Split Up</Button>
    </form>
  );
}
