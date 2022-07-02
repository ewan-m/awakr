import { t } from "@marblejs/middleware-io";

export const createFieldType = (
  typeName: string,
  isValid: (input: string) => boolean
): t.Type<string, string, unknown> =>
  new t.Type(
    typeName,
    t.string.is,
    (input, context) =>
      typeof input === "string" && isValid(input)
        ? t.success(input)
        : t.failure(input, context),
    String
  );
