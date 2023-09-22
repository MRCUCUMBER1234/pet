import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function Profile() {
    const session = await getServerSession();

    return (
        <div>
            <h1>{session?.user?.name}'s profile</h1>
            {session?.user?.image && <Image src={session.user.image || ''} alt="Avatar" width={120} height={120} />}
        </div>
    );
}
