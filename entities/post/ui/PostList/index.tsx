'use client';

import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { APP_DOMAIN } from '@/shared/consts';

/** Components */
import ModulePost from '../../../modulePost/ui/ModulePost';

/** Types */
import { usePosts } from '../../model/post';

/** Layouts */
import Box from '../../../../shared/ui/layouts/Box';

/** Inner components */
import PostSkeletonList from './PostSkeletonList';
import { PostSearch } from '../../../../feature/post/postSearch/ui';

function PostList() {
    const [posts, loading, getAllPosts] = usePosts((state) => [state.posts, state.loading, state.getAllPosts], shallow);

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);

    console.log('APP_DOMAIN', APP_DOMAIN);

    return (
        <Box width="100%" py={24} styles={{ maxWidth: '900px' }}>
            <Box top={120} width="100%" position="sticky">
                <PostSearch />
            </Box>
            {loading ? (
                <PostSkeletonList />
            ) : (
                <>
                    {posts.map(({ id, title, body }, index: number) => (
                        <ModulePost
                            key={id}
                            link={`/posts/${id}`}
                            title={title}
                            body={body}
                            isLast={index === posts.length - 1}
                        />
                    ))}
                </>
            )}
        </Box>
    );
}

export default PostList;
