import { OrderContext } from "./OrderContext";

// ----------------------------------------------------------------------

export function OrderProvider(props) {
  const [daysAhead, setDaysAhead] = createSignal(10);
  const [time, setTime] = createSignal("");
  const state = {
    daysAhead,
    setDays(newDay) {
      setDaysAhead(newDay);
    },
  };

  return (
    <OrderContext.Provider value={state}>
      {props.children}
    </OrderContext.Provider>
  );
}
