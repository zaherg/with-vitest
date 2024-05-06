import { expect, test } from "vitest";
import { createRequest } from "node-mocks-http";

import { GET } from "@/src/api/users/[id]/route";

test("Get use by id endpoint works as expected with mocking", async () => {
    const request = createRequest({ method: "GET", url: "/api/users/1" });
    const response = await GET({ ...request } as any, { params: { id: '1' } });

    expect(await response.json()).toMatchObject({
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  })
    expect(response.status).toBe(200);
});