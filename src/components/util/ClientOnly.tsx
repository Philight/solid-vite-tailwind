/**
 * @description This component will only render its children on the client
 *
 * Usage
 *
 * <ClientOnly>
 *  <ComponentThatBreaksOnServer />
 * </ClientOnly>;
 */

import { createMemo, FlowComponent, JSX } from "solid-js";
import { isHydrated } from "@solid-primitives/lifecycle";

export function ClientOnly(props): FlowComponent {
  const children = createMemo(() => isHydrated() && props.children);
  return <>{children()}</>;
}
