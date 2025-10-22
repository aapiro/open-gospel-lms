import React from 'react';
import Navbar from '../components/Navbar';

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}