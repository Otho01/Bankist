import React from "react";

export function depositOrWithdraw({ transaction }) {
  return (
    <section>
      <h3>{transaction}</h3>
      <label htmlFor="checkNumber">Check Number</label>
      <input type="text" id="checkNumber"></input>
      <label htmlFor="amount">Amount</label>
      <button type="submit">Submit</button>
    </section>
  );
}
