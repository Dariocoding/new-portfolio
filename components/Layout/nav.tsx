"use client";
import { links } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  showBorder?: boolean;
  classNameLink?: string;
  onClick?: () => void;
};

export default function Nav({
  className,
  showBorder = true,
  classNameLink,
  onClick,
}: Props) {
  const pathname = usePathname();

  return (
    <nav className={cn(className)}>
      {links.map((link) => {
        const sameLink = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "capitalize font-medium hover:text-accent transition-all duration-300 text-white",
              sameLink && "text-accent",
              sameLink && showBorder && "border-b-2 border-accent",
              classNameLink
            )}
            onClick={(e) => {
              onClick?.();
            }}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
