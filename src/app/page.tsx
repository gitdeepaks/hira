"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/useCurrent";
import { useLogout } from "@/features/auth/api/useLogout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data, isLoading } = useCurrent();
  const router = useRouter();
  const { mutate: logout } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data, isLoading, router]);
  return (
    <div className="">
      Only Visble to authenticated users.
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
