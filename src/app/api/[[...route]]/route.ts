import { Hono } from "hono";

import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => c.json({ message: "Hello World" }));

app.get("/code/:codeId", (c) => {
  const { codeId } = c.req.param();

  return c.json({ code: codeId });
});

export const GET = handle(app);
