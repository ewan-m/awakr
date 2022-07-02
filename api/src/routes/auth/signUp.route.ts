import { r } from "@marblejs/http";
import { t } from "@marblejs/middleware-io";
import { map } from "rxjs/operators";
import { Email } from "../../validation-middleware/Email";
import { Name } from "../../validation-middleware/Name";
import { Password } from "../../validation-middleware/Password";
import { validationMiddleWare$ } from "../../validation-middleware/validationMiddleware";

const SignUpDto = t.type({
  name: Name,
  email: Email,
  password: Password,
});

export const signUp$ = r.pipe(
  r.matchPath("/sign-up"),
  r.matchType("POST"),
  r.use(validationMiddleWare$(SignUpDto)),
  r.useEffect((req$) => req$.pipe(map(() => ({ body: "hello" }))))
);
