import { ReactNode } from 'react';

import styles from '../../../../app/styles/Typography.module.scss';

type TypographyProps = {
    children: ReactNode;
};

const Typography = ({ children }: TypographyProps) => <p className={styles.body1}>{children}</p>;

export default Typography;
