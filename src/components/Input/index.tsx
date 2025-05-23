import { Input } from "@headlessui/react";

interface ICustomInputProps {
  name: string;
  type: "text" | "number";
}

export default function CustomInput({
  name,
  type,
  ...rest
}: ICustomInputProps) {
  return (
    <Input
      name={name}
      type={type}
      className="w-full border border-gray-300 rounded bg-gray-100 focus:bg-gray-50 transition px-4 py-4"
      {...rest}
    />
  );
}
