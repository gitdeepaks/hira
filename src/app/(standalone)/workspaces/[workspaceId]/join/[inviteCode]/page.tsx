import { getCurrent } from "@/features/auth/queries";
import { JoinWorkspaceForm } from "@/features/workspaces/components/JoinWorkspaceForm";
import { getWorkSpaceInfo } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";
import React from "react";

interface WorkspaceJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceJoinPage = async ({ params }: WorkspaceJoinPageProps) => {
  const user = await getCurrent();
  if (!user) {
    return redirect("/sign-in");
  }

  const workspaceInfo = await getWorkSpaceInfo({
    workspaceId: params.workspaceId,
  });

  if (!workspaceInfo) {
    return redirect("/");
  }

  return (
    <div className="w-full lg:max-w-screen-2xl">
      <JoinWorkspaceForm initialValues={workspaceInfo} />
    </div>
  );
};

export default WorkspaceJoinPage;
