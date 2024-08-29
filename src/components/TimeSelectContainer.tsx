import type { Component, JSX } from "solid-js";
import { isHydrated } from "@solid-primitives/lifecycle";
import {
  m,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";

import { Button } from "~/components/action/Button";
import { order } from "~/store/order";

// ====================================================================================

const NAVIGATION_LINKS = [];

// ====================================================================================

import { IGenericComponent, IGenericProps } from "~/types/generic-types";
interface IComponentProps extends IGenericProps {}

export function TimeSelectContainer(props: IComponentProps): IGenericComponent {
  const { class: classProp } = props;
  // const { style } = destructure(props, { lazy: true });

  const [currentActive, setActive] = createSignal(null);

  const selectDay = (index: number) => (e: MouseEvent) => {
    const classList = e.currentTarget.classList;
    if (classList.contains("disabled")) return;

    // UI day index
    setActive((prev) => (prev === index() ? null : index()));
  };

  return (
    <div class={[`time-select-container__c`, classProp].css()}>
      {/**
       * CONDITIONAL RENDER
       */}
      <Switch fallback={<p>Something went wrong..</p>}>
        <Match when={!order.daySelected}>
          <p>Choose a date</p>
        </Match>

        <Match when={order.times.loading}>
          <p>Loading..</p>
        </Match>

        <Match when={order.times.state === "ready"}>
          <ul class="time-select-container__list f-center-y">
            <For each={order.times().Data}>
              {(time, index) => (
                <li
                  class={[
                    `time-select-container__time f-center`,
                    currentActive() === index() && "active",
                    time.Capacity < 1 && "disabled",
                  ].css()}
                  onClick={selectDay(index)}
                  data-time={time.Time}
                >
                  <span>
                    ({time.Capacity}/{time.OriginalCapacity})
                  </span>
                  {time.Time}
                </li>
              )}
            </For>
          </ul>
          <Button
            class={[`time-select-container__order`].css()}
            size="lg"
            label="ORDER"
            disabled={currentActive() === null}
            data-target="submit"
          />
        </Match>
      </Switch>
    </div>
  );
}
