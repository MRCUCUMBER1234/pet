export type Post = {
    id?: string;
    userId?: string /** writerId */;
    title: string;
    body: string;
    tags: string[];
};
