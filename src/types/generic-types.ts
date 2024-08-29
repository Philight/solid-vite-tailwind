import type { Component, JSX } from "solid-js";
import { MotionValue } from "framer-motion";

export type TGenericObject = Record<string, unknown>;

export type IGenericComponent = JSX.Element | Component | null;

export interface IGenericProps {
  class?: string;
  children?: IGenericComponent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: { [key: string]: MotionValue<any> | null | undefined };
}
