import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "@/components/icon";

export function Menu({ handleMenuClose }: { handleMenuClose?: () => void }) {
  const pathname = useLocation();
  const navigate = useNavigate();
  const menuList = getMenuList(pathname?.pathname);

  const handleNavigate = (path: string) => {
    navigate(path);
    handleMenuClose?.();
  };

  return (
    <div className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map((item, index) => (
            <li className={cn("w-full")} key={index}>
              <Button
                variant={item.active ? "link" : "ghost"}
                className="w-full justify-start h-14 mb-1"
                onClick={() => handleNavigate(item.href)}
              >
                <span className="mr-4">
                  <Icon icon={item.icon} height={24} width={24} />
                </span>
                <p className="max-w-[200px] text-grey font-light text-sm tracking-[.05rem]">
                  {item.label}
                </p>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
