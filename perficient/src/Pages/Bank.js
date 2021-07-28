import { useEffect, useState } from "react";
import { DepositOrWithdraw } from "../Components/Transaction/transaction";
import Moment from "react-moment";

export function BankPage() {
  const date = new Date();
  const newDate = <Moment format="YYYY-MM-DD hh:mm:ss"></Moment>;
  const [amount, setAmount] = useState(0);
  const [checkNumber, setCheckNumber] = useState(0);
  const [transactionList, setTransactionList] = useState([
    {
      date: newDate,
      Type: "Type",
      checkNumber: checkNumber,
      amount: amount,
    },
  ]);

  useEffect(() => {
    console.log(transactionList);
  }, [transactionList]);

  function handleSubmit(e, transactionType) {
    e.preventDefault();
    setTransactionList([
      ...transactionList,
      {
        checkNumber,
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
        return <th key={index}>{key.toUpperCase()}</th>;
      })
    );
  }
  function tableData() {
    const { date, type, checkNumber, amount } = transactionList;
    return transactionList.map((transaction, i) => {
      return transactionList.indexOf(transaction) !== 0 ? (
        <tr key={transaction[i]}>
          <td>{transaction.date}</td>
          <td>{transaction.transactionType}</td>
          <td>{transaction.checkNumber}</td>
          <td>{transaction.amount}</td>
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
          OnChangeamount={(e) => setAmount(e.target.value)}
          OnChangeCheckNumber={(e) => setCheckNumber(e.target.value)}
          OnSubmit={handleSubmit}
        />
        <DepositOrWithdraw
          transactionType="Credit"
          OnSubmit={handleSubmit}
          OnChangeamount={(e) => setAmount(e.target.value)}
          OnChangeCheckNumber={(e) => setCheckNumber(e.target.value)}
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
