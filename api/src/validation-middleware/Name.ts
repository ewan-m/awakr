import { createFieldType } from "./createFieldType";

export const Name = createFieldType(
  "Name",
  (input) => input.length > 0 && input.length < 100
);
