interface IButton {
  type: "button" | "submit";
  children: React.ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary";
}

export default function Button(props: IButton) {
  const { type, children, onClick, color = "primary" } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 rounded-lg border-1 ${color === "primary" ? " text-black" : "bg-gray-300 text-black"}`}
    >
      {children}
    </button>
  );
}
