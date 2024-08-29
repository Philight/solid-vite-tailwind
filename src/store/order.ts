import nodeFetch from "node-fetch";
import { isHydrated } from "@solid-primitives/lifecycle";

import api from "~/utils/api";
import { isDefined } from "~/utils/helpers";
import { DEFAULT_DATA } from "./DEFAULT_DATA";

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
  if (!isDefined(source)) return;

  await wait(1000);
  // if (isHydrated()) {
  return api
    .get("/api/order/times")
    .then(async (res: any) => {
      return res.data;
    })
    .catch((e) => console.error(e));
  // }
};

// ====================================================================================

const [params, setParams] = createSignal("2024-01-01");

const [data, { mutate, refetch }] = createResource(params, fetchData);

const [order, setOrder] = createStore<any>({
  date: params,
  // times: () => DEFAULT_DATA,
  daySelected: true,
  times: ["errored", "unresolved"].includes(data.state)
    ? () => DEFAULT_DATA
    : data,
});

export { order, setOrder, setParams, refetch };
