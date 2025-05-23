import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { ITransaction } from "../../app/page";

interface ITransactionRowProps {
  transaction: ITransaction;
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
}

export default function TransactionsRow({
  transaction,
  setTransactions,
}: ITransactionRowProps) {
  const transactionStatusColor =
    transaction.status === "income" ? "text-income" : "text-outcome";
  const transactionStatusMinusIcon = transaction.status === "income" ? "" : "-";

  function handleDeleteTransaction(id: number) {
    setTransactions((prevTransactions) => {
      return prevTransactions.filter((transaction) => transaction.id !== id);
    });
  }

  return (
    <tr key={transaction.id} className="bg-white">
      <td className="px-12 py-6 rounded-l-lg text-title">
        {transaction.title}
      </td>
      <td className={transactionStatusColor + " px-12 py-6"}>
        {transactionStatusMinusIcon} R${" "}
        {transaction.price.toLocaleString("pt-BR")}
      </td>
      <td className="px-12 py-6 text-gray-400">{transaction.category}</td>
      <td className="px-12 py-6 text-gray-400">{transaction.date}</td>
      <td className="px-12 py-6 rounded-r-lg text-gray-400 flex items-center">
        <button
          className="cursor-pointer hover:opacity-70"
          onClick={() => handleDeleteTransaction(transaction.id)}
        >
          <Image src="/trash.png" alt="trash" width={24} height={24} />
        </button>
      </td>
    </tr>
  );
}
