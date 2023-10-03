import { APP_DOMAIN } from '@/shared/consts';

// const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_BASE_URL = `${APP_DOMAIN}/api`;
const API_URLS = {
    TAGS: '/tags',
};

export async function getTags(): Promise<string[]> {
    const response = await fetch(API_BASE_URL + API_URLS.TAGS, { cache: 'no-store' });

    if (!response.ok) throw new Error('Unable to fetch tags :(');

    return response.json();
}
