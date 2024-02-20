import { Hono } from "hono";
import user from "./userService";

const api = new Hono();

const route = api.route("/user", user);

export type ApiSchema = typeof route;
export default api;
