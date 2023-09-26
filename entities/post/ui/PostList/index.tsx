import { APP_DOMAIN } from '@/shared/consts';

/** Layouts */
import Box from '@/shared/ui/layouts/Box';

/** Components */
import { PostSearch } from '@/feature/post/postSearch/ui';

/** Types */
import { PostType } from '@/entities/post/model';

/** Inner components */
import ModulePost from '../../../modulePost/ui/ModulePost';

export default function PostList({ posts }: { posts: PostType[] }) {
    // eslint-disable-next-line no-console
    console.log('APP_DOMAIN', APP_DOMAIN);

    return (
        <Box width="100%" py={24} styles={{ maxWidth: '900px' }}>
            <Box top={120} width="100%" position="sticky">
                <PostSearch />
            </Box>
            {posts.length ? (
                posts.map(({ id, title, body, tags = [] }, index: number) => (
                    <ModulePost
                        key={id}
                        link={`/posts/${id}`}
                        title={title}
                        body={body}
                        tags={tags}
                        isLast={index === posts.length - 1}
                    />
                ))
            ) : (
                <p>No posts yet... 📭</p>
            )}
        </Box>
    );
}
