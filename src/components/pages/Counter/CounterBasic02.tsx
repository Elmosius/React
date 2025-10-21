import { useCounterStore } from "../../../stores/counterStore.ts";
import { useShallow } from "zustand/react/shallow";

export default function CounterBasic02() {
  const { views, increaseView, useReset } = useCounterStore(
    useShallow((state) => ({
      views: state.views,
      increaseView: state.increaseView,
      useReset: state.reset,
    })),
  );

  console.log("render counter - 02");

  return (
    <div className={"space-y-3 text-center"}>
      <h1 className={"font-bold text-3xl"}>Views</h1>
      <button
        className={
          "p-2 text-sm bg-black text-white rounded-md hover:opacity-80"
        }
        onClick={increaseView}
      >
        Increase: {views}
      </button>

      <button
        className={
          "mx-2 p-2 text-sm bg-black text-white rounded-md hover:opacity-80"
        }
        onClick={useReset}
      >
        Reset
      </button>
    </div>
  );
}
