import Link from "next/link";
import Text from "../../components/ui/Text";

interface AuthFooterProps {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthFooter({ text, linkText, href }: AuthFooterProps) {
  return (
    <footer className="py-4">
      <Text as="p" size="xs" color="detail">
        {text}{" "}
        <Link href={href}>
          <Text as="span" hover="white">
            {linkText}
          </Text>
        </Link>
      </Text>
    </footer>
  );
}
