export interface IPost {
    id?: number;
    userId?: number /** writerId */;
    title: string;
    body: string;
}
