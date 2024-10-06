// import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "./menu";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <img src="./logo.svg" alt="logo" className="px-4 h-6 mb-4 -mt-1" />
        </SheetHeader>
        <Menu />
      </SheetContent>
    </Sheet>
  );
};
