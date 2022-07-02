import { combineRoutes } from "@marblejs/http";
import { signIn$ } from "./signIn.route";
import { signUp$ } from "./signUp.route";

export const auth$ = combineRoutes("/auth", {
  effects: [signIn$, signUp$],
});
