import styles from '../../styles/Drawer.module.scss';

const Drawer = ({ children /* , orientation = 'right' */ }) => <div className={styles.drawer}>{children}</div>;

export default Drawer;
