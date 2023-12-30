import type { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="h-screen">
      <h1>Dashboard Layout</h1>
      {children}
    </div>
  );
}
