import { create } from 'zustand';

import { getAllPosts, getPostsBySearch } from '../services';

// import { Post as PostType } from './types/Post';

type UsePosts = {
    posts: any[];
    loading: boolean;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (term: string) => Promise<void>;
    // addPost: (post: PostType) => void;
};

// eslint-disable-next-line import/prefer-default-export
export const usePosts = create<UsePosts>()((set) => ({
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
}));
