"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { createWorkspaceSchema } from "../schema";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { DottedSaparator } from "@/components/DottedSaparator";

interface CreateWorkspaceFormProps {
  onCancel?: () => void;
}
export const CreateWorkspaceForm = ({ onCancel }: CreateWorkspaceFormProps) => {
  const form = useForm<z.infer<typeof createWorkspaceSchema>>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
    console.log({ values });
  };
  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex p-7">
        <CardTitle className="text-xl font-bold">Create Workspace</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSaparator />
      </div>
      <CardContent className="p-7"></CardContent>
    </Card>
  );
};
