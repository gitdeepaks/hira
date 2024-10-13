import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DottedSaparator } from "./DottedSaparator";
import { NavigationComponent } from "./NavigationComponent";

export const SideBar = () => {
  return (
    <aside className="h-full w-full bg-neutral-100 p-4">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={164} height={50} />
      </Link>
      <DottedSaparator className="my-4" />
      <NavigationComponent />
    </aside>
  );
};
