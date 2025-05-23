import Image from "next/image";

interface ICustomToggleButtonProps {
  type: "income" | "outcome";
  title: string;
  isActive: boolean;
  setToggleButton: (value: boolean) => void;
}
export default function CustomToggleButton({
  title,
  type,
  isActive,
  setToggleButton
}: ICustomToggleButtonProps) {
  const imgSrc = type === "income" ? "/income.png" : "/outcome.png";
  const imgAlt = type === "income" ? "Income Icon" : "Outcome Icon";
  return (
    <button
      className={`${
        isActive ? "bg-gray-100 border-gray-400" : "bg-transparent border-gray-200"
      } border  py-6 rounded-md hover:opacity-80 cursor-pointer flex justify-center gap-4 active:bg-gray-200`}
      onClick={() => setToggleButton(type === "income")}
    >
      <Image src={imgSrc} width={24} height={24} alt={imgAlt} />
      {title}
    </button>
  );
}
