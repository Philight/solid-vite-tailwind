import { Icon } from "~/components";

// ----------------------------------------------------------------------

interface Props {
  shape?: "circular" | "rounded";
  children?: React.ReactNode;
  icon?: any; // Right icon
  onNext?: VoidFunction;
  onPrev?: VoidFunction;
  leftButtonProps?: IconButtonProps;
  rightButtonProps?: IconButtonProps;
}

export default function CarouselArrows({
  shape = "circular",
  icon,
  onNext,
  onPrev,
  children,
  leftButtonProps,
  rightButtonProps,
  ...other
}: Props) {
  // const safeChildren = children(() => props.children);
  const hasChild = !!children;

  if (hasChild) {
    return (
      <div class={"carousel__arrows fill-parent f-center"}>
        {onPrev && (
          <Icon
            class={[
              `carousel__arrow left`,
              !!children && "has-child",
              shape,
            ].css()}
            icon="arrow_left"
            onClick={onPrev}
            {...leftButtonProps}
          />
        )}

        {children}

        {onNext && (
          <Icon
            class={[
              `carousel__arrow right`,
              !!children && "has-child",
              shape,
            ].css()}
            icon="arrow_right"
            onClick={onNext}
            {...rightButtonProps}
          />
        )}
      </div>
    );
  }

  return null;
}
