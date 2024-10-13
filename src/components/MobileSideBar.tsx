"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { SideBar } from "./SideBar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export const MobileSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon" className="lg:hidden">
          <MenuIcon className="w-4 h-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-3/4 sm:w-1/2">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};
