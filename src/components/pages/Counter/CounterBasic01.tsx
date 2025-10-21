import {
  useCounter,
  useIncreaseCounter,
  useReset,
} from "../../../stores/counterStore.ts";

export default function CounterBasic01() {
  const counter = useCounter();
  const increaseCounter = useIncreaseCounter();
  const reset = useReset();

  console.log("render counter - 01");

  return (
    <div className={"space-y-3 text-center"}>
      <h1 className={"font-bold text-3xl"}>Counter</h1>
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
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}
