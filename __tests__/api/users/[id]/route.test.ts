import { expect, test } from "vitest";
import { GET } from "@/src/api/users/[id]/route";
import { NextRequest } from "next/server";

test("Get use by id endpoint works as expected with mocking", async () => {
  const req = new NextRequest('http://doesntmatter', { method: 'GET' });
  const response = await GET(req, {params: { id: '1' }});


  expect(await response.json()).toMatchObject({
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  })
  expect(response.status).toBe(200);
});