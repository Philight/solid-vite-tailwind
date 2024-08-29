import { A } from "@solidjs/router";
import {
  m,
  Transition,
  AnimationControls,
  Target,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";

// ============================================================================

const NO_ICON =
  "https://ik.imagekit.io/0ovzivqyfai/_personal/icon/no_icon_kaS78G4ne.svg?updatedAt=1701541464211";
const SRC_PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

// ============================================================================

import { IGenericComponent, IGenericProps } from "@/types/generic-types";
interface IComponentProps extends IGenericProps {
  icon?: string;
  src?: string;
  keepColor?: boolean;
  alt?: string;
  size?: "sm" | "md" | "lg";
  link?: string;
  linkProps?: any;
  initial?: Target | VariantLabels | boolean;
  animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
  transition?: Transition;
}
type Ref = HTMLDivElement;

export function Icon(
  {
    class: classProps,
    icon: iconFromProps,
    src: customSrc,
    keepColor: keepColorFromProps = false,
    style,
    alt = `icon: ${iconFromProps}`,
    size,
    link,
    linkProps: linkParams = {},
    initial,
    animate,
    transition,
  }: IComponentProps,
  ref: Ref
): IGenericComponent {
  const icon = iconFromProps?.toLowerCase();
  const multicolored = ["kk-primetech", "coffee-2", "arrow-nav-down"];
  const keepColor: boolean = keepColorFromProps || multicolored.includes(icon);

  const src = customSrc ?? `/icons/${icon}.svg`;

  const renderProps = keepColor
    ? {
        src,
      }
    : {
        style: {
          //        backgroundImage: `url("${getIcon()}")`,
          WebkitMask: `url(${src}) no-repeat center`,
          mask: `url(${src}) no-repeat center`,
        },
      };

  const { newTab = false, noreferrer = true } = linkParams;
  const linkProps = {
    ...(newTab && { target: "_blank" }),
    rel: [`noopener`, noreferrer && `noreferrer`].css(),
  };

  const animateProps =
    initial || animate || transition
      ? {
          initial,
          animate,
          transition,
        }
      : {};

  const error = null;
  const loading = null;

  // ====================================================================================

  return error || loading ? (
    <img class={[`icon__c not-found`].css()} src={NO_ICON} />
  ) : (
    <figure
      class={[
        `icon__c icon-${icon} f-center`,
        classProps,
        size,
        keepColor && "multi-color",
        link && "has-link",
      ].css()}
      style={style}
      ref={ref}
      {...animateProps}
      layout
    >
      {link && <A href={link} class="abs-fill" {...linkProps} />}
      {!loading && (
        <img
          class="icon"
          alt={alt}
          // @ts-ignore
          src={SRC_PLACEHOLDER}
          loading="lazy"
          {...renderProps}
        />
      )}
    </figure>
  );
}

// export default forwardRef(Icon);

// ============================================================================
