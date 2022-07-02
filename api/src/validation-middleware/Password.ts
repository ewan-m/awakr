import isStrongPassword from "validator/lib/isStrongPassword";
import { createFieldType } from "./createFieldType";

export const Password = createFieldType("Password", (input) =>
  isStrongPassword(input, {
    minLength: 8,
    minLowercase: 1,
    minNumbers: 0,
    minUppercase: 0,
    minSymbols: 0,
  })
);
