import { getCurrent } from "@/features/auth/queries";
import { getWorkSpaces } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  const workspaces = await getWorkSpaces();

  if (workspaces.total === 0) {
    redirect("/workspaces/create");
  } else if (workspaces.total > 0 && "documents" in workspaces) {
    redirect(`/workspaces/${workspaces.documents[0].$id}`);
  } else {
    // Handle the case where workspaces doesn't have documents property
    redirect("/workspaces");
  }
}
