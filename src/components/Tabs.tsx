import type { Component, JSX } from "solid-js";
import {
  m,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";

import { Icon } from "~/components";

// ====================================================================================

import { IGenericComponent, IGenericProps } from "~/types/generic-types";
interface IComponentProps extends IGenericProps {}

export function Tabs({
  class: classProp,
  links,
}: IComponentProps): IGenericComponent {
  const [currentActive, setActive] = createSignal(3);

  return (
    <div class={[`tabs__c f-center-y`, classProp].css()}>
      <Index each={links}>
        {(item, index) => (
          <li
            class={[
              `tabs__tab f-center`,
              currentActive() === index && "active",
            ].css()}
          >
            <Icon src={`/icons/${item().icon}.svg`} icon={item().icon} />
            <Icon src={"/icons/checkmark.svg"} icon={"checkmark"} />
          </li>
        )}
      </Index>
    </div>
  );
}
