import { Icon } from "~/components";
// import { destructure } from "@solid-primitives/destructure";

// ====================================================================================

import { IGenericComponent, IGenericProps } from "~/types/generic-types";
interface IComponentProps extends IGenericProps {
  variant?: "standard" | "outline";
  size?: "sm" | "md" | "lg";
  type?: string;
  role?: string;
  link?: string;
  icon?: string;
  label?: string;
  withShadow?: boolean;
  disabled?: boolean;
}

export function Button(props: IComponentProps): IGenericComponent {
  const {
    class: classProp,
    children,
    variant = "standard",
    size = "md",
    type,
    role,
    icon,
    label,
    withShadow,
    onClick,
  } = props;
  const { disabled, style } = destructure(props, { lazy: false });

  return (
    <div
      class={[`button__c f-center`, classProp, disabled() && "disabled"].css()}
      style={style}
    >
      <button
        type={type}
        class={[`button`, variant, size, !withShadow && "no-shadow"].css()}
        role={role}
        onClick={onClick}
        disabled={disabled()}
      >
        {!!icon && <Icon icon={icon} />}
        {!!label && <label>{label}</label>}
        {props.children}
      </button>
    </div>
  );
}
