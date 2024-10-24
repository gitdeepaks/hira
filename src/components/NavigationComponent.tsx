"use client";

import { cn } from "@/lib/utils";
import { Settings, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
import { useWorkSpaceId } from "@/features/workspaces/hooks/useWorkSpaceId";

import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Home",
    href: "",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    activeIcon: Settings,
  },
  {
    label: "Members",
    href: "/members",
    icon: Users,
    activeIcon: Users,
  },
];

export const NavigationComponent = () => {
  const workspaceId = useWorkSpaceId();
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const fullHref = `/workspaces/${workspaceId}${item.href}`;
        const isActive = pathname === fullHref;
        const Icon = isActive ? item.activeIcon : item.icon;
        return (
          <Link href={fullHref} key={item.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 rounded-md p-2 font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              <span>{item.label}</span>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
