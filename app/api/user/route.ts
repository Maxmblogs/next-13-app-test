import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT( req : Request) {
    const session = await getServerSession(options)
    const currentUserEmail = session?.user?.email!

    const data = await req.json()
    
    data.age = Number(data.age)

    const user = await prisma.user.update({
        where: {
            email: currentUserEmail
        },
        data
    })
    return NextResponse.json(user)
}