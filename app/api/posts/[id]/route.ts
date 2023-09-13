import { NextResponse } from 'next/server';
// import { headers, cookies } from 'next/headers';
// import { redirect } from 'next/navigation';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    // logic patch post

    return NextResponse.json({ id });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    // const headerList = headers();
    // const type = headerList.get('Content-Type');
    //
    // const cookiesList = cookies();
    // const coo1 = cookiesList.get('Cookie_1')?.value;

    // logic delete post

    // redirect('/posts');

    return NextResponse.json({ id });
}
