import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import { getAllPosts, getPosts, addPost } from '../services';

import { Post as PostType } from './types/post';

type UsePosts = {
    posts: any[];
    loading: boolean;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (term: string) => Promise<void>;
    addPost: (post: PostType) => Promise<void>;
};

export const usePosts = createWithEqualityFn<UsePosts>()(
    (set) => ({
        posts: [],
        loading: true,
        getAllPosts: async () => {
            set({ loading: true });
            try {
                const posts = await getAllPosts();
                set({ posts, loading: false });
            } catch (err) {
                set({ loading: false });
            }
        },
        getPostsBySearch: async (term: string) => {
            set({ loading: true });
            try {
                const posts = await getPosts({ q: term });
                set({ loading: false, posts });
            } catch (err) {
                set({ loading: false });
            }
        },
        addPost: async (post: PostType) => {
            set({ loading: true });
            try {
                const createdPost = await addPost(post);
                set((state) => ({ loading: false, posts: [createdPost, ...state.posts] }));
            } catch (err) {
                set({ loading: false });
            }
        },
    }),
    shallow
);
