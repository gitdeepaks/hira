import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import Image from "next/image";

interface WorkspaceAvatarProps {
  image?: string;
  name: string;
  className?: string;
}
export const WorkspaceAvatar = ({
  image,
  name,
  className,
}: WorkspaceAvatarProps) => {
  if (image) {
    return (
      <div
        className={cn("relative size-10 rounded-md overflow-hidden", className)}
      >
        <Image src={image} alt={name} fill className="object-cover" />;
      </div>
    );
  }
  return (
    <Avatar className={cn("siz-10 rounded-md", className)}>
      <AvatarFallback className="text-white rounded-md bg-blue-700 font-semibold text-lg uppercase">
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
