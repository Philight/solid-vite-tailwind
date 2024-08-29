import nodeFetch from "node-fetch";
import { isHydrated } from "@solid-primitives/lifecycle";

// ====================================================================================

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

/**
 * source` tells you the current value of the source signal;
 *`value` tells you the last returned value of the fetcher;
 *`refetching` is true when the fetcher is triggered by calling `refetch()`,
 * or equal to the optional data passed: `refetch(info)`
 */
const fetchData = async (source, { value, refetching }) => {
  await wait(1000);
  // const response = await fetch(`https://swapi.dev/api/people/6/`);
  if (isHydrated()) {
    const response = await window.fetch(`/api/order/times`);
    // console.log("fetchData", await response.json());
    return response.json();
  } else {
    // const response = await nodeFetch(
    //   new URL(`/api/order/times`, "http://localhost:3333"),
    // );
  }
};

// ====================================================================================

const [params, setParams] = createSignal("2024-01-01");

const [data, { mutate, refetch }] = createResource(params, fetchData);

const [order, setOrder] = createStore<any>({
  date: params,
  times: data ?? [],
});

export { order, setOrder, setParams, refetch };
