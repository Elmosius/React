interface IButton {
  type: "button" | "submit";
  children: React.ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary";
  classList?: string;
}

export default function Button(props: IButton) {
  const { type, children, onClick, color = "primary", classList } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`transition-all p-2 rounded-lg border-1 ${color === "primary" ? " text-black hover:text-white hover:bg-black" : "bg-gray-300 text-black"} hover:opacity-80 ${classList}`}
    >
      {children}
    </button>
  );
}
