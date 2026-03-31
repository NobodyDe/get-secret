import { Lock } from "lucide-react";
import { typograph } from "../styles/typograph";

export default function Logo() {
  return (
    <>
      <div className=" border-2 p-3 rounded-lg">
        <Lock />
      </div>
      <h1 className={typograph({ size: "logo" })}>GETSecret</h1>
    </>
  );
}
