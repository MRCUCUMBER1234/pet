import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import { getAllPosts, getPostsBySearch, addPost } from '../services';

import { Post as PostType } from './types/post';

type UsePosts = {
    posts: any[];
    loading: boolean;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (term: string) => Promise<void>;
    addPost: (post: PostType) => Promise<void>;
};

// eslint-disable-next-line import/prefer-default-export
export const usePosts = createWithEqualityFn<UsePosts>()(
    (set) => ({
        posts: [],
        loading: false,
        getAllPosts: async () => {
            set({ loading: true });
            const posts = await getAllPosts();
            set({ posts, loading: false });
        },
        getPostsBySearch: async (term: string) => {
            set({ loading: true });
            const posts = await getPostsBySearch(term);
            set({ loading: false, posts });
        },
        addPost: async (post: PostType) => {
            set({ loading: true });
            const createdPost = await addPost(post);
            set((state) => ({ loading: false, posts: [createdPost, ...state.posts] }));
        },
    }),
    shallow
);
