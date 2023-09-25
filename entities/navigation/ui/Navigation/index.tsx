'use client';

import Image from 'next/image';
import { useEffect, useState, memo } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { useSession, signOut } from 'next-auth/react';

import LinkAdapter from '@/shared/ui/components/LinkAdapter';
import styles from '@/shared/styles/Navigation.module.scss';
import Dino from '@/shared/public/DinoSprites_vita.png';
import useScroll from '@/shared/lib/window/useScroll';
import Box from '@/shared/ui/layouts/Box';
import Button from '@/shared/ui/layouts/Button';
import { NavigationConfig } from '../../config';

type NavigationProps = {
    pathname: string | null;
    data?: {
        expires?: string | null;
        user?: {
            email?: string | null;
            image?: string | null;
            name?: string | null;
        } | null;
    } | null;
};

type NavigationListProps = NavigationProps;

const NavigationList = ({ pathname, data }: NavigationListProps) => (
    <div className={styles.navigation}>
        <div>
            <Image src={Dino} alt="Dino" width={20} height={20} placeholder="blur" />
            {Object.values(NavigationConfig)
                .filter(({ isShow = false }) => isShow)
                .map(({ title: navigationTitle, to }) => (
                    <LinkAdapter key={navigationTitle} link={to} isActive={to === pathname}>
                        {navigationTitle}
                    </LinkAdapter>
                ))}
        </div>
        <div>
            {data && (
                <LinkAdapter link={NavigationConfig.PROFILE.to} isActive={NavigationConfig.PROFILE.to === pathname}>
                    <Box alignItems="center" gap={4}>
                        {data?.user?.image && <Image src={data.user.image || ''} alt="Avatar" width={20} height={20} />}
                        {data?.user?.name && data.user.name}
                    </Box>
                </LinkAdapter>
            )}
            {data ? (
                <Button
                    onClick={() =>
                        signOut({
                            callbackUrl: '/',
                        })
                    }
                    isPure
                >
                    {NavigationConfig.SING_OUT.title}
                </Button>
            ) : (
                <LinkAdapter link={NavigationConfig.SING_IN.to} isActive={NavigationConfig.SING_IN.to === pathname}>
                    {NavigationConfig.SING_IN.title}
                </LinkAdapter>
            )}
        </div>
    </div>
);

const MemoizedNavigationList = memo(NavigationList);

const Navigation = () => {
    const pathname = usePathname();
    const { data } = useSession();

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
        <header className={cn(styles.header, { [styles.headerHidden]: !isShowNavigation })}>
            <MemoizedNavigationList pathname={pathname} data={data} />
        </header>
    );
};

export default Navigation;
