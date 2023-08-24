/* eslint-disable */
import { useRouter } from 'next/router';

import Post from '../../entities/Post';
import PostType from '../../entities/Post/model';
import IWriter from '../../entities/Writer/model';

type PostPageProps = {
    // post: PostType;
    // writer: IWriter;
    post: any;
    writer: any;
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
    writer: IWriter;
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
