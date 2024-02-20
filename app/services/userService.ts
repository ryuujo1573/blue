import { Hono } from "hono";

const user = new Hono().get("/:id", (c) => {
  return c.json({ id: c.req.param().id });
});
export default user;
export type AccountSchema = typeof user;
