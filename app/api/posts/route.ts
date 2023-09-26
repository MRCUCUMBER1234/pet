import { NextResponse } from 'next/server';

import { posts } from './posts';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);

    const query = searchParams.get('q');
    const tag = searchParams.get('tag');

    let currentPosts = posts;

    if (query) {
        currentPosts = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.body.toLowerCase().includes(query.toLowerCase())
        );
    }

    if (tag) {
        currentPosts = posts.filter((post) => post.tags.includes(tag));
    }

    return NextResponse.json(currentPosts);
}

export async function POST(req: Request) {
    const body = await req.json();

    return NextResponse.json({ body });
}
