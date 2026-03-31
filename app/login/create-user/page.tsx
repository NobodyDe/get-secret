"use client";

import { button } from "@/app/components/styles/button";
import { input } from "@/app/components/styles/input";
import { typograph } from "@/app/components/styles/typograph";
import AnimatedComponent from "@/app/components/ui/AnimatedComponent";
import Logo from "@/app/components/ui/logo";
import clsx from "clsx";
import { Check, Eye, EyeOff, Shield, Upload } from "lucide-react";
import Link from "next/link";
import { useReducer } from "react";

interface FormState {
  password: string;
  confirmPassword: string;
  masterPassword: string;
  confirmMasterPassword: string;
  showPassword: boolean;
  showMasterPassword: boolean;
  agreedToTerms: boolean;
}

enum FormType {
  SET_FIELD = "SET_FIELD",
  TOGGLE_PASSWORD = "TOGGLE_PASSWORD_VISIBILITY",
  TOGGLE_MASTER = "TOGGLE_MASTER_PASSWORD_VISIBILITY",
  TOGGLE_TERMS = "TOGGLE_TERMS",
}

type FormAction =
  | {
      type: FormType.SET_FIELD;
      payload: { field: keyof FormState; value: string };
    }
  | { type: FormType.TOGGLE_PASSWORD }
  | { type: FormType.TOGGLE_MASTER }
  | { type: FormType.TOGGLE_TERMS };

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

