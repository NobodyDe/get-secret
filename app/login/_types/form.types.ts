export interface FormState {
  password: string;
  confirmPassword: string;
  masterPassword: string;
  confirmMasterPassword: string;
  showPassword: boolean;
  showMasterPassword: boolean;
  agreedToTerms: boolean;
}

export enum FormType {
  SET_FIELD = "SET_FIELD",
  TOGGLE_PASSWORD = "TOGGLE_PASSWORD_VISIBILITY",
  TOGGLE_MASTER = "TOGGLE_MASTER_PASSWORD_VISIBILITY",
  TOGGLE_TERMS = "TOGGLE_TERMS",
}

export type FormAction =
  | {
      type: FormType.SET_FIELD;
      payload: { field: keyof FormState; value: string };
    }
  | { type: FormType.TOGGLE_PASSWORD }
  | { type: FormType.TOGGLE_MASTER }
  | { type: FormType.TOGGLE_TERMS };
