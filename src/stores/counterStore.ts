import { create } from "zustand/react";

type CounterStore = {
  counter: number;
  views: number;
  increaseCounter: () => void;
  increaseView: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStore>((set, _, store) => ({
  counter: 0,
  views: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  increaseView: () =>
    set((state) => ({
      views: state.views + 1,
    })),
  reset: () => set(store.getInitialState()),
}));

export const useCounter = () => useCounterStore((state) => state.counter);

export const useReset = () => useCounterStore((state) => state.reset);

export const useIncreaseCounter = () =>
  useCounterStore((state) => state.increaseCounter);
