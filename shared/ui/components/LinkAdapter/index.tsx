import Link from 'next/link';
import { ReactNode } from 'react';
import cn from 'classnames';

import styles from '@/app/styles/LinkAdapter.module.scss';

type LinkAdapterProps = {
    link: string;
    children: ReactNode;
    isActive?: boolean;
};

const LinkAdapter = ({ link, children, isActive }: LinkAdapterProps) => (
    <Link href={link} className={cn(styles.link, { [styles.active]: isActive })}>
        {children}
    </Link>
);

export default LinkAdapter;
