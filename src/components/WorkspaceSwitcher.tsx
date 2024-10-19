"use client";

import { useGetWorkSpaces } from "@/features/workspaces/api/useGetWorkSpaces";
import { RiAddCircleFill } from "react-icons/ri";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WorkspaceAvatar } from "@/features/workspaces/components/WorkspaceAvatar";
import { useRouter } from "next/navigation";
import { useWorkSpaceId } from "@/features/workspaces/hooks/useWorkSpaceId";
import { useCreateWorkSpaceModal } from "@/features/workspaces/hooks/useCreateWorkSpaceModal";

export const WorkspaceSwitcher = () => {
  const router = useRouter();
  const workspaceId = useWorkSpaceId();

  const { data: workspaces } = useGetWorkSpaces();

  const { open } = useCreateWorkSpaceModal();

  const onSelectWorkspace = (workspaceId: string) => {
    router.push(`/workspaces/${workspaceId}`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">WorkSpaces</p>
        <RiAddCircleFill
          onClick={open}
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
        />
      </div>
      <Select onValueChange={onSelectWorkspace} value={workspaceId}>
        <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
          <SelectValue placeholder="Select a workspace" />
        </SelectTrigger>
        <SelectContent>
          {/* @ts-expect-error Server Component */}
          {workspaces?.documents.map((workspace) => (
            <SelectItem key={workspace.$id} value={workspace.$id}>
              <div className="flex justify-start items-center gap-3 font-medium">
                <WorkspaceAvatar
                  name={workspace.name}
                  image={workspace.imageUrl}
                />
                <span className="text-sm truncate">{workspace.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
