import { tv } from "tailwind-variants";

export const button = tv({
  base: "w-full rounded-sm py-1 cursor-pointer",
  variants: {
    color: {
      white: "bg-foreground text-black hover:bg-zinc-200",
      black:
        "flex-1 text-foreground border-2 border-zinc-700/50 hover:bg-zinc-900 hover:border-zinc-600",
    },
  },
});
