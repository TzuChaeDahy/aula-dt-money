import { ITransaction } from "@/app/page";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import CustomToggleButton from "../CustomToggleButton";
import CustomInput from "../Input";

interface ICustomDialogProps {
  dialogTitle: string;
  isOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  setTransactions: Dispatch<SetStateAction<ITransaction[]>>;
}

export default function CustomDialog({
  dialogTitle,
  isOpen,
  setIsDialogOpen,
  setTransactions,
}: ICustomDialogProps) {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [isIncome, setIsIncome] = useState<boolean>(true);

  function handleCloseDialog() {
    setTitle("");
    setPrice(0);
    setCategory("");
    setIsIncome(true);
    
    setIsDialogOpen(false);
  }

  function handleAddTransaction() {
    setTransactions((prevTransactions) => {
      const newTransaction: ITransaction = {
        id: prevTransactions.length + 1,
        title: title,
        price: price,
        category: category,
        status: isIncome ? "income" : "outcome",
        date: new Date().toISOString().split("T")[0],
      };
      return [...prevTransactions, newTransaction];
    });

    handleCloseDialog();
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseDialog}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-2xl w-9/12 space-y-4 rounded bg-white pb-12 pt-4 px-8 flex flex-col gap-2">
          <div className="flex flex-row-reverse">
            <button
              className="cursor-pointer p-2"
              onClick={handleCloseDialog}
            >
              X
            </button>
          </div>
          <DialogTitle className="text-xl font-bold">{dialogTitle}</DialogTitle>
          <CustomInput
            name="transaction-title"
            type="text"
            placeholder="Nome"
            onChange={(e) => setTitle(e.target.value)}
          />
          <CustomInput
            name="transaction-amount"
            type="number"
            placeholder="Preço"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <div className="grid grid-cols-2 gap-4">
            <CustomToggleButton
              type="income"
              title="Entrada"
              isActive={isIncome}
              setToggleButton={setIsIncome}
            />
            <CustomToggleButton
              type="outcome"
              title="Saída"
              isActive={!isIncome}
              setToggleButton={setIsIncome}
            />
          </div>
          <CustomInput
            name="transaction-category"
            type="text"
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button
            title="Cadastrar"
            type="accent"
            disabled={!title || price <= 0 || !category}
            onClick={() => handleAddTransaction()}
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
}
