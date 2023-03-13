/** Components */
import ModulePost from '../components/ModulePost';
import TagList from '../components/TagList';

/** Layouts */
import MainContainer from '../layouts/MainLayout';
import Box from '../layouts/Box';
import Topic from '../components/Topic';

const PostListPage = ({ posts }) => {
    const chips = ['blue', 'red', 'yellow'];

    return (
        <MainContainer keywords="posts" title="Main">
            <Box flexWrap="no-wrap">
                <Box gap={64} width="100%" px={64} my={64}>
                    <Topic text="Posts" />
                    {posts.map(({ id, title, body }) => (
                        <ModulePost key={id} link={`/posts/${id}`} title={title} body={body} />
                    ))}
                </Box>
                <TagList chips={chips} />
            </Box>
        </MainContainer>
    );
};

PostListPage.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return { posts };
};

export default PostListPage;
