import React from "react";

export function DepositOrWithdraw({
  transactionType,
  OnChangeamount,
  OnChangeCheckNumber,
  OnSubmit,
}) {
  return (
    <form onSubmit={(e) => OnSubmit(e, transactionType)}>
      <h3>{transactionType}</h3>
      <label htmlFor="amount">Amount</label>
      <input type="text" id="amount" onChange={OnChangeamount} />
      <label htmlFor="checkNumber">CheckNumber</label>
      <input type="text" id="checkNumber" onChange={OnChangeCheckNumber} />
      <button type="submit">Submit</button>
    </form>
  );
}
