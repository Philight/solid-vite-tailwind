import { OrderContext } from "./OrderContext";

// ----------------------------------------------------------------------

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (ctx === undefined) {
    throw new Error("useOrder must be used within a MyContext.Provider");
  }
  return ctx;
}
