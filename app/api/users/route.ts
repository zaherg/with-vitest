import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => NextResponse.json({message: 'hello'});
