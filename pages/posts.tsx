/** Components */
import ModulePost from '../entities/ModulePost/ui/ModulePost';
import TagList from '../entities/TagList';
import Topic from '../shared/ui/components/Topic';
import LinkAdapter from '../shared/ui/components/LinkAdapter';

/** Layouts */
import MainContainer from '../shared/ui/layouts/MainLayout';
import Box from '../shared/ui/layouts/Box';
import Button from '../shared/ui/layouts/Button';

/** Model */
import IPost from '../entities/Post/model';

/** Assets */
// import PlusIcon from '../../../../app/public/icons8-plus.svg';
// import { ReactComponent as PlusIcon } from '../../../../app/public/icons8-plus.svg';

interface PostListPageProps {
    posts: IPost[];
}

const PostListPage = ({ posts }: PostListPageProps) => {
    const chips = ['blue', 'red', 'yellow'];

    return (
        <MainContainer keywords={['posts']} title="Posts">
            <Box flexWrap="nowrap">
                <Box position="sticky" top={64} px={64}>
                    <Topic text="Posts" />
                    <LinkAdapter link="/createPost">
                        <Button isIcon>{/* <PlusIcon /> */}+</Button> {/* TODO: change to svg */}
                    </LinkAdapter>
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
