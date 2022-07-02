import { createHttpTestBed } from "@marblejs/testing";
import { pipe } from "fp-ts/lib/function";
import { listener } from "../../http.listener";

type ValidationTest = {
  path: string;
  success: boolean;
  body: Record<string, string>;
};

describe("auth$", () => {
  const httpTestBed = createHttpTestBed({
    listener,
  });

  describe("request validations", () => {
    const validationTests: ValidationTest[] = [
      {
        path: "/auth/sign-in",
        success: true,
        body: { email: "ewan@email.com", password: "password" },
      },
      {
        path: "/auth/sign-in",
        success: false,
        body: { email: "ewan@@email.com", password: "password" },
      },
      {
        path: "/auth/sign-in",
        success: false,
        body: { email: "ewan@email.com", password: "pass" },
      },
      {
        path: "/auth/sign-up",
        success: true,
        body: { email: "ewan@email.com", password: "password", name: "Ewan" },
      },
      {
        path: "/auth/sign-up",
        success: false,
        body: { email: "ewan@email.com", password: "password", name: "" },
      },
    ];

    validationTests.forEach(({ path, success, body }) => {
      test(`${
        success ? "valid" : "invalid"
      } for ${path} with body ${JSON.stringify(body)}`, async () => {
        expect.assertions(1);
        const { request, finish } = await httpTestBed();

        const response = await pipe(
          request("POST"),
          request.withPath(path),
          request.withBody(body),
          request.send
        );

        expect(response.statusCode).toBe(success ? 200 : 400);

        await finish();
      });
    });
  });
});
