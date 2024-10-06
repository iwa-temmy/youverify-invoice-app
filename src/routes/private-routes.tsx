import { Sidebar } from "@/components/layout/sidebar";
import TopNav from "@/components/layout/top-nav";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token: string = sessionStorage.getItem("token") || "";

  useEffect(() => {
    if (!token) {
      window.location.href = "/auth/login";
    }
  }, [token]);
  return token ? (
    <main className="w-screen flex flex-row h-screen overflow-hidden">
      <Sidebar />
      <section className="w-screen md:w-[calc(100vw-288px)] bg-[#F5F6FA] h-full">
        <TopNav />
        <section className="px-4 md:px-12 pt-8 py-8 h-[calc(100vh-80px)] overflow-auto">
          <Outlet />
        </section>
      </section>
    </main>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default PrivateRoutes;

// bg-[#F5F6FA]
