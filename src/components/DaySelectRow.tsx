import type { Component, JSX } from "solid-js";
import {
  m,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";

import { Button } from "~/components/action/Button";
import { useOrder } from "~/contexts";
import { addDateTime, formatDate } from "~/utils/date";
import { order, setOrder, setParams } from "~/store/order";

// ====================================================================================

const generateDays = (daysAhead: number) => {
  const daysArray = mapArray(
    () => Array.from(Array(daysAhead + 1).keys()),
    (num) => {
      const now = new Date();
      return addDateTime(now, { days: num });
    }
  );

  return daysArray();
};

const getDataAttr = (d: Date) =>
  `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

// ====================================================================================

import { IGenericComponent, IGenericProps } from "~/types/generic-types";
interface IComponentProps extends IGenericProps {}

export function DaySelectRow(props: IComponentProps): IGenericComponent {
  const { class: classProp } = props;
  // const { style } = destructure(props, { lazy: true });

  const orderSettings = useOrder();
  const generatedDays = generateDays(orderSettings.daysAhead());

  const [currentPage, setPage] = createSignal(1);
  const [currentActive, setActive] = createSignal(0);

  const visibleDays = 2;
  const prevDisabled = () => currentPage() - 1 < 1;
  const nextDisabled = () => currentPage() + 1 > orderSettings.daysAhead();

  const toggleDays = (nextOrPrev: string) => () => {
    const isNext = nextOrPrev === "next";
    if (!isNext) {
      if (currentPage() - 1 < 1) return;
      setPage((prev) => prev - 1);
    } else if (isNext) {
      if (currentPage() + 1 > orderSettings.daysAhead()) return;
      setPage((prev) => prev + 1);
    }
  };

  const selectDay = (index: number) => (e: MouseEvent) => {
    if (currentActive() === index()) {
      setActive(null);
      setOrder("daySelected", false);
    } else {
      setActive(index);
      setOrder("daySelected", true);
      const date = e.currentTarget?.attributes["data-date"]?.value;
      setParams(date);
    }
  };

  return (
    <div
      class={[
        `day-select-row__c f-center-y f-grid rows-1 cols-${visibleDays}`,
        classProp,
      ].css()}
    >
      <Button
        class="day-select-row__left"
        icon="chevron-left"
        onClick={toggleDays("prev")}
        disabled={prevDisabled()}
        data-target="prev"
      />

      <div class={[`carousel-view`].css()}>
        <div
          class={[
            `day-select-row__days f-center-y f-grid-row carousel-slider`,
          ].css()}
        >
          <For each={generatedDays}>
            {(day, index) => (
              <div
                class={[`f-grid-item`].css()}
                style={{
                  transform: `translateX(-${100 * (currentPage() - 1)}%)`,
                }}
              >
                <li
                  class={[
                    `day-select-row__date f-center`,
                    currentActive() === index() && "active",
                  ].css()}
                  onClick={selectDay(index)}
                  data-date={getDataAttr(day)}
                >
                  <span>{formatDate(day)}</span>
                </li>
              </div>
            )}
          </For>
        </div>
      </div>

      <Button
        class="day-select-row__right"
        icon="chevron-right"
        onClick={toggleDays("next")}
        disabled={nextDisabled()}
        data-target="next"
      />
    </div>
  );
}

// ====================================================================================
