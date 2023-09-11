// import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';

/** Components */
import { shallow } from 'zustand/shallow';
import PostList from '../../entities/post/ui/PostList';
import TagList from '../../entities/tagList';
import Topic from '../../shared/ui/components/Topic';
import LinkAdapter from '../../shared/ui/components/LinkAdapter';

/** Layouts */
import Box from '../../shared/ui/layouts/Box';
import Button from '../../shared/ui/layouts/Button';

/** Model */
import { PostType } from '../../entities/post/model';
import PostSearch from '../../feature/post/postSearch/ui/PostSearch';
import { usePosts } from '../../entities/post/model/Post';

import { getAllPosts } from '../../entities/post/services';

// async function getPostsData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         next: {
//             revalidate: 120,v // закешировано на 120 сек
//         },
//     });
//
//     return response.json();
// }

export default async function PostListPage() {
    // const posts: PostType[] = await getPostsData();
    const chips = ['blue', 'red', 'yellow'];

    // console.log('posts', posts);

    // useEffect(() => {
    //     getAllPosts();
    // }, [getAllPosts]);

    return (
        <Box flexWrap="nowrap">
            <Box position="sticky" top={64} px={64}>
                <Topic text="Posts" />
                <LinkAdapter link="/posts/createPost">
                    <Button isIcon>{/* <PlusIcon /> */}+</Button> {/* TODO: change to svg */}
                </LinkAdapter>
            </Box>
            <PostList />
            <TagList chips={chips} />
        </Box>
    );
}
