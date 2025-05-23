"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Button from "../Button";

interface IHeaderProps {
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header({ setIsDialogOpen }: IHeaderProps) {
  function openDialog() {
    setIsDialogOpen(true);
  }
  return (
    <header className="bg-header w-full h-[212px]">
      <div className="max-w-[1120px] mx-auto flex row items-center justify-between pt-8">
        <Image src="/logo.png" width={172} height={40} alt="Logo Image" />
        <Button title={"Nova transação"} onClick={openDialog} type={"normal"} />
      </div>
    </header>
  );
}
