interface InputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder: string;
  required?: boolean;
}

export default function Input(props: InputProps) {
  const {
    id,
    label,
    type = "text",
    name,
    value,
    placeholder,
    required = true,
  } = props;

  return (
    <label htmlFor={id} className={"flex flex-col gap-1 w-full h-full"}>
      {label}
      <input
        className={"border-1 p-2 rounded-md"}
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}
