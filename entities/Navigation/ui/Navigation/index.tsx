import Image from 'next/image';

import LinkAdapter from '../../../../shared/ui/components/LinkAdapter';
import styles from '../../../../app/styles/Navigation.module.scss';
import Dino from '../../../../app/public/DinoSprites_vita.png';

const Navigation = () => (
    <div className={styles.navigation}>
        <Image src={Dino} alt="Dino" width={20} height={20} placeholder="blur" />
        <LinkAdapter link="/">Main</LinkAdapter>
        <LinkAdapter link="/posts">Posts</LinkAdapter>
    </div>
);

export default Navigation;
