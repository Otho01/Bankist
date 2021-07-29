import React from "react";
import {
  StyledButton,
  StyledForm,
  StyledH3,
  StyledInput,
  StyledLabel,
  StyledSection,
} from "./styles";

export function DepositOrWithdraw({
  transactionType,
  OnChangeAmount,
  OnChangeCheckNumber,
  OnSubmit,
  debit,
}) {
  return (
    <StyledForm debit={debit} onSubmit={(e) => OnSubmit(e, transactionType)}>
      <StyledH3>
        {transactionType === "Credit" ? "Add Deposit" : "Subtract Debit"}
      </StyledH3>
      <StyledSection>
        <StyledLabel htmlFor="amount">Amount:</StyledLabel>
        <StyledInput type="text" id="amount" onChange={OnChangeAmount} />
      </StyledSection>
      <StyledSection>
        <StyledLabel htmlFor="checkNumber">Check Number:</StyledLabel>
        <StyledInput
          type="text"
          id="checkNumber"
          onChange={OnChangeCheckNumber}
        />
      </StyledSection>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
