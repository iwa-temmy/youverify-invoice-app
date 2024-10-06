import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-row h-screen">
      <aside className="hidden md:block w-1/4 bg-lightBlue h-full p-6">
        <img src="/logo.svg" alt="logo" className="h-8" />
      </aside>
      <main className="w-full md:w-3/4 h-full py-6 px-6 md:px-0">
        <img src="/logo.svg" alt="logo" className="block md:hidden h-8" />
        <div className="flex flex-col md:justify-center md:items-center w-full pt-12 md:pt-0 md:w-1/2 mx-auto h-3/4">
          {children}
        </div>
      </main>
    </section>
  );
};

export default AuthLayout;
