import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferRequestType<(typeof client.api.auth.login)["$post"]>;
type RequestType = InferResponseType<
  (typeof client.api.auth.login)["$post"]
>["json"];
