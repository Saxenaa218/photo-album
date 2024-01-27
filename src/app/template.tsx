"use client";

import Breadcrumb from "@/components/Breadcrumb";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="mb-5 sm:mb-10 p-3 sm:p-5 bg-blue-100 rounded-md">
        <Breadcrumb />
      </nav>
      {children}
    </>
  );
}
