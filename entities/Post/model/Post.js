class Post {
    constructor(post) {
        const { id = '', userId = '', title = '', body = '' } = post || {};
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}

export default Post;
