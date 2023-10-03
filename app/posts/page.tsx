/** Components */
import { PostList } from '@/entities/post/ui';

/** Services */
import { getPosts } from '@/entities/post/services';

export const revalidate = 5; // закешировано на 5 сек ISR

type SearchParams = {
    q?: string;
    tag?: string;
};

async function getPostsData(params: SearchParams) {
    const response = await getPosts(params);

    return response;
}

export default async function PostListPage({ searchParams }: { searchParams: SearchParams }) {
    const posts = await getPostsData(searchParams);

    return <PostList posts={posts} />;
}
