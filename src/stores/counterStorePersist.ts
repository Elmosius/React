import { create } from "zustand/react";
import { createJSONStorage, persist } from "zustand/middleware";

type CounterStore2 = {
  counter: {
    count: number;
    view: number;
  };
};

export const useCounterStore4 = create<CounterStore2>()(
  persist(
    () => ({
      counter: {
        count: 0,
        view: 0,
      },
    }),
    {
      name: "counter-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useCounter4 = () => useCounterStore4((state) => state.counter);

export const increaseCounter = () =>
  useCounterStore4.setState((state) => ({
    counter: { ...state.counter, count: state.counter.count + 1 },
  }));

export const reset = () =>
  useCounterStore4.setState(useCounterStore4.getInitialState());
