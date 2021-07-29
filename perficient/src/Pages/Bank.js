import { useEffect, useState } from "react";
import { DepositOrWithdraw } from "../Components/Transaction/transaction";
import Moment from "react-moment";
import {
  StyledMain,
  StyledSection,
  StyledTable,
  StyledTd,
  StyledTh,
} from "./styles";

export function BankPage() {
  const newDate = <Moment format="YYYY-MM-DD hh:mm:ss"></Moment>;
  const [amount, setAmount] = useState(0);
  const [check, setCheck] = useState(0);
  const [transactionList, setTransactionList] = useState([
    {
      Date: newDate,
      Type: "Type",
      Check: check,
      amount: amount,
    },
  ]);

  useEffect(() => {
    console.log(transactionList, check);
  }, [transactionList]);

  function handleSubmit(e, transactionType) {
    e.preventDefault();
    setTransactionList([
      ...transactionList,
      {
        Check: check,
        amount,
        transactionType,
        date: newDate,
      },
    ]);
  }
  function tableTittle() {
    const tableHeader = Object.keys(transactionList[0]);
    return (
      !!transactionList &&
      tableHeader.map((key, index) => {
        return <StyledTh key={index}>{`${key}:`}</StyledTh>;
      })
    );
  }
  function tableData() {
    return transactionList.map((transaction, i) => {
      return transactionList.indexOf(transaction) !== 0 ? (
        <tr key={`tr-${transactionList.indexOf(transaction)}`}>
          <StyledTd key={transaction[i]}>{transaction.date}</StyledTd>
          <StyledTd key={`tr-${transactionList.indexOf(transaction)}`}>
            {transaction.transactionType}
          </StyledTd>
          <StyledTd key={`tr-${transactionList.indexOf(transaction)}`}>
            {transaction.Check}
          </StyledTd>
          <StyledTd key={`tr-${transactionList.indexOf(transaction)}`}>
            {transaction.amount}
          </StyledTd>
        </tr>
      ) : (
        ""
      );
    });
  }

  return (
    <StyledMain>
      <StyledSection>
        <DepositOrWithdraw
          debit={false}
          transactionType="Credit"
          OnChangeAmount={(e) => setAmount(e.target.value)}
          OnChangeCheckNumber={(e) => setCheck(e.target.value)}
          OnSubmit={handleSubmit}
        />
        <DepositOrWithdraw
          debit
          transactionType="Debit"
          OnSubmit={handleSubmit}
          OnChangeAmount={(e) => setAmount(e.target.value)}
          OnChangeCheckNumber={(e) => setCheck(e.target.value)}
        />
      </StyledSection>
      <StyledTable>
        <tbody>
          <tr>{tableTittle()}</tr>
          {tableData()}
        </tbody>
      </StyledTable>
    </StyledMain>
  );
}
