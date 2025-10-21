import {
  increaseCounter,
  reset,
  useCounter3,
} from "../../../stores/counterStoreWNSA.ts";

export default function CounterWithNoStoreActions() {
  const counter = useCounter3();

  console.log("render counter practice with no store actions ");

  return (
    <div className={"space-y-3 text-center"}>
      <h1 className={"font-bold text-3xl"}>Counter with no store actions</h1>
      <button
        className={
          "p-2 text-sm bg-black text-white rounded-md hover:opacity-80"
        }
        onClick={increaseCounter}
      >
        Increase: {counter.count}
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
