import { ProfileForm } from './ProfileForm';
import { redirect } from "next/navigation"
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
export default async function Dashboard() {
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/sign')
    }

    const currentUserEmail = session?.user?.email!
    const user = await prisma.user.findUnique({
        where: {
            email: currentUserEmail,
        }
    })

    return (
        <div>
            <h1>DashBoard</h1>
            <ProfileForm user={user}/>
        </div>
    )
}