import Link from "next/link";
import LoginPage from "../components/layout/loginPage";
import { typograph } from "../components/styles/typograph";
import { button } from "../components/styles/button";
import { input } from "../components/styles/input";
import Logo from "../components/ui/logo";

export default function Page() {
  return (
    <div>
      <div className="lg:hidden flex items-center justify-center gap-4 py-8">
        <Logo />
      </div>
      <span className={typograph({ color: "sub" })}>login</span>
      <div>
        <h1 className={typograph({ size: "lg" })}>Create an account</h1>
        <p className={typograph({ color: "sub" })}>
          Enter your email below to create your account
        </p>
      </div>
      <form className="w-full flex flex-col gap-4 py-4">
        <input
          type="email"
          placeholder="name@example.com"
          className={input({})}
          required
        />

        <button type="submit" className={button({ color: "white" })}>
          Sign in with Email
        </button>
        <div>
          <span className="flex items-center gap-4 text-xs uppercase text-zinc-500">
            <hr className="flex-1 border-zinc-700" />
            Or continue with
            <hr className="flex-1 border-zinc-700" />
          </span>
        </div>
        <button className={button({ color: "black" })}>GitHub</button>
      </form>
      <footer className="flex flex-col gap-4">
        <p className={typograph({ size: "xs", color: "detail" })}>
          By clicking continue, you are agree to our
          <a
            href="#"
            className={typograph({
              size: "xs",
              color: "detail",
              hover: "white",
            })}
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className={typograph({
              size: "xs",
              color: "detail",
              hover: "white",
            })}
          >
            Privace Policy
          </a>
        </p>
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
    </div>
  );
}
