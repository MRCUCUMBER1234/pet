import Image from 'next/image';
import { useEffect, useState } from 'react';

import LinkAdapter from '../../../../shared/ui/components/LinkAdapter';
import styles from '../../../../app/styles/Navigation.module.scss';
import Dino from '../../../../app/public/DinoSprites_vita.png';
import useScroll from '../../../../shared/lib/window/useScroll';

const Navigation = () => {
    const [isShowNavigation, setIsShowNavigation] = useState(true);
    const { y, lastY } = useScroll();

    // update isShowNavigation on scroll
    useEffect(() => {
        let isShow = true;

        if (y > 150 && y - lastY > 0) {
            isShow = false;
        }

        setIsShowNavigation(isShow);
    }, [y, lastY]);

    return (
        <header className={`${styles.navigation} ${isShowNavigation ? '' : styles.navBarHidden}`}>
            <Image src={Dino} alt="Dino" width={20} height={20} placeholder="blur" />
            <LinkAdapter link="/">Main</LinkAdapter>
            <LinkAdapter link="/posts">Posts</LinkAdapter>
        </header>
    );
};

export default Navigation;
