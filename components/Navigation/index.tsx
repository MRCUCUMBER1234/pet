import Image from 'next/image';

import LinkAdapter from '../LinkAdapter';
import styles from '../../styles/Navigation.module.scss';
import Dino from '../../public/DinoSprites_vita.png';

const Navigation = () => (
    <div className={styles.navigation}>
        <Image src={Dino} alt="Dino" width={20} height={20} placeholder="blur" />
        <LinkAdapter link="/" text="Main" />
        <LinkAdapter link="/posts" text="Posts" />
    </div>
);

export default Navigation;
