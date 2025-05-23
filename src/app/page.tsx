"use client";

import { BodyContainer } from "@/components/BodyContainer";
import { CardContainer } from "@/components/CardContainer";
import CustomDialog from "@/components/CustomDialog";
import { Header } from "@/components/Header";
import TransactionsRow from "@/components/TransactionRow";
import TransactionTable from "@/components/TransactionsTable";
import { useState } from "react";

export interface ITransaction {
  id: number;
  title: string;
  price: number;
  category: string;
  status: "income" | "outcome";
  date: string;
}

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const incomes = transactions
    .filter((transaction) => transaction.status === "income")
    .reduce((acc, transaction) => acc + transaction.price, 0);
  const outcomes = transactions
    .filter((transaction) => transaction.status === "outcome")
    .reduce((acc, transaction) => acc + transaction.price, 0);
  return (
    <div>
      <Header setIsDialogOpen={setIsDialogOpen} />
      <BodyContainer>
        <CardContainer incomes={incomes} outcomes={outcomes} />
        <TransactionTable>
          {transactions.length > 0
            ? transactions.map((transaction) => (
                <TransactionsRow
                  key={transaction.id}
                  transaction={transaction}
                  setTransactions={setTransactions}
                />
              ))
            : null}
        </TransactionTable>
        {transactions.length > 0 ? null : (
          <h2 className="flex justify-center text-title">
            Ainda não existem transações cadastradas.
          </h2>
        )}
        <CustomDialog
          dialogTitle="Cadastrar transação"
          isOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          setTransactions={setTransactions}
        />
      </BodyContainer>
    </div>
  );
}
