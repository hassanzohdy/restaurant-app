import { counterAtom } from "apps/front-office/home/atoms/counter-atom";

export default function UpdateCounterButton() {
  // const [count, useCount] = counterAtom.useState();
  const count = counterAtom.useValue();
  const updateCount = () => {
    counterAtom.update(count => count + 1);
    // useCount(count + 1);
  };

  return <button onClick={updateCount}>Update Counter ({count})</button>;
}
