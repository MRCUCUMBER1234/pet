/** Components */
import ModulePost from '../entities/ModulePost/ui/ModulePost';
import TagList from '../entities/TagList';

/** Layouts */
import MainContainer from '../shared/ui/layouts/MainLayout';
import Box from '../shared/ui/layouts/Box';
import Topic from '../shared/ui/components/Topic';

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
