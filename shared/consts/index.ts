// eslint-disable-next-line import/prefer-default-export
export const APP_DOMAIN =
    // process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? 'pet-up1g.vercel.app' : 'http://localhost:3000';
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? '' : 'http://localhost:3000';
