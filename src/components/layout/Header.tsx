import type { Component, JSX } from "solid-js";
import {
  m,
  useMotionValue,
  useTransform,
  animate,
  MotionValue,
} from "framer-motion";

import { links } from "~/router";
import { Tabs } from "~/components";

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

export function Header({
  class: classProp,
}: IComponentProps): IGenericComponent {
  // const parentClass = () => props.class;

  return (
    <header class={[`header__c main f-center-y`, classProp].css()}>
      {/*      <Navigation
        links={NAVIGATION_LINKS}
        open={menuOpen}
        onOpen={toggleMenu()}
      />*/}
      <Tabs links={NAVIGATION_LINKS} />
    </header>
  );
}
