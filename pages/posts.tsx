import MainContainer from '../layouts/MainLayout';
import Index from '../components/LinkAdapter';

const Posts = ({ posts }) => (
    <MainContainer keywords="posts" title="Main">
        {posts.map(({ id, title }) => (
            <li key={id}>
                <Index link={`/posts/${id}`} text={title} />
            </li>
        ))}
    </MainContainer>
);

Posts.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return { posts };
};

export default Posts;
