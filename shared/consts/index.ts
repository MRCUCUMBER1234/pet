// eslint-disable-next-line import/prefer-default-export
export const APP_DOMAIN =
    // eslint-disable-next-line no-nested-ternary
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
        ? 'NEXT_PUBLIC_VERCEL_ENV = production '
        : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
        ? // ? "https://preview.dub.co"
          'NEXT_PUBLIC_VERCEL_ENV = preview'
        : 'NEXT_PUBLIC_VERCEL_ENV = local';
