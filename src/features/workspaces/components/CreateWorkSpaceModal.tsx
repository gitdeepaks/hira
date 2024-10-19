"use client";

import React from "react";
import { ResponsiveModal } from "@/components/ResponsiveModal";
import { CreateWorkspaceForm } from "./CreateWorkspaceForm";
import { useCreateWorkSpaceModal } from "../hooks/useCreateWorkSpaceModal";

export const CreateWorkSpaceModal = () => {
  const { isOpen, setIsOpen, close } = useCreateWorkSpaceModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
};
