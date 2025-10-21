import {
  CounterBasic01,
  CounterBasic02,
  CounterObject,
  CounterPersist,
  CounterWithNoStoreActions,
} from "./components/pages/Counter";

export default function App() {
  return (
    <main
      className={
        "w-screen h-screen container mx-auto p-4 flex flex-col justify-center items-center gap-10"
      }
    >
      <CounterBasic01 />
      <CounterBasic02 />
      <CounterObject />
      <CounterWithNoStoreActions />
      <CounterPersist />
    </main>
  );
}
