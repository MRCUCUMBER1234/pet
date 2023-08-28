/* eslint-disable */
import { useRouter } from 'next/router';

import Post from '../../entities/post';
import { PostType } from '../../entities/post/model';
import WriterType from '../../entities/writer/model';

type PostPageProps = {
    post: PostType;
    writer: WriterType;
};

export default function PostPage({ post, writer }: PostPageProps) {
    const {
        query: { id },
    } = useRouter();

    return <Post postId={id} post={post} writer={writer} />;
}

type Params = {
    params: {
        id: string | string[] | undefined;
    };
};

type Data = {
    post: PostType;
    writer: WriterType;
};

export const getServerSideProps: ({ params: { id } }: Params) => Promise<{ props: Data }> = async ({
    params: { id },
}: Params) => {
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await postRes.json();
    const writerRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const writer = await writerRes.json();
    return { props: { post, writer } };
};
