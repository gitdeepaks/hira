"use client";
import { DottedSaparator } from "@/components/DottedSaparator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useJoinWorkspace } from "../api/useJoinWorkspace";
import { useInviteCode } from "../hooks/useInviteCode";
import { useWorkSpaceId } from "../hooks/useWorkSpaceId";
import { useRouter } from "next/navigation";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({
  initialValues,
}: JoinWorkspaceFormProps) => {
  const workspaceId = useWorkSpaceId();
  const inviteCode = useInviteCode();
  const { mutate: joinWorkspace, isPending } = useJoinWorkspace();
  const router = useRouter();

  const onSubmit = () => {
    joinWorkspace(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join Workspace</CardTitle>
        <CardDescription>
          You&apos;ve been invited to join <strong>{initialValues.name}</strong>{" "}
          Workspace .
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSaparator />
      </div>
      <CardContent className="p-7">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-2 gap-x-4">
          <Button
            size="lg"
            className="w-full lg:w-fit"
            variant="secondary"
            type="button"
          >
            <Link href="/">Cancel</Link>
          </Button>
          <Button
            onClick={onSubmit}
            disabled={isPending}
            type="button"
            size="lg"
            className="w-full lg:w-fit"
          >
            Join
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
