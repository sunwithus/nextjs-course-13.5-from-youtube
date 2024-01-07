import type { PropsWithChildren } from "react";
import NavLinks from "./NavLinks";

export default function DashboardLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <div className="relative pt-16 h-screen w-80 border-double border-4 border-indigo-600">
      <h1 className="font-bold">Аккорды к песням</h1>
      <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 lg:bottom-0 lg:z-auto lg:border-b-0 lg:border-r lg:border-gray-800">
        <div className="flex flex-col h-14 items-left px-4 py-4 lg:h-auto">
          <NavLinks />
        </div>
      </div>
      {children}
    </div>
  );
}
