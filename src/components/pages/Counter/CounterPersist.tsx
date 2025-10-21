import {
  increaseCounter,
  reset,
  useCounter4,
} from "../../../stores/counterStorePersist.ts";

export default function CounterPersist() {
  const counter = useCounter4();

  console.log("render counter persisting store data");

  return (
    <div className={"space-y-3 text-center"}>
      <h1 className={"font-bold text-3xl"}>
        Counter with Persisting store data
      </h1>
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
