import { r } from "@marblejs/http";
import { t } from "@marblejs/middleware-io";
import { map, mergeMap } from "rxjs/operators";
import { Email } from "../../validation-middleware/Email";
import { Password } from "../../validation-middleware/Password";
import { validationMiddleWare$ } from "../../validation-middleware/validationMiddleware";

const SignInDto = t.type({
  email: Email,
  password: Password,
});

export const signIn$ = r.pipe(
  r.matchPath("/sign-in"),
  r.matchType("POST"),
  r.use(validationMiddleWare$(SignInDto)),
  r.useEffect((req$) =>
    req$.pipe(
      mergeMap(() => [["yo mama"]]),
      map((tables) => ({ body: `tables: ${tables.join(", ")}` }))
    )
  )
);
