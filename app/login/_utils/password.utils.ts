import type { PasswordStrength } from "../_types/password.types";

export function getPasswordStrength(password: string): PasswordStrength {
  if (password.length === 0) {
    return { level: "none", label: "", color: "", width: "w-0" };
  }
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  if (hasLetters && hasNumbers && hasSpecial) {
    return {
      level: "strong",
      label: "Senha forte",
      color: "bg-green-500",
      width: "w-full",
    };
  }

  if ((hasLetters && hasNumbers) || hasSpecial) {
    return {
      level: "medium",
      label: "Senha média",
      color: "bg-yellow-500",
      width: "w-2/3",
    };
  }

  return {
    level: "weak",
    label: "Senha fraca",
    color: "bg-red-500",
    width: "w-1/3",
  };
}
