import { Card } from "../Card";

interface ICardContainerProps {
  incomes: number;
  outcomes: number;
}

export function CardContainer({ incomes, outcomes }: ICardContainerProps) {
  const total = incomes - outcomes;
  return (
    <div className="flex justify-between">
      <Card title="Entradas" value={incomes} type="income" />
      <Card title="Saídas" value={outcomes} type="outcome" />
      <Card title="Total" value={total} type="total" />
    </div>
  );
}
