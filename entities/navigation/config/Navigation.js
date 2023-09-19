const Navigation = {
    MAIN: {
        title: 'Main',
        to: '/',
        isShow: true,
    },
    POSTS: {
        title: 'Posts',
        to: '/posts',
        isShow: true,
    },
    PROFILE: {
        title: 'Profile',
        to: '/profile',
        isShow: false,
    },
    SING_IN: {
        title: 'Sing in',
        to: '/api/auth/signin',
        isShow: false,
    },
    SING_OUT: {
        title: 'Sing out',
        to: '#',
        isShow: false,
    },
};

export default Navigation;
