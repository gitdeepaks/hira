import React from "react";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { EditWorkspaceForm } from "@/features/workspaces/components/EditWorkspaceForm";
import { getWorkSpace } from "@/features/workspaces/actions";

interface WorkspaceIdSettingsPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  const initialValues = await getWorkSpace({
    workspaceId: params.workspaceId,
  });

  if (!initialValues) {
    redirect(`/workspaces/${params.workspaceId}`);
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsPage;
