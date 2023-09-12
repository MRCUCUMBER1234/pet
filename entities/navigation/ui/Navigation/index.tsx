'use client';

import Image from 'next/image';
import { useEffect, useState, memo } from 'react';
import { usePathname } from 'next/navigation';

import LinkAdapter from '../../../../shared/ui/components/LinkAdapter';
import styles from '../../../../app/styles/Navigation.module.scss';
import Dino from '../../../../app/public/DinoSprites_vita.png';
import useScroll from '../../../../shared/lib/window/useScroll';

import { NavigationConfig } from '../../config';

type NavigationProps = {
    pathname: string | null;
};

type NavigationListProps = NavigationProps;

const NavigationList = ({ pathname }: NavigationListProps) => (
    <>
        {Object.values(NavigationConfig).map(({ title: navigationTitle, to }) => (
            <LinkAdapter key={navigationTitle} link={to} isActive={to === pathname}>
                {navigationTitle}
            </LinkAdapter>
        ))}
    </>
);

const MemoizedNavigationList = memo(NavigationList);

const Navigation = () => {
    const pathname = usePathname();

    const [isShowNavigation, setIsShowNavigation] = useState(true);
    const { y, lastY } = useScroll();

    /** update isShowNavigation on scroll */
    useEffect(() => {
        let isShow = true;

        if (y > 150 && y - lastY > 0) {
            isShow = false;
        }

        setIsShowNavigation(isShow);
    }, [y, lastY]);

    return (
        <header className={isShowNavigation ? '' : styles.headerHidden}>
            <div className={styles.navigation}>
                <Image src={Dino} alt="Dino" width={20} height={20} placeholder="blur" />
                <MemoizedNavigationList pathname={pathname} />
            </div>
        </header>
    );
};

export default Navigation;
