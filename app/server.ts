import { showRoutes } from "hono/dev";
import { createApp } from "honox/server";
import service from "./services";

const app = createApp({
  init(app) {
    if (import.meta.env.DEV) {
      app.route("/api", service);
    }
  },
});

showRoutes(app);

export default app;
