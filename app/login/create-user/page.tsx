import { getDictionary } from "@/app/dictionaries";
import CreateUserForm from "./CreateUserForm";

export default async function Page() {
  const dict = await getDictionary();
  return <CreateUserForm dict={dict} />;
}
