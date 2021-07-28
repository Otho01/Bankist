export function TransactionHistory() {
  const transactionList = [
    {
      id: 1,
      type: "debit",
      checkNumber: "1234",
      amount: "amount",
    },
    {
      id: 2,
      type: "credit",
      checkNumber: "3214",
      amount: "amount",
    },
    {
      id: 3,
      type: "Debit",
      checkNumber: "5432",
      amount: "amount",
    },
  ];

  return (
    <div>
      <h1>hola</h1>
      {!!transactionList &&
        transactionList.map((transaction) => {
          return (
            <table>
              <tbody>
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.checkNumber}</td>
                  <td>{transaction.amount}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
    </div>
  );
}
