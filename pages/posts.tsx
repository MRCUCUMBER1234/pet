import MainContainer from '../layouts/MainLayout';
import Post from '../components/Post';
import Box from '../layouts/Box';
import Drawer from '../layouts/Drawer';
import Chip from '../layouts/Chip';
import Topic from '../components/Topic';

const Posts = ({ posts }) => {
    const chips = ['blue', 'red', 'yellow'];

    return (
        <MainContainer keywords="posts" title="Main">
            <Box flexWrap="no-wrap">
                <Box gap={64} width="100%" my={64}>
                    {posts.map(({ id, title, body }) => (
                        <Post key={id} link={`/posts/${id}`} title={title} body={body} />
                    ))}
                </Box>
                <Drawer>
                    <Topic text="Tags" />
                    <Box gap={12} width="100%">
                        {chips.map((chip) => (
                            <Chip>{chip}</Chip>
                        ))}
                    </Box>
                </Drawer>
            </Box>
        </MainContainer>
    );
};

Posts.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return { posts };
};

export default Posts;
