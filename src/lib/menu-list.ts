type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: string;
};

export function getMenuList(pathname: string): Menu[] {
  return [
    {
      href: "/getting-started",
      label: "Getting Started",
      active: pathname.includes("/getting-started"),
      icon: "menu:home",
    },
    {
      href: "/overview",
      label: "Overview",
      active: pathname.includes("/overview"),
      icon: "menu:overview",
    },
    {
      href: "/accounts",
      label: "Accounts",
      active: pathname.includes("/accounts"),
      icon: "menu:home",
    },
    {
      href: "/invoice",
      label: "Invoice",
      active: pathname.includes("/invoice"),
      icon: "menu:invoice",
    },
    {
      href: "/beneficiary-management",
      label: "Beneficiary Management",
      active: pathname.includes("/invoice"),
      icon: "menu:users",
    },
    {
      href: "/help-center",
      label: "Help Center",
      active: pathname.includes("/help-center"),
      icon: "menu:help",
    },
    {
      href: "/settings",
      label: "Settings",
      active: pathname.includes("/settings"),
      icon: "menu:settings",
    },
  ];
}
