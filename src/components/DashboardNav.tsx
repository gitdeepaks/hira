import { UserButton } from "@/features/auth/components/UserButton";
import React from "react";
import { MobileSideBar } from "./MobileSideBar";

export const DashboardNav = () => {
  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground">Manage your tasks and projects</p>
      </div>
      <MobileSideBar />
      <UserButton />
    </nav>
  );
};
