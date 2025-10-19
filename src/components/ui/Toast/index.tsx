interface ToastProps {
  message: string;
  type?: "success" | "error";
}

export default function Toast(props: ToastProps) {
  const { message, type = "success" } = props;

  return (
    <p
      className={`p-4 my-4 shadow-md fixed right-3 top-3 text-sm rounded-md ${type === "success" ? "bg-green-300" : "bg-red-300"}`}
    >
      {message}
    </p>
  );
}
