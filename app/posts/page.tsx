// import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';

/** Components */
import { PostList } from '@/entities/post/ui';
import TagList from '@/entities/tagList';
import Topic from '@/shared/ui/components/Topic';
import LinkAdapter from '@/shared/ui/components/LinkAdapter';

/** Layouts */
import Box from '@/shared/ui/layouts/Box';
import Button from '@/shared/ui/layouts/Button';

/** Styles */
import styles from '../styles/PostsPage.module.scss';

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
    const chips = ['blue', 'red', 'yellow'];

    return (
        <div className={styles.container}>
            <PostList />
            <Box position="sticky" top={64} flexDirection="column" py={24} styles={{ maxWidth: '250px' }}>
                <Topic text="Posts" />
                <LinkAdapter link="/posts/createPost">
                    <Button>Add post</Button>
                </LinkAdapter>
                <TagList chips={chips} />
            </Box>
        </div>
    );
}
