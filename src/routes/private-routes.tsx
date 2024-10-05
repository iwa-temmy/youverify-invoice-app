import { Sidebar } from "@/components/layout/sidebar";
import TopNav from "@/components/layout/top-nav";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token: boolean = true;
  return token ? (
    <div className="w-screen flex flex-row h-screen">
      <Sidebar />
      <div className="w-screen md:w-[calc(100vw-288px)] bg-[#F5F6FA]">
        <TopNav />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default PrivateRoutes;
