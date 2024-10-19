import { Loader } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-full flex items-center justify-center ">
      <Loader className="animate-spin size-6 text-muted-foreground " />
    </div>
  );
};

export default loading;
