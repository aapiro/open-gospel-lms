import React from 'react';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children, role }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role={role} />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}