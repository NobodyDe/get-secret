import { tv } from "tailwind-variants";

export const input = tv({
  base: "w-full px-2 rounded-sm border-2 py-1 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none",
  variants: {
    size: {},
    color: {},
  },
});
