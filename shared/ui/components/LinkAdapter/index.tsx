import Link from 'next/link';
import styles from '../../../../app/styles/LinkAdapter.module.scss';

const LinkAdapter = ({ link, children }) => (
    <Link href={link} className={styles.link}>
        {children}
    </Link>
);

export default LinkAdapter;
