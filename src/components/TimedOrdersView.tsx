import type { Component, JSX } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { isHydrated } from "@solid-primitives/lifecycle";

import { links } from "~/router";
import {
  Tabs,
  DaySelectRow,
  TimeSelectContainer,
  ClientOnly,
} from "~/components";
// const TimeSelectContainer = clientOnly(() => import("./TimeSelectContainer"));
// const TimeSelectContainer = lazy(() => import("./TimeSelectContainer"));

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
  return (
    <div class={[`timed-orders-view__c`, classProp].css()}>
      <DaySelectRow />
      <ClientOnly>
        <TimeSelectContainer />
      </ClientOnly>
      {isHydrated()}
    </div>
  );
}
