import { Metadata } from 'next';
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';

import { Post } from '../../../entities/post/ui';
import { PostType } from '../../../entities/post/model';
import WriterType from '../../../entities/writer/model';

type PostData = {
    post: PostType;
    writer: WriterType;
};

async function getPostData(id: string): Promise<PostData> {
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 120,
        },
    });
    const post = await postRes.json();
    const writerRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`, {
        next: {
            revalidate: 120,
        },
    });
    const writer = await writerRes.json();
    return { post, writer };
}

type PostPageProps = {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params: { id } }: PostPageProps): Promise<Metadata> {
    const {
        post: { title },
    } = await getPostData(id);

    return { title };
}

export default async function PostPage({ params: { id } }: PostPageProps) {
    const { post, writer } = await getPostData(id);

    return <Post postId={id} post={post} writer={writer} />;
}
