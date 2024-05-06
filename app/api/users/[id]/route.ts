import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, context: { params: { id: string } }) => {

    const { id } = context.params;

    const response = await fetch('https://rest-endpoint.example/path/to/posts');

    const post = (await response.json())
    ?.filter((post: { id: string; }) => Number.parseInt(post.id) === Number.parseInt(id))
    ?.[0];
    return NextResponse.json(post);
}
