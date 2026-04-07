"use client";

import type { ElementType } from "react";
import type { PolymorphicComponentProps } from "@/app/types/polymorphic.types";
import { buttonStyle, type ButtonVariants } from "../styles/buttonStyle";
import { clsx } from "clsx";
import { SplinePointer } from "lucide-react";
// Props específicas do Button (as variantes do tailwind-variants)
type ButtonOwnProps = ButtonVariants & {
  isLoading?: boolean;
};
type ButtonProps<C extends ElementType = "button"> = PolymorphicComponentProps<
  C,
  ButtonOwnProps
>;
export default function Button<C extends ElementType = "button">({
  as,
  color,
  isLoading,
  type,
  className,
  children,
  ...rest
}: ButtonProps<C>) {
  const Component = as || "button";
  return (
    <Component
      className={clsx(buttonStyle({ color }), className)}
      disabled={isLoading}
      type={type}
      {...rest}
    >
      {isLoading ? <SplinePointer /> : children}
    </Component>
  );
}
