import { httpListener } from "@marblejs/http";
import { logger$ } from "@marblejs/middleware-logger";
import { bodyParser$ } from "@marblejs/middleware-body";
import { auth$ } from "./routes/auth";

export const listener = httpListener({
  middlewares: [logger$(), bodyParser$()],
  effects: [auth$],
});
