import styles from '@/shared/styles/Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <p>
            Created by{' '}
            <a target="_blank" href="https://github.com/MRCUCUMBER1234">
                mr cucumber
            </a>
        </p>
    </footer>
);

export default Footer;
