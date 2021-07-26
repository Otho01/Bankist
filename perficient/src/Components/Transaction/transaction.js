import React from "react";

export function depositOrWithdraw({ transaction }) {
  return (
    <section>
      <h3>{transaction}</h3>
      <label htmlFor="checkNumber">Check Number</label>
      <input type="text" id="checkNumber"></input>
      <label htmlFor="amount">Amount</label>
      <input type="text" id="amount">
        Check Number
      </input>
      <button type="submit">Submit</button>
    </section>
  );
}
