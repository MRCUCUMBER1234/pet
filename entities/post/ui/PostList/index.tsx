'use client';

import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { APP_DOMAIN } from '@/shared/consts';

/** Layouts */
import Box from '@/shared/ui/layouts/Box';

/** Components */
import { PostSearch } from '@/feature/post/postSearch/ui';

/** Types */
import { usePosts } from '../../model/post';

/** Inner components */
import ModulePost from '../../../modulePost/ui/ModulePost';
import PostSkeletonList from './PostSkeletonList';

function PostList() {
    const [posts, loading, getAllPosts] = usePosts((state) => [state.posts, state.loading, state.getAllPosts], shallow);

    useEffect(() => {
        getAllPosts();
    }, [getAllPosts]);

    // eslint-disable-next-line no-console
    console.log('APP_DOMAIN', APP_DOMAIN);
    console.log('loading', loading);

    return (
        <Box width="100%" py={24} styles={{ maxWidth: '900px' }}>
            <Box top={120} width="100%" position="sticky">
                <PostSearch />
            </Box>
            {loading && <PostSkeletonList />}
            {!loading &&
                (posts.length ? (
                    posts.map(({ id, title, body }, index: number) => (
                        <ModulePost
                            key={id}
                            link={`/posts/${id}`}
                            title={title}
                            body={body}
                            isLast={index === posts.length - 1}
                        />
                    ))
                ) : (
                    <p>No posts yet... 📭</p>
                ))}
        </Box>
    );
}

export default PostList;
