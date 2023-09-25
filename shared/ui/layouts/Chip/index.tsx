import { ReactNode } from 'react';

import styles from '@/shared/styles/Chip.module.scss';

type ChipProps = {
    children: ReactNode;
};

const Chip = ({ children }: ChipProps) => <div className={styles.chip}>{children}</div>;

export default Chip;
