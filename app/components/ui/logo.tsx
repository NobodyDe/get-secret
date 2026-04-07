import { Lock } from "lucide-react";
import Text from "../ui/Text";

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <div className=" border-2 p-3 rounded-lg">
        <Lock />
      </div>
      <Text as="h1" size="logo">
        GETSecret
      </Text>
    </div>
  );
}
