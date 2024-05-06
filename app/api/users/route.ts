import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {

    const posts = await fetch('https://rest-endpoint.example/path/to/posts');

    return NextResponse.json(await posts.json());
}
