import { Lock, Shield } from "lucide-react";
import Logo from "../components/ui/logo";
import { getDictionary } from "../dictionaries";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = await getDictionary();

  return (
    <section className="min-h-screen flex">
      <aside className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-black via-zinc-900 to-black items-center justify-center p-12 fixed inset-y-0 left-0">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <Logo />
          </div>
          <div className="space-y-4 text-sm text-zinc-500">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-white mb-1">{dict.sidebar.masterPassword}</p>
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
      </aside>
      <main className="flex-1 flex items-center justify-center lg:ml-[50%] min-h-screen overflow-y-auto">
        <div className="text-center flex flex-col gap-2 max-w-md w-full p-6">
          {children}
        </div>
      </main>
    </section>
  );
}
