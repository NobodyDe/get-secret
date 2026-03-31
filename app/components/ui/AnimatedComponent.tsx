"use client";

import { AnimatePresence, motion } from "motion/react";

interface AnimatedComponentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  show?: boolean;
}

export default function AnimatedComponent({
  children,
  className,
  delay = 0,
  show = true,
}: AnimatedComponentProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={className}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, delay }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
