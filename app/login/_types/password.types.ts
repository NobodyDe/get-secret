export interface PasswordStrength {
  level: "weak" | "medium" | "strong" | "none";
  label: string;
  color: string;
  width: string;
}
