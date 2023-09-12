// eslint-disable-next-line import/prefer-default-export
export async function getAllPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) throw new Error('Unable to fetch posts :(');

    return response.json();
}

export async function getPostsBySearch(term) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${term}`);

    if (!response.ok) throw new Error('Unable to fetch posts :(');

    return response.json();
}

export async function addPost(body) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (!response.ok) throw new Error('Unable to add post :(');

    return response.json();
}
