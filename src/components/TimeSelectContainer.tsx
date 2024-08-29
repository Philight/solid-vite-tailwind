import type { Component, JSX } from "solid-js";
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

// ====================================================================================

import { IGenericComponent, IGenericProps } from "~/types/generic-types";
interface IComponentProps extends IGenericProps {}

export function TimeSelectContainer(props: IComponentProps): IGenericComponent {
  const { class: classProp } = props;
  // const { style } = destructure(props, { lazy: true });

  // ====================================================================================

  const renderFallback = (
    <div class="f-center-x">Something went wrong..Please restart the app</div>
  );

  // ====================================================================================

  return (
    <div class={[`time-select-container__c`, classProp].css()}>
      {/**
       * CONDITIONAL RENDER
       */}
      <Switch fallback={renderFallback}>
        <Match when={!order.daySelected}>
          <div class="f-center-x">Choose a date</div>
        </Match>

        <Match when={order.times.loading}>
          <div class="f-center-x">Loading..</div>
        </Match>

        <Match when={order.times.state === "ready"}>
          {() => {
            try {
              // Fallback for - TypeError: Cannot use 'in' operator to search for 'data' in undefined
              return <TimeSelectList data={order.times().Data} />;
            } catch (e) {
              console.error(e);
              return renderFallback;
            }
          }}
        </Match>
      </Switch>
    </div>
  );
}

// ====================================================================================

interface TTimeSelectListProps extends IGenericProps {
  data: unknown[];
}

function TimeSelectList(props: TTimeSelectListProps): IGenericComponent {
  const [currentActive, setActive] = createSignal(null);

  const selectDay = (index: number) => (e: MouseEvent) => {
    const classList = e.currentTarget.classList;
    if (classList.contains("disabled")) return;

    // UI day index
    setActive((prev) => (prev === index() ? null : index()));
  };

  return (
    <div>
      <ul class="time-select-container__list f-center-y">
        <For each={props.data}>
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
    </div>
  );
}
