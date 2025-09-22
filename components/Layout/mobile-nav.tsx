"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../logo";
import { Button } from "../ui/button";
import Nav from "./nav";

type Props = {};

export default function MobileNav({}: Props) {
  const [open, setOpen] = React.useState(false);
  const onHandleCloseClickLink = () => {
    setOpen(false);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <CiMenuFries className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col p-8 " side="right">
        <SheetHeader>
          <SheetTitle className="flex justify-center items-center">
            <Logo />
          </SheetTitle>
          <SheetDescription>
            <Nav
              className="flex flex-col gap-8 mt-8 justify-center items-center"
              showBorder={false}
              classNameLink="hover:bg-accent hover:text-accent-foreground p-4 rounded-md"
              onClick={onHandleCloseClickLink}
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
