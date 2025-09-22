import Link from "next/link";
import Logo from "../logo";
import { Button } from "../ui/button";
import MobileNav from "./mobile-nav";
import Nav from "./nav";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="py-8 xl:py-12 xl:px-0 px-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <div className="hidden xl:flex items-center gap-8">
          <Nav className="flex items-center gap-8" showBorder />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
