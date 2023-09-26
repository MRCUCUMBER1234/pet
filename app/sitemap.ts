export default async function sitemap() {
    const staticRoutes = ['', '/posts', '/posts/createPost', '/profile'];

    return [...staticRoutes];
}
