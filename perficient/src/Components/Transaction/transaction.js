import React from "react";
import { StyledForm } from "./styles";

export function DepositOrWithdraw({
  transactionType,
  OnChangeAmount,
  OnChangeCheckNumber,
  OnSubmit,
}) {
  return (
    <StyledForm debit onSubmit={(e) => OnSubmit(e, transactionType)}>
      <h3>{transactionType}</h3>
      <label htmlFor="amount">Amount</label>
      <input type="text" id="amount" onChange={OnChangeAmount} />
      <label htmlFor="checkNumber">CheckNumber</label>
      <input type="text" id="checkNumber" onChange={OnChangeCheckNumber} />
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
