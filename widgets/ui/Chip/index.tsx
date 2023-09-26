'use client';

import { ReactNode } from 'react';

import styles from '@/shared/styles/Chip.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import cn from 'classnames';
import { is } from 'immutable';

type ChipProps = {
    children: ReactNode;
    tag?: string;
};

const Chip = ({ children, tag = '' }: ChipProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const isActive = searchParams.toString().includes(tag);

    const handleClick = () => {
        if (isActive) {
            router.push(`${pathname}${searchParams.toString().replace(new RegExp(`tag=${tag}`), '?')}`);
        } else {
            router.push(`${pathname}?tag=${tag}`);
        }
    };

    return (
        <button type="button" onClick={handleClick} className={cn(styles.chip, { [styles[tag]]: isActive })}>
            {children}
        </button>
    );
};

export default Chip;
