import isEmail from "validator/lib/isEmail";
import { createFieldType } from "./createFieldType";

export const Email = createFieldType("Email", isEmail);
