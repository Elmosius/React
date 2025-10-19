import Input from "../Input";
import Button from "../Button";
import type { FormEvent } from "react";

interface IForm {
  onSubmit: (e: FormEvent) => void;
  loading?: boolean;
}

export default function Form(props: IForm) {
  const { onSubmit, loading } = props;

  return (
    <form
      onSubmit={onSubmit}
      className={"w-full h-full flex flex-col gap-2 bg-white p-4 rounded-md"}
    >
      <Input
        label={"Title Product"}
        id={"title"}
        name={"title"}
        type={"text"}
        placeholder={"Input Title Product"}
      />

      <Input
        label={"Description Product"}
        id={"description"}
        name={"description"}
        type={"text"}
        placeholder={"Input Description Product"}
      />

      <Input
        label={"Price Product"}
        id={"price"}
        name={"price"}
        type={"number"}
        placeholder={"Input Price Product"}
      />

      <Input
        id={"category"}
        label={"Category Product"}
        name={"category"}
        placeholder={"Input Category Product"}
      />

      <Input
        label={"Image Product"}
        id={"image"}
        name={"image"}
        type={"text"}
        placeholder={"Input Image Product"}
      />

      <Button type="submit" color="secondary" classList={"mt-5"}>
        {loading ? "Loading..." : "Add Product"}
      </Button>
    </form>
  );
}
