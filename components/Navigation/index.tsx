import LinkAdapter from '../LinkAdapter';
import styles from '../../styles/Navigation.module.scss';

const Navigation = () => (
    <div className={styles.navigation}>
        <LinkAdapter link="/" text="Main" />
        <LinkAdapter link="/posts" text="Posts" />
    </div>
);

export default Navigation;
