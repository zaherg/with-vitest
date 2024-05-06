import { expect, test } from "vitest";
import { createRequest } from "node-mocks-http";

import { GET } from "@/src/api/users/route";

test("User endpoint works as expected with mocking", async () => {
    const request = createRequest({ method: "GET", url: "/api/users" });
    const response = await GET({ ...request } as any);

    expect(await response.json()).toMatchObject([{
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  }])
    expect(response.status).toBe(200);
});