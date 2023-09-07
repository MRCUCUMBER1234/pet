import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';

/** Components */
import ModulePost from '../../entities/modulePost/ui/ModulePost';
import TagList from '../../entities/tagList';
import Topic from '../../shared/ui/components/Topic';
import LinkAdapter from '../../shared/ui/components/LinkAdapter';

/** Layouts */
import Box from '../../shared/ui/layouts/Box';
import Button from '../../shared/ui/layouts/Button';

/** Model */
import { PostType } from '../../entities/post/model';

/** Assets */
// import { ReactComponent as PlusIcon } from '../../../../app/public/icons8-plus.svg';

async function getPostsData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 120, // закешировано на 120 сек
        },
    });

    return response.json();
}

export default async function PostListPage() {
    const posts: PostType[] = await getPostsData();
    const chips = ['blue', 'red', 'yellow'];

    return (
        <Box flexWrap="nowrap">
            <Box position="sticky" top={64} px={64}>
                <Topic text="Posts" />
                <LinkAdapter link="/posts/createPost">
                    <Button isIcon>{/* <PlusIcon /> */}+</Button> {/* TODO: change to svg */}
                </LinkAdapter>
            </Box>
            <Box width="100%" px={64}>
                {posts.map(({ id, title, body }, index: number) => (
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
    );
}
