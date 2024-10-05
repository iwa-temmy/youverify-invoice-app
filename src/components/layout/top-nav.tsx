import { useLocation } from "react-router-dom";
import { MobileNav } from "./mobile-nav";
import { UserNav } from "./user-nav";

const TopNav = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-10 w-full mx-auto border-b border-lightBlue md:w-[95%]">
      <div className="flex h-20 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <MobileNav />
          <h1 className="font-medium text-2xl uppercase text-darkGrey tracking-[.15rem]">
            {location?.pathname?.replace("/", "")}
          </h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
