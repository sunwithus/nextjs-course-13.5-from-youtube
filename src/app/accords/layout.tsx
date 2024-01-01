import type { PropsWithChildren } from 'react';
import NavLinks from './NavLinks';

export default function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="h-screen">
      <h1 className="font-bold">Аккорды к песням</h1>
      <NavLinks />
      {children}
    </div>
  );
}
