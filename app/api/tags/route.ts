import { NextResponse } from 'next/server';

import { tags } from './tags';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
    return NextResponse.json(tags);
}
