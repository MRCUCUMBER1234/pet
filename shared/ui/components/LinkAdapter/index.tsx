import Link from 'next/link';
import { ReactNode } from 'react';

import styles from '../../../../app/styles/LinkAdapter.module.scss';

type LinkAdapterProps = {
    link: string;
    children: ReactNode;
};

const LinkAdapter = ({ link, children }: LinkAdapterProps) => (
    <Link href={link} className={styles.link}>
        {children}
    </Link>
);

export default LinkAdapter;
