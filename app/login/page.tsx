import Link from "next/link";
import { typograph } from "../components/styles/typograph";
import { input } from "../components/styles/input";
import Logo from "../components/ui/logo";
import Text from "../components/ui/Text";
import Divider from "./_components/Divider";
import Button from "../components/ui/Button";
import AuthFooter from "./_components/AuthFooter";
import { getDictionary } from "../dictionaries";

export default async function Page() {
  const dict = await getDictionary();

  return (
    <div>
      <div className="lg:hidden flex items-center justify-center gap-4 py-8">
        <Logo />
      </div>
      <Text color="sub">{dict.login.badge}</Text>
      <div className="flex flex-col">
        <Text size="lg">Create an account</Text>
        <Text color="sub">Enter your email below to create your account</Text>
      </div>
      <form className="w-full flex flex-col gap-4 py-4">
        <input
          type="email"
          placeholder={dict.login.emailPlaceholder}
          className={input({})}
          required
        />

        <Button type="submit" color="white">
          Sign in with Email
        </Button>
        <Divider>OR CONTINUE WITH</Divider>
        <Button type="submit" color="black">
          GitHub
        </Button>
      </form>
      <footer className="flex flex-col gap-4">
        <Text size="xs" color="detail">
          By clicking continue, you are agree to our{" "}
          <Text size="xs" hover="white">
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text size="xs" hover="white">
            Privacy Policy
          </Text>
        </Text>
        <AuthFooter
          text="Não tem conta"
          linkText="Criar Conta"
          href="/login/create-user"
        />
      </footer>
    </div>
  );
}
