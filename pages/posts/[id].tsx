import { useRouter } from 'next/router';

import MainContainer from '../../layouts/MainLayout';

export default function Post({ post: { title, body } }) {
    const router = useRouter();

    return (
        <MainContainer keywords="posts" title={title}>
            {`${router.query.id} - ${title}`}
            <p>{body}</p>
        </MainContainer>
    );
}

export async function getServerSideProps({ params: { id } }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return { props: { post } };
}
