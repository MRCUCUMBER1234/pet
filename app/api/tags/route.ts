import { NextResponse } from 'next/server';

import { tags } from './tags';

export async function GET() {
    return NextResponse.json(tags);
}
