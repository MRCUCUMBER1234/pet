import { useRouter } from 'next/router';

import MainContainer from '../../layouts/MainLayout';

export default function Post({ post: { title, body }, writer: { name } }) {
    const router = useRouter();

    return (
        <MainContainer keywords="posts" title={title}>
            {`${router.query.id} - ${title}`}
            <p>{body}</p>
            <p>{name}</p>
        </MainContainer>
    );
}

export async function getServerSideProps({ params: { id } }) {
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await postRes.json();
    const writerRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    const writer = await writerRes.json();
    return { props: { post, writer } };
}
