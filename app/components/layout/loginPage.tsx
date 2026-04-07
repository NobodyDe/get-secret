import { Lock, Shield } from "lucide-react";
import { button } from "../styles/buttonStyle";
import { input } from "../styles/input";
import { typograph } from "../styles/typograph";
import Logo from "../ui/logo";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-black via-zinc-900 to-black items-center justify-center p-12">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <Logo />
          </div>
          <div className="space-y-4 text-sm text-zinc-500">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-white mb-1">Senha Mestra</p>
                <p>A chave principal que protege todas as suas senhas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-white mb-1">Criptografia Total</p>
                <p>Suas senhas são protegidas com criptografia de ponta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center flex flex-col gap-2 max-w-md w-full">
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
              <button type="button" className="underline cursor-pointer">
                <Link
                  href="login/create-user"
                  className={typograph({ hover: "white" })}
                >
                  Criar Conta
                </Link>
              </button>
            </p>
          </footer>
        </div>
      </main>
    </section>
  );
}
