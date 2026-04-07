import type { ElementType } from "react";
import type { PolymorphicComponentProps } from "@/app/types/polymorphic.types";
import { typograph, type TypographVariants } from "../styles/typograph";
import { clsx } from "clsx";
type TextOwnProps = TypographVariants;
type TextProps<C extends ElementType = "span"> = PolymorphicComponentProps<
  C,
  TextOwnProps
>;
export default function Text<C extends ElementType = "span">({
  as,
  size,
  color,
  hover,
  className,
  children,
  ...rest
}: TextProps<C>) {
  const Component = as || "span";
  return (
    <Component
      className={clsx(typograph({ size, color, hover }), className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
