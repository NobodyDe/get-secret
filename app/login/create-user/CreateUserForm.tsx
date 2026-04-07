"use client";

import FormField from "@/app/login/_components/FormField";
import { buttonStyle } from "@/app/components/styles/buttonStyle";

import { typograph } from "@/app/components/styles/typograph";

import Logo from "@/app/components/ui/logo";
import clsx from "clsx";
import { Check, Shield, Upload } from "lucide-react";

import { useCreateUserForm } from "../_hooks/useCreateUserForm";
import PasswordField from "@/app/login/_components/PasswordField";
import Divider from "@/app/login/_components/Divider";
import AuthFooter from "@/app/login/_components/AuthFooter";
import Text from "@/app/components/ui/Text";
import { Dictionary } from "@/app/dictionaries";

interface CreateUserFormProps {
  dict: Dictionary;
}

export default function CreateUserForm({ dict }: CreateUserFormProps) {
  const {
    state,
    actions,
    passwordStrength,
    masterPasswordStrength,
    passwordsMatch,
    masterPasswordsMatch,
    isFormValid,
  } = useCreateUserForm();

  return (
    <section>
      <form action="">
        <Logo />
        <div className="flex flex-col gap-1">
          <h1 className={typograph({ size: "lg" })}>{dict.createUser.title}</h1>
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
            <legend className="sr-only">{dict.fieldset.accountData}</legend>
            <FormField
              id="username"
              label={dict.createUser.usernameLabel}
              placeholder={dict.createUser.usernamePlaceholder}
              required
            />
            <FormField
              id="email"
              label={dict.createUser.emailLabel}
              placeholder={dict.createUser.emailPlaceholder}
              required
            />
            <PasswordField
              id="password"
              label={dict.createUser.passwordLabel}
              value={state.password}
              onChange={(v) => actions.setField("password", v)}
              showPassword={state.showPassword}
              onToggle={actions.togglePassword}
              strength={passwordStrength}
              dict={dict.password}
            />
            <PasswordField
              id="confirmPassword"
              label={dict.createUser.confirmPasswordLabel}
              value={state.confirmPassword}
              onChange={(v) => actions.setField("confirmPassword", v)}
              showPassword={state.showPassword}
              onToggle={actions.togglePassword}
              confirmValue={state.password}
              dict={dict.password}
            />
          </fieldset>
          <Divider>
            <div className="flex gap-2">
              <Shield className="w-4 h-4" />
              {dict.createUser.masterPasswordSection}
            </div>
          </Divider>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 space-y-1">
            <Text as="p" color="sub">
              {dict.createUser.masterPasswordNote}
              <Text> {dict.createUser.masterPasswordWarning}</Text>
            </Text>
          </div>
          <fieldset className="w-full flex flex-col gap-4">
            <legend className="sr-only">{dict.fieldset.masterPassword}</legend>
            <PasswordField
              id="masterPassword"
              label={dict.createUser.masterPasswordLabel}
              value={state.masterPassword}
              onChange={(v) => actions.setField("masterPassword", v)}
              showPassword={state.showMasterPassword}
              onToggle={actions.toggleMaster}
              strength={masterPasswordStrength}
              dict={dict.password}
            />

            <PasswordField
              id="confirmMasterPassword"
              label={dict.createUser.confirmMasterLabel}
              value={state.confirmMasterPassword}
              onChange={(v) => actions.setField("confirmMasterPassword", v)}
              showPassword={state.showMasterPassword}
              onToggle={actions.toggleMaster}
              confirmValue={state.masterPassword}
              dict={dict.password}
            />
          </fieldset>
          <div className="flex items-start gap-3 justify-center text-center py-2">
            <input
              type="checkbox"
              id="terms"
              checked={state.agreedToTerms}
              onChange={actions.toggleTerms}
              className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 focus:ring-zinc-500"
              required
            />
            <label
              htmlFor="terms"
              className={typograph({ size: "xs", color: "detail" })}
            >
              {dict.createUser.acceptTerms}{" "}
              <Text size="xs" hover="white">
                {dict.createUser.termsOfService}
              </Text>{" "}
              {dict.createUser.and}{" "}
              <Text size="xs" hover="white">
                {dict.createUser.privacyPolicy}
              </Text>
            </label>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={clsx(
              buttonStyle({ color: "white" }),
              "flex items-center justify-center gap-2",
              !isFormValid && "opacity-50 cursor-not-allowed",
            )}
          >
            <Check className="w-4 h-4" />
            {dict.createUser.submitButton}
          </button>
        </div>
      </form>
      <AuthFooter
        text={dict.createUser.hasAccount}
        linkText={dict.createUser.doLogin}
        href="/login"
      />
    </section>
  );
}
