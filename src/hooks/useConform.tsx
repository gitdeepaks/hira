import { ResponsiveModal } from "@/components/ResponsiveModal";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useState } from "react";

import {
  CardHeader,
  Card,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export const useConform = (
  title: string,
  message: string,
  variant: ButtonProps["variant"]
): [() => JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () => {
    return new Promise((resolve) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => (
    <ResponsiveModal open={promise !== null} onOpenChange={handleClose}>
      <Card className="w-full h-full border-none shadow-none">
        <CardContent className="pt-8">
          <CardHeader className="p-0">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{message}</CardDescription>
          </CardHeader>
          <div className="pt-4 w-full flex flex-col gap-y-2 lg:flex-row gap-x-2 items-center justify-end">
            <Button
              className="w-full lg:w-auto"
              variant={variant}
              onClick={handleConfirm}
            >
              Confirm
            </Button>
            <Button
              className="w-full lg:w-auto"
              variant="outline"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </ResponsiveModal>
  );

  return [ConfirmationDialog, confirm];
};
