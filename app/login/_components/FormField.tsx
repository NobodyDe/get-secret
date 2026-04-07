import { input } from "../../components/styles/input";
import Text from "../../components/ui/Text";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: FormFieldProps) {
  return (
    <div className="flex flex-col text-start gap-1">
      <label htmlFor={id}>
        <Text>{label}</Text>
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className={input()}
        required={required}
      />
    </div>
  );
}
