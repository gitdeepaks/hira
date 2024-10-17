import { DashboardNav } from "@/components/DashboardNav";
import { SideBar } from "@/components/SideBar";
import { Metadata } from "next";
import React from "react";
interface layoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Hira",
  description:
    "Hira is a project management tool for teams to track their work and collaborate.",
  icons: {
    icon: "/logo.svg",
  },
};

const layout = ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <SideBar />
        </div>
        <div className="lg:pl-[264px] w-full">
          <div className="mx-auto h-full max-w-screen-2xl">
            <DashboardNav />
            <main className="h-full py-8 px-6 flex flex-col">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
