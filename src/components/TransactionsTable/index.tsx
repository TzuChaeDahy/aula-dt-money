export interface ITransactionTableProps {
    children: React.ReactNode;
}

export default function TransactionTable({children}: ITransactionTableProps) {
  const rowTitles = ["Título", "Preço", "Categoria", "Data"];

  return (
    <table className="w-full border-separate border-spacing-y-2">
      <thead>
        <tr>
          {rowTitles.map((title) => (
            <th key={title} className="text-left text-gray-400 font-medium px-12 py-2   ">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}
