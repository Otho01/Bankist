import { useEffect, useState } from "react";
import { DepositOrWithdraw } from "../Components/Transaction/transaction";

export function BankPage() {
  const [amount, setAmount] = useState(0);
  const [checkNumber, setCheckNumber] = useState(0);
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    console.log(transactionList);
  }, [transactionList]);

  function handleSubmit(e) {
    e.preventDefault();
    setTransactionList([...transactionList, { checkNumber, amount }]);
  }
  function onFieldChange(e) {
    setAmount(e.target.value);
    setCheckNumber(e.target.value);
  }
  return (
    <section>
      <DepositOrWithdraw
        transactionType="Debit"
        inputName="Amount"
        OnChangeamount={(e) => setAmount(e.target.value)}
        OnChangeCheckNumber={(e) => setCheckNumber(e.target.value)}
        OnSubmit={handleSubmit}
      />
      <DepositOrWithdraw
        transactionType="Deposit"
        inputName="Check Number"
        OnSubmit={handleSubmit}
        OnChangeamount={(e) => setAmount(e.target.value)}
        OnChangeCheckNumber={(e) => setCheckNumber(e.target.value)}
      />
    </section>
  );
}
