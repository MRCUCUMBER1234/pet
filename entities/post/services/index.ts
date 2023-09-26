import { APP_DOMAIN } from '@/shared/consts';
import { PostType } from '@/entities/post/model';
import { buildSearchRequest } from '@/shared/lib/api';

// const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_BASE_URL = `${APP_DOMAIN}/api`;
const API_URLS = {
    POSTS: '/posts',
};

export async function getAllPosts(): Promise<PostType[]> {
    const response = await fetch(API_BASE_URL + API_URLS.POSTS);

    if (!response.ok) throw new Error('Unable to fetch posts :(');

    return response.json();
}

export async function getPosts(params: { [name: string]: string }) {
    const response = await fetch(`${API_BASE_URL}${API_URLS.POSTS}${buildSearchRequest(params)}`);

    if (!response.ok) throw new Error('Unable to fetch posts :(');

    return response.json();
}

export async function addPost(body: PostType) {
    const response = await fetch(API_BASE_URL + API_URLS.POSTS, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (!response.ok) throw new Error('Unable to add post :(');

    return response.json();
}
