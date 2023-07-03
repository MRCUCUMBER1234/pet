/** Components */
import ModulePost from '../entities/ModulePost/ui/ModulePost';
import TagList from '../entities/TagList';

/** Layouts */
import MainContainer from '../shared/ui/layouts/MainLayout';
import Box from '../shared/ui/layouts/Box';
import Topic from '../shared/ui/components/Topic';
import LinkAdapter from '../shared/ui/components/LinkAdapter';
import IPost from '../entities/Post/model';

type PostListPageProps = {
    posts: IPost[];
};

const PostListPage = ({ posts }: PostListPageProps) => {
    const chips = ['blue', 'red', 'yellow'];

    return (
        <MainContainer keywords={['posts']} title="Main">
            <Box flexWrap="nowrap">
                <Box position="sticky" top={64} px={64}>
                    <Topic text="Posts" />
                    <LinkAdapter link="/createPost">Create Post</LinkAdapter>
                </Box>
                <Box width="100%" px={64}>
                    {posts.map(({ id, title, body }, index) => (
                        <ModulePost
                            key={id}
                            link={`/posts/${id}`}
                            title={title}
                            body={body}
                            isLast={index === posts.length - 1}
                        />
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
