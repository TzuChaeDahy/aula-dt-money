import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import CustomToggleButton from "../CustomToggleButton";
import CustomInput from "../Input";

interface ICustomDialogProps {
  title: string;
  isOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export default function CustomDialog({
  title,
  isOpen,
  setIsDialogOpen,
}: ICustomDialogProps) {
  function handleAddTransaction() {
    setIsDialogOpen(false);
  }

  const [isIncome, setIsIncome] = useState<boolean>(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsDialogOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-2xl w-9/12 space-y-4 rounded bg-white pb-12 pt-4 px-8 flex flex-col gap-2">
        <div className="flex flex-row-reverse">
          <button className="cursor-pointer p-2" onClick={() => setIsDialogOpen(false)}>
            X
          </button>
        </div>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <CustomInput
            name="transaction-title"
            type="text"
            placeholder="Nome"
          />
          <CustomInput
            name="transaction-amount"
            type="number"
            placeholder="Preço"
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
          />
          <Button
            title="Cadastrar"
            type="accent"
            onClick={() => handleAddTransaction()}
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
}
