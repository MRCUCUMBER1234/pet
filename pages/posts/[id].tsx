import { useRouter } from 'next/router';

import Post from '../../entities/Post/ui/Post';

export default function PostPage({ post, writer }) {
    const {
        query: { id },
    } = useRouter();

    return <Post postId={id} post={post} writer={writer} />;
}

export async function getServerSideProps({ params: { id } }) {
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await postRes.json();
    const writerRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const writer = await writerRes.json();
    return { props: { post, writer } };
}
