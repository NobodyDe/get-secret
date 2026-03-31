import { Lock, Shield } from "lucide-react";
import Logo from "../components/ui/logo";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          {children}
        </div>
      </main>
    </section>
  );
}
