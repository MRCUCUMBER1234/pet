'use client';

import Image from 'next/image';
import { useEffect, useState, memo } from 'react';

import LinkAdapter from '../../../../shared/ui/components/LinkAdapter';
import styles from '../../../../app/styles/Navigation.module.scss';
import Dino from '../../../../app/public/DinoSprites_vita.png';
import useScroll from '../../../../shared/lib/window/useScroll';

import { NavigationConfig } from '../../config';

type NavigationProps = {
    title: string;
};

type NavigationListProps = NavigationProps;

const NavigationList = ({ title }: NavigationListProps) => (
    <>
        {Object.values(NavigationConfig).map(({ title: navigationTitle, to }) => (
            <LinkAdapter key={navigationTitle} link={to} isActive={navigationTitle === title}>
                {navigationTitle}
            </LinkAdapter>
        ))}
    </>
);

const MemoizedNavigationList = memo(NavigationList);

const Navigation = () => {
    const title = '';
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
        <header className={`${styles.navigation} ${isShowNavigation ? '' : styles.navBarHidden}`}>
            <Image src={Dino} alt="Dino" width={20} height={20} placeholder="blur" />
            <MemoizedNavigationList title={title} />
        </header>
    );
};

export default Navigation;
