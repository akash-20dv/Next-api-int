import { addPost,  getPosts } from "@/data/data"
import { NextResponse } from "next/server"

export async function GET(request,response) {
    try {
        const posts = getPosts();
        return NextResponse.json({message: 'ok', posts},{ status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Error", err },
        {
            status: 500,
        })
    }
}
export async function POST(request, response) {
    const { title, desc } = await request.json();
    try {
        const post = addPost(title, desc);
        return new NextResponse({ message: 'posted', post }, { status: 201 });
    } catch (err) {
        return new NextResponse({ message: "Error", err }, { status: 500 });
    }
}
export async function DELETE(request,response) {
    console.log('request' ,request.method , request.url)
}