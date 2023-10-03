import { ReactNode } from 'react';

import { Metadata } from 'next';
import styles from '@/shared/styles/PostsPage.module.scss';
import Box from '@/shared/ui/layouts/Box';
import Topic from '@/shared/ui/components/Topic';
import LinkAdapter from '@/shared/ui/components/LinkAdapter';
import Button from '@/shared/ui/layouts/Button';
// import { Tags } from '@/entities/tags';

type LayoutProps = {
    children: ReactNode;
};

export const metadata: Metadata = {
    title: 'Posts | Pet app',
    description: 'posts',
};

export default async function PostsLayout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            {children}
            <Box position="sticky" top={64} flexDirection="column" py={24} styles={{ maxWidth: '250px' }}>
                <Topic text="Posts" />
                <LinkAdapter link="/posts/createPost">
                    <Button>Add post</Button>
                </LinkAdapter>
                {/* <Tags /> */}
            </Box>
        </div>
    );
}
