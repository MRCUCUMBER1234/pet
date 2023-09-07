import { create, SetState, GetState } from 'zustand';
// import { devtools, persist } from 'zustand/middleware';

import { Post as PostType } from './types/Post';

// type State = {
//     posts: PostType[];
// };

type PostSlice = {
    posts: PostType[];
    addPost: (post: PostType) => void;
};
// type Actions = {
//     setPosts: (posts: PostType[]) => void;
//     addPost: (post: PostType) => void;
//     deletePost: (id: string) => void;
// };

export type StoreState = PostSlice;

export type StoreSlice<T> = (set: SetState<StoreState>, get: GetState<StoreState>) => T;

export const createPostSlice: StoreSlice<PostSlice> =
    //     StateCreator<
    //     PostSlice,
    //     [['zustand/devtools', never], ['zustand/persist', unknown]],
    //     [],
    //     PostSlice
    // >

    (set) => ({
        posts: [],
        addPost: (post: PostType) => set(({ posts }) => ({ posts: [...posts, post] })),
    });

export const usePostStore = create<StoreState>((set, get) => ({
    ...createPostSlice(set, get),
}));

// export const useGetPosts = () => usePostStore((state) => state.posts);

export const useSetPosts = (posts: PostType[]) => usePostStore.setState(() => ({ posts }));

// export const useAddPost = (post: PostType) => usePostStore.setState((state) => ({ posts: [...state.posts, post] }));

// export const useDeletePost = (id: string) =>
//     usePostStore.setState((state) => ({ posts: state.posts.filter((post) => post.id !== id) }));
