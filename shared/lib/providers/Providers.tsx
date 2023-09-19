'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type ProvidersProps = {
    children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => <SessionProvider>{children}</SessionProvider>;

export default Providers;
