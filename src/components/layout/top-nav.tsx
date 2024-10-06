import { useLocation } from "react-router-dom";
import { MobileNav } from "./mobile-nav";
import { Button } from "../ui/button";
import Icon from "../icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";

const TopNav = () => {
  const location = useLocation();

  const handleSignOut = () => {
    sessionStorage.setItem("token", "");
    sessionStorage.setItem("user", "");
    window.location.href = "/auth/login";
  };

  return (
    <header className="w-full mx-auto border-b border-lightBlue md:w-[95%]">
      <div className="flex px-4 md:px-4 h-20 items-center">
        <div className="flex items-center space-x-2 lg:space-x-0">
          <MobileNav />
          <h1 className="font-medium text-xs md:text-xl uppercase text-darkGrey tracking-[.05rem] md:tracking-[.15rem]">
            {location?.pathname?.replace("/", "")}
          </h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <Button variant="outline" className="h-12 w-12 rounded-full">
            <Icon icon="menu:notification" className="text-xl" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="outline"
                className="relative h-12 w-[82px] flex gap-2 rounded-full"
              >
                <Avatar className="h-8 bg-blue text-white w-8 font-bold text-sm -ml-3">
                  <AvatarFallback className="bg-transparent">KO</AvatarFallback>
                </Avatar>
                <Icon icon="random:arrowDropdown" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                  className="w-full bg-transparent hover:bg-blue hover:text-white text-black"
                  onClick={handleSignOut}
                >
                  Sign out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
