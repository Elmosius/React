import {
  useCounter2,
  useIncreaseCounter2,
  useResetCounter2,
} from "../../../stores/counterStore2.ts";

export default function CounterObject() {
  const counter = useCounter2();
  const increaseCounter = useIncreaseCounter2();
  const resetCounter = useResetCounter2();

  console.log("render counter object ");

  return (
    <div className={"space-y-3 text-center"}>
      <h1 className={"font-bold text-3xl"}>Counter Object</h1>
      <button
        className={
          "p-2 text-sm bg-black text-white rounded-md hover:opacity-80"
        }
        onClick={increaseCounter}
      >
        Increase: {counter}
      </button>

      <button
        className={
          "mx-2 p-2 text-sm bg-black text-white rounded-md hover:opacity-80"
        }
        onClick={resetCounter}
      >
        Reset
      </button>
    </div>
  );
}
