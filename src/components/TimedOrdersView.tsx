import type { Component, JSX } from "solid-js";
import {
  m,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";

import { links } from "~/router";
import { Tabs, DaySelectRow, TimeSelectContainer } from "~/components";

// ====================================================================================

const NAVIGATION_LINKS = [
  {
    icon: "user",
    label: "Home",
    linkTo: links.profile.root,
  },
  {
    icon: "star",
    label: "favourite",
    linkTo: links.profile.favourite,
  },
  {
    icon: "recent",
    label: "recent",
    linkTo: links.profile.recent,
  },
  {
    icon: "calendar",
    label: "reservation",
    linkTo: links.profile.reservation,
  },
];

// ====================================================================================

import { IGenericComponent, IGenericProps } from "~/types/generic-types";
interface IComponentProps extends IGenericProps {}

export function TimedOrdersView({
  class: classProp,
}: IComponentProps): IGenericComponent {
  // const parentClass = () => props.class;

  return (
    <div class={[`timed-orders-view__c`, classProp].css()}>
      <DaySelectRow />
      <TimeSelectContainer />
    </div>
  );
}
