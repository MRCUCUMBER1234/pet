import { ReactNode } from 'react';

import { Metadata } from 'next';

type LayoutProps = {
    children: ReactNode;
};

export const metadata: Metadata = {
    title: 'Posts | Pet app',
    description: 'posts',
};

export default function PostsLayout({ children }: LayoutProps) {
    return <div>{children}</div>;
}
