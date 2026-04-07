"use client";

import { Eye, EyeOff } from "lucide-react";
import { input } from "@/app/components/styles/input";
import { typograph } from "@/app/components/styles/typograph";
import AnimatedComponent from "@/app/components/ui/AnimatedComponent";
import Text from "@/app/components/ui/Text";
import clsx from "clsx";
import type { PasswordStrength } from "../_types/password.types";

interface PasswordFieldStrength {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  showPassword: boolean;
  onToggle: () => void;
  strength?: PasswordStrength;
  confirmValue?: string;
  placeholder?: string;
  dict?: {
    weak: string;
    medium: string;
    strong: string;
    match: string;
    noMatch: string;
    show: string;
    hide: string;
  };
}

export default function PasswordField({
  id,
  label,
  value,
  onChange,
  showPassword,
  onToggle,
  strength,
  confirmValue,
  placeholder = "••••••••",
  dict,
}: PasswordFieldStrength) {
  const isConfirmField = confirmValue !== undefined;
  const passwordsMatch = isConfirmField ? value === confirmValue : true;

  return (
    <div className="flex flex-col text-start gap-1">
      <label htmlFor={id}>
        <Text>{label}</Text>
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={input()}
          required
        />
        <button
          type="button"
          onClick={onToggle}
          aria-label={
            showPassword ? (dict?.hide ?? "Hide") : (dict?.show ?? "Show")
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
        >
          {showPassword ? (
            <Eye className="w-4 h-4" />
          ) : (
            <EyeOff className="w-4 h-4" />
          )}
        </button>
      </div>
      {strength && (
        <AnimatedComponent show={value.length > 0} delay={0.1}>
          <div className="py-2">
            <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div
                className={clsx(
                  "h-full rounded-full transition-all duration-300",
                  strength.color,
                  strength.width,
                )}
              />
            </div>
            <span
              className={clsx(typograph({ size: "xs" }), "text-xs", {
                "text-red-500": strength.level === "weak",
                "text-yellow-500": strength.level === "medium",
                "text-green-500": strength.level === "strong",
              })}
            >
              {dict?.[strength.level as keyof NonNullable<typeof dict>] ??
                strength.label}
            </span>
          </div>
        </AnimatedComponent>
      )}
      {isConfirmField && (
        <AnimatedComponent show={value.length > 0}>
          <span
            className={clsx(
              typograph({ size: "xs" }),
              passwordsMatch ? "text-green-500" : "text-red-500",
            )}
          >
            {passwordsMatch
              ? (dict?.match ?? "✓ Match")
              : (dict?.noMatch ?? "No match")}
          </span>
        </AnimatedComponent>
      )}
    </div>
  );
}