function getPasswordStrength(password: string): {
  level: "weak" | "medium" | "strong" | "none";
  label: string;
  color: string;
  width: string;
} {
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

export default function CreateUser() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  console.log(state.confirmPassword);

  const passwordStrength = getPasswordStrength(state.password);
  const masterPasswordStrength = getPasswordStrength(state.masterPassword);

  const passwordsMatch = state.password === state.confirmPassword;
  const masterPasswordsMatch =
    state.masterPassword === state.confirmMasterPassword;

  const isFormValid =
    state.agreedToTerms &&
    passwordsMatch &&
    masterPasswordsMatch &&
    state.password.length > 0 &&
    state.masterPassword.length > 0;

  return (
    <section>
      <form action="">
        <div className="lg:hidden flex items-center justify-center gap-4 py-8">
          <Logo />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className={typograph({ size: "lg" })}>Criar Conta</h1>
          <p className={typograph({ color: "sub" })}>
            Configure seu perfil e senha mestra
          </p>
        </div>
        <div className="py-6 flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full border-2 border-zinc-700 flex items-center justify-center overflow-hidden bg-zinc-900 cursor-pointer hover:border-zinc-600 transition-colors">
              <div className="text-center transition-transform duration-300 ease-in-out hover:scale-110">
                <Upload className="w-8 h-8 text-zinc-500 mx-auto mb-1" />
                <span className="text-xs text-zinc-500">Foto</span>
              </div>
            </div>
            <input type="file" accept="image/*" className="hidden" />
          </div>
          <button className="p-1 hover:bg-zinc-400 rounded-lg max-w-3xs">
            <span
              className={clsx(typograph({ hover: "white" }), "cursor-pointer")}
            >
              Escolher foto de perfil
            </span>
          </button>
          <fieldset className="w-full flex flex-col gap-4">
            <legend className="sr-only">Dados da conta</legend>
            <div className="flex flex-col text-start gap-1">
              <label htmlFor="username">
                <span className={typograph()}>Username</span>
              </label>
              <input
                type="text"
                id="username"
                placeholder="seu_username"
                className={input()}
                required
              />
            </div>
            <div className="flex flex-col text-start gap-1">
              <label htmlFor="email">
                <span className={typograph()}>Email</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className={input()}
                required
              />
            </div>
            <div className="flex flex-col text-start gap-1">
              <label htmlFor="password">
                <span className={typograph()}>Senha da conta</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={state.showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={state.password}
                  onChange={(e) =>
                    dispatch({
                      type: FormType.SET_FIELD,
                      payload: { field: "password", value: e.target.value },
                    })
                  }
                  className={input()}
                  required
                />
                <button
                  type="button"
                  onClick={() => dispatch({ type: FormType.TOGGLE_PASSWORD })}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                >
                  {state.showPassword ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
              <AnimatedComponent show={state.password.length > 0} delay={0.1}>
                <div className="py-2">
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={clsx(
                        "h-full rounded-full transition-all duration-300",
                        passwordStrength.color,
                        passwordStrength.width,
                      )}
                    />
                  </div>
                  <span
                    className={clsx(typograph({ size: "xs" }), "text-xs", {
                      "text-red-500": passwordStrength.level === "weak",
                      "text-yellow-500": passwordStrength.level === "medium",
                      "text-green-500": passwordStrength.level === "strong",
                    })}
                  >
                    {passwordStrength.label}
                  </span>
                </div>
              </AnimatedComponent>
            </div>
            <div className="flex flex-col text-start gap-1">
              <label htmlFor="confirmPassword">
                <span className={typograph()}>Confirmar Senha</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={state.confirmPassword}
                onChange={(e) =>
                  dispatch({
                    type: FormType.SET_FIELD,
                    payload: {
                      field: "confirmPassword",
                      value: e.target.value,
                    },
                  })
                }
                className={input()}
                required
              />
              <AnimatedComponent show={state.confirmPassword.length > 0}>
                {passwordsMatch ? (
                  <span
                    className={clsx(
                      typograph({ size: "xs" }),
                      "text-green-500",
                    )}
                  >
                    ✓ Senhas coincidem
                  </span>
                ) : (
                  <span
                    className={clsx(typograph({ size: "xs" }), "text-red-500")}
                  >
                    As senhas não coincidem
                  </span>
                )}
              </AnimatedComponent>
            </div>
          </fieldset>
          <div className="w-full">
            <span className="flex items-center gap-4 text-xs uppercase text-zinc-500">
              <hr className="flex-1 border-zinc-700" />
              <div className="flex gap-2">
                <Shield className="w-4 h-4" />
                SENHA MESTRA
              </div>
              <hr className="flex-1 border-zinc-700" />
            </span>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 space-y-1">
            <p className={typograph({ color: "sub" })}>
              A senha mestra é única e irá descriptografar todas as suas senhas
              salvas.
              <span className={typograph()}> Não a esqueça!</span>
            </p>
          </div>
          <fieldset className="w-full flex flex-col gap-4">
            <legend className="sr-only">Senha Mestra</legend>
            <div className="flex flex-col text-start gap-1">
              <label htmlFor="masterPassword">
                <span className={typograph()}>Senha Mestra</span>
              </label>
              <div className="relative">
                <input
                  id="masterPassword"
                  type={state.showMasterPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={state.masterPassword}
                  onChange={(e) =>
                    dispatch({
                      type: FormType.SET_FIELD,
                      payload: {
                        field: "masterPassword",
                        value: e.target.value,
                      },
                    })
                  }
                  className={input()}
                  required
                />
                <button
                  type="button"
                  onClick={() => dispatch({ type: FormType.TOGGLE_MASTER })}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                >
                  {state.showMasterPassword ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>
              <AnimatedComponent
                show={state.masterPassword.length > 0}
                delay={0.1}
              >
                <div className="py-2">
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={clsx(
                        "h-full rounded-full transition-all duration-300",
                        masterPasswordStrength.color,
                        masterPasswordStrength.width,
                      )}
                    />
                  </div>
                  <span
                    className={clsx(typograph({ size: "xs" }), "text-xs", {
                      "text-red-500": masterPasswordStrength.level === "weak",
                      "text-yellow-500":
                        masterPasswordStrength.level === "medium",
                      "text-green-500":
                        masterPasswordStrength.level === "strong",
                    })}
                  >
                    {masterPasswordStrength.label}
                  </span>
                </div>
              </AnimatedComponent>
            </div>
            <div className="flex flex-col text-start gap-1">
              <label htmlFor="confirmMasterPassword">
                <span className={typograph()}>Confirmar Senha Mestra</span>
              </label>
              <input
                id="confirmMasterPassword"
                type="password"
                placeholder="••••••••"
                value={state.confirmMasterPassword}
                onChange={(e) =>
                  dispatch({
                    type: FormType.SET_FIELD,
                    payload: {
                      field: "confirmMasterPassword",
                      value: e.target.value,
                    },
                  })
                }
                className={input()}
                required
              />
              <AnimatedComponent show={state.confirmMasterPassword.length > 0}>
                {masterPasswordsMatch ? (
                  <span
                    className={clsx(
                      typograph({ size: "xs" }),
                      "text-green-500",
                    )}
                  >
                    ✓ Senhas coincidem
                  </span>
                ) : (
                  <span
                    className={clsx(typograph({ size: "xs" }), "text-red-500")}
                  >
                    As senhas não coincidem
                  </span>
                )}
              </AnimatedComponent>
            </div>
          </fieldset>
          <div className="flex items-start gap-3 justify-center text-center py-2">
            <input
              type="checkbox"
              id="terms"
              checked={state.agreedToTerms}
              onChange={() => dispatch({ type: FormType.TOGGLE_TERMS })}
              className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 focus:ring-zinc-500"
              required
            />
            <label
              htmlFor="terms"
              className={typograph({ size: "xs", color: "detail" })}
            >
              Eu aceito os{" "}
              <a
                href="#"
                className={typograph({
                  size: "xs",
                  hover: "white",
                })}
              >
                Termos de Serviço
              </a>{" "}
              e a{" "}
              <a
                href="#"
                className={typograph({
                  size: "xs",
                  hover: "white",
                })}
              >
                Política de Privacidade
              </a>
            </label>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={clsx(
              button({ color: "white" }),
              "flex items-center justify-center gap-2",
              !isFormValid && "opacity-50 cursor-not-allowed",
            )}
          >
            <Check className="w-4 h-4" />
            Criar conta
          </button>
        </div>
      </form>
      <footer className="py-4">
        <p className={typograph({ size: "xs", color: "detail" })}>
          Não tem uma conta?{" "}
          <Link
            href="/login/create-user"
            className={typograph({ hover: "white" })}
          >
            Criar Conta
          </Link>
        </p>
      </footer>
    </section>
  );
}
