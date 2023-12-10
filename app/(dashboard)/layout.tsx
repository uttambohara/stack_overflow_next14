import Header from "@/components/shared/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[70px_1fr] md:grid-cols-[180px_1fr] min-h-screen">
      <aside className="hidden md:block border-r border-gray-100 row-span-full">
        Sidebar
      </aside>

      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
}
