import Link from 'next/link';
import styles from '../../../../styles/LinkAdapter.module.scss';

const LinkAdapter = ({ link, children }) => (
    <Link href={link} className={styles.link}>
        {children}
    </Link>
);

export default LinkAdapter;
