import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

const headers = {
  authorization: "ApiKey 123",
};

describe("getApiKey", () => {
  test("non existent auth header", () => {
    const person = getAPIKey({});

    expect(person).toBeNull();
  });

  test("invalid auth header format", () => {
    const person = getAPIKey({ authorization: "123" });

    expect(person).toBeNull();
  });

  test("valid auth header", () => {
    const person = getAPIKey({
      authorization: "ApiKey 123",
    } as IncomingHttpHeaders);

    expect(person).toBe("123");
  });
});
