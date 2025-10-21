import { create } from "zustand/react";

type CounterStore2 = {
  counter: {
    count: number;
    view: number;
  };
  increaseCounter: () => void;
  resetCounter: () => void;
};

export const useCounterStore2 = create<CounterStore2>((set, _, store) => ({
  counter: {
    count: 0,
    view: 0,
  },
  increaseCounter: () =>
    set((state) => ({
      counter: { ...state.counter, count: state.counter.count + 1 },
    })),
  resetCounter: () => set(store.getInitialState()),
}));

export const useCounter2 = () =>
  useCounterStore2((state) => state.counter.count);

export const useResetCounter2 = () =>
  useCounterStore2((state) => state.resetCounter);

export const useIncreaseCounter2 = () =>
  useCounterStore2((state) => state.increaseCounter);
