import { HttpMiddlewareEffect } from "@marblejs/http";
import { requestValidator$, t } from "@marblejs/middleware-io";

export const validationMiddleWare$: <T extends t.Props>(
  dto: t.TypeC<T>
) => HttpMiddlewareEffect = (dto) => (req$) =>
  req$.pipe(requestValidator$({ body: dto }));
