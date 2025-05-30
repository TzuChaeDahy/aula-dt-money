interface IButtonProps {
  title: string;
  onClick: () => void;
  type: "normal" | "accent";
}

export default function Button({
  title,
  onClick,
  type,
  ...rest
}: IButtonProps) {
  const buttonBgColor = type === "normal" ? "bg-button" : "bg-income";
  return (
    <button
      className={`${buttonBgColor} text-white px-8 py-5 rounded-md hover:opacity-80 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-100`}
      onClick={onClick}
      {...rest}
    >
      {title}
    </button>
  );
}
