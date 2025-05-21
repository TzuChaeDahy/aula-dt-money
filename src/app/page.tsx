import { BodyContainer } from "@/components/BodyContainer";
import { CardContainer } from "@/components/CardContainer";
import { Header } from "@/components/Header";
import TransactionsRow from "@/components/TransactionRow";
import TransactionTable from "@/components/TransactionsTable";

export interface ITransaction {
  id: number;
  title: string;
  price: number;
  category: string;
  status: "income" | "outcome";
  date: string;
}

export default function Home() {
  const transactions: ITransaction[] = [
    {
      id: 1,
      title: "Compra no supermercado",
      price: 150.75,
      category: "Alimentação",
      status: "outcome",
      date: "2025-05-15",
    },
    {
      id: 2,
      title: "Assinatura Netflix",
      price: 39.9,
      category: "Entretenimento",
      status: "outcome",
      date: "2025-05-10",
    },
    {
      id: 3,
      title: "Salário",
      price: 3500.0,
      category: "Renda",
      status: "income",
      date: "2025-05-01",
    },
    {
      id: 4,
      title: "Gasolina",
      price: 220.0,
      category: "Transporte",
      status: "outcome",
      date: "2025-05-12",
    },
    {
      id: 5,
      title: "Consulta médica",
      price: 180.0,
      category: "Saúde",
      status: "outcome",
      date: "2025-05-08",
    },
  ];
  return (
    <div>
      <Header />
      <BodyContainer>
        <CardContainer />
        <TransactionTable>
          {transactions.map((transaction) => (
            <TransactionsRow transaction={transaction} />
          ))}
        </TransactionTable>
      </BodyContainer>
    </div>
  );
}
