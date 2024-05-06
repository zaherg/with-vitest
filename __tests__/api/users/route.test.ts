import { expect, test } from "vitest";
import { createRequest } from "node-mocks-http";

import { GET } from "@/src/api/users/route";

test("User endpoint works as expected", async () => {
    const request = createRequest({ method: "GET", url: "/api/users" });
    const response = GET({ ...request } as any);
    expect(await response.json()).toMatchObject({"message": "hello"})
    expect(response.status).toBe(200);
});