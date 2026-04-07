import type { ReactNode } from "react";

interface DividerProps {
  children: ReactNode;
}

export default function Divider({ children }: DividerProps) {
  return (
    <div className="w-full">
      <span className="flex items-center gap-4 text-xs uppercase text-zinc-500">
        <hr className="flex-1 border-zinc-700" />
        {children}
        <hr className="flex-1 border-zinc-700" />
      </span>
    </div>
  );
}
