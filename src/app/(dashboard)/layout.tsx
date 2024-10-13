import { DashboardNav } from "@/components/DashboardNav";
import { SideBar } from "@/components/SideBar";
import React from "react";
interface layoutProps {
  children: React.ReactNode;
}

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
