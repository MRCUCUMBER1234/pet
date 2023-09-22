import { NavigationConfig } from '@/entities/navigation/config';

// eslint-disable-next-line no-restricted-exports
export { default } from 'next-auth/middleware';

export const config = { matcher: [NavigationConfig.PROFILE.to] };
