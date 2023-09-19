import NextAuth from 'next-auth';
import { authConfig } from '@/shared/consts/auth';

const handler = NextAuth(authConfig);

export { handler as POST, handler as GET };
