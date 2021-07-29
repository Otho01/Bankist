import { useEffect, useState } from "react";
import { DepositOrWithdraw } from "../Components/Transaction/transaction";
import Moment from "react-moment";
import {
  Styledh2Header,
  StyledH2Ledger,
  StyledMain,
  StyledParagraph,
  StyledSection,
  StyledSectionHeader,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledTr,
} from "./styles";

export function BankPage() {
  const newDate = <Moment format="YYYY-MM-DD hh:mm:ss"></Moment>;
  const [amount, setAmount] = useState(0);
  const [check, setCheck] = useState(0);
  const [balance, setBalance] = useState(0);
  const [transactionList, setTransactionList] = useState([
    {
      Date: newDate,
      Type: "Type",
      Check: check,
      amount: amount,
    },
  ]);

  useEffect(() => {
    console.log(transactionList);
    console.log(typeof balance);
    console.log(typeof amount);
    console.log(amount);
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
    transactionType === "Debit"
      ? setBalance(parseFloat(balance) - parseFloat(amount))
      : setBalance(parseFloat(balance) + parseFloat(amount));
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
        <StyledTr key={`tr-${transactionList.indexOf(transaction)}`}>
          <StyledTd
            key={`td0-${transactionList.indexOf(transaction)}`}
            backgroundKey={i}
          >
            {transaction.date}
          </StyledTd>
          <StyledTd
            key={`td1-${transactionList.indexOf(transaction)}`}
            backgroundKey={i}
          >
            {transaction.transactionType}
          </StyledTd>
          <StyledTd
            key={`td2-${transactionList.indexOf(transaction)}`}
            backgroundKey={i}
          >
            {transaction.Check}
          </StyledTd>
          <StyledTd
            key={`td3-${transactionList.indexOf(transaction)}`}
            backgroundKey={i}
          >
            {transaction.amount}
          </StyledTd>
        </StyledTr>
      ) : (
        ""
      );
    });
  }

  return (
    <StyledMain>
      <StyledSectionHeader>
        <Styledh2Header>Perficient National Bank</Styledh2Header>
      </StyledSectionHeader>
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
        <StyledH2Ledger>Ledger</StyledH2Ledger>
        <StyledParagraph>Balance: {balance}</StyledParagraph>
        <StyledTbody>
          <tr>{tableTittle()}</tr>
          {tableData()}
        </StyledTbody>
      </StyledTable>
    </StyledMain>
  );
}
