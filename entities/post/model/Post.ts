import { create } from 'zustand';

import { Post as PostType } from './types/Post';

type State = {
    posts: PostType[];
};

// type Actions = {
//     setPosts: (posts: PostType[]) => void;
//     addPost: (post: PostType) => void;
//     deletePost: (id: string) => void;
// };

const usePostStore = create<State>(() => ({
    posts: [],
}));

export const useGetPosts = () => usePostStore((state) => state.posts);

export const useSetPosts = (posts: PostType[]) => usePostStore.setState(() => ({ posts }));

export const useAddPost = (post: PostType) => usePostStore.setState((state) => ({ posts: [...state.posts, post] }));

export const useDeletePost = (id: string) =>
    usePostStore.setState((state) => ({ posts: state.posts.filter((post) => post.id !== id) }));
