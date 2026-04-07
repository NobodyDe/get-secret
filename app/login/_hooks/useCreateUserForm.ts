"use client";
import { useReducer, useMemo } from "react";
import type { FormState, FormAction } from "../_types/form.types";
import { FormType } from "../_types/form.types";
import { getPasswordStrength } from "../_utils/password.utils";

const initialState: FormState = {
  password: "",
  confirmPassword: "",
  masterPassword: "",
  confirmMasterPassword: "",
  showPassword: false,
  showMasterPassword: false,
  agreedToTerms: false,
};
function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case FormType.SET_FIELD:
      return { ...state, [action.payload.field]: action.payload.value };
    case FormType.TOGGLE_PASSWORD:
      return { ...state, showPassword: !state.showPassword };
    case FormType.TOGGLE_MASTER:
      return { ...state, showMasterPassword: !state.showMasterPassword };
    case FormType.TOGGLE_TERMS:
      return { ...state, agreedToTerms: !state.agreedToTerms };
    default:
      return state;
  }
}

export function useCreateUserForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const passwordStrength = useMemo(
    () => getPasswordStrength(state.password),
    [state.password],
  );
  const masterPasswordStrength = useMemo(
    () => getPasswordStrength(state.masterPassword),
    [state.masterPassword],
  );

  const passwordsMatch = state.password === state.confirmPassword;
  const masterPasswordsMatch =
    state.masterPassword === state.confirmMasterPassword;

  const isFormValid =
    state.agreedToTerms &&
    passwordsMatch &&
    masterPasswordsMatch &&
    state.password.length > 0 &&
    state.masterPassword.length > 0;

  const actions = {
    setField: (field: keyof FormState, value: string) =>
      dispatch({ type: FormType.SET_FIELD, payload: { field, value } }),
    togglePassword: () => dispatch({ type: FormType.TOGGLE_PASSWORD }),
    toggleMaster: () => dispatch({ type: FormType.TOGGLE_MASTER }),
    toggleTerms: () => dispatch({ type: FormType.TOGGLE_TERMS }),
  };

  return {
    state,
    actions,
    passwordStrength,
    masterPasswordStrength,
    passwordsMatch,
    masterPasswordsMatch,
    isFormValid,
  };
}
