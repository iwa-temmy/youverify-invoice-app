import { Menu } from "@/components/layout/menu";

export function Sidebar() {
  return (
    <aside className="hidden md:block h-screen w-72 bg-white">
      <div className="relative h-full flex flex-col pt-10 px-4">
        <img src="./logo.svg" alt="logo" className="px-4 h-6 mb-4" />
        <Menu />
      </div>
    </aside>
  );
}
