import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
} from "@/components/ui/sheet";
import { Menu } from "./menu";
import Icon from "../icon";
import { useState } from "react";

export const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleMenuClose = () => {
    setOpenNav(false);
  };
  return (
    <Sheet open={openNav} onOpenChange={handleMenuClose} modal>
      <Button
        className="h-8 lg:hidden"
        variant="outline"
        size="icon"
        onClick={() => setOpenNav(true)}
      >
        <Icon icon="lucide:menu" className="text-lg" />
      </Button>

      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <img src="./logo.svg" alt="logo" className="px-4 h-6 mb-4 -mt-1" />
        </SheetHeader>
        <Menu handleMenuClose={handleMenuClose} />
      </SheetContent>
    </Sheet>
  );
};
