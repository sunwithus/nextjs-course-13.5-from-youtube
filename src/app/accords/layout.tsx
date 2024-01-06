import type { PropsWithChildren } from 'react';
import NavLinks from './NavLinks';

export default function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="h-screen w-80 border-double border-4 border-indigo-600">
      <h1 className="font-bold">Аккорды к песням</h1>
      <NavLinks />
      {children}
    </div>
  );
}
