import { useEffect, useState } from "react";
import { DepositOrWithdraw } from "../Components/Transaction/transaction";
import Moment from "react-moment";
import { StyledTd, StyledTh } from "./styles";

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
          <StyledTd>{transaction.transactionType}</StyledTd>
          <StyledTd>{transaction.Check}</StyledTd>
          <StyledTd>{transaction.amount}</StyledTd>
        </tr>
      ) : (
        ""
      );
    });
  }

  return (
    <>
      <section>
        <DepositOrWithdraw
          transactionType="Debit"
          OnChangeAmount={(e) => setAmount(e.target.value)}
          OnChangeCheckNumber={(e) => setCheck(e.target.value)}
          OnSubmit={handleSubmit}
        />
        <DepositOrWithdraw
          transactionType="Credit"
          OnSubmit={handleSubmit}
          OnChangeAmount={(e) => setAmount(e.target.value)}
          OnChangeCheckNumber={(e) => setCheck(e.target.value)}
        />
      </section>
      <table>
        <tbody>
          <tr>{tableTittle()}</tr>
          {tableData()}
        </tbody>
      </table>
    </>
  );
}
