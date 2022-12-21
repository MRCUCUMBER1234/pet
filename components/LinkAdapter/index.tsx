import Link from 'next/link';
import styles from '../../styles/LinkAdapter.module.scss';

const LinkAdapter = ({ link, text }) => (
    <Link href={link} className={styles.link}>
        {text}
    </Link>
);

export default LinkAdapter;
