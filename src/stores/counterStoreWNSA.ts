import { create } from "zustand/react";

type CounterStore2 = {
  counter: {
    count: number;
    view: number;
  };
};

export const useCounterStore3 = create<CounterStore2>(() => ({
  counter: {
    count: 0,
    view: 0,
  },
}));

export const useCounter3 = () => useCounterStore3((state) => state.counter);

export const increaseCounter = () =>
  useCounterStore3.setState((state) => ({
    counter: { ...state.counter, count: state.counter.count + 1 },
  }));

export const reset = () =>
  useCounterStore3.setState(useCounterStore3.getInitialState());
