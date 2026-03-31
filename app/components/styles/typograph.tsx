import { tv } from "tailwind-variants";

export const typograph = tv({
  base: "text-sm font-medium text-foreground",
  variants: {
    size: {
      lg: "text-3xl",
      xs: "text-xs font-thin",
      logo: "text-4xl tracking-tight",
      xl: "text-xl",
    },
    color: {
      sub: "text-zinc-400",
      detail: "text-zinc-500",
    },
    hover: {
      white: "hover:text-zinc-300",
    },
  },
  compoundVariants: [
    {
      size: "xs",
      hover: "white",
      class: "underline",
    },
  ],
});
