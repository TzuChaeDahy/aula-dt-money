import { ITransaction } from "../../app/page";

interface ITransactionRowProps {
  transaction: ITransaction;
}

export default function TransactionsRow({ transaction }: ITransactionRowProps) {
  const transactionStatusColor =
    transaction.status === "income" ? "text-income" : "text-outcome";
  const transactionStatusMinusIcon = transaction.status === "income" ? "" : "-";
  return (
    <tr key={transaction.id} className="bg-white">
      <td className="px-12 py-6 rounded-l-lg text-title">
        {transaction.title}
      </td>
      <td className={transactionStatusColor + " px-12 py-6"}>
        {transactionStatusMinusIcon} R$ {transaction.price.toLocaleString("pt-BR")}
      </td>
      <td className="px-12 py-6 text-gray-400">{transaction.category}</td>
      <td className="px-12 py-6 rounded-r-lg text-gray-400">
        {transaction.date}
      </td>
    </tr>
  );
}
