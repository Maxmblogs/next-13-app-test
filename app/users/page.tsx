import React from 'react';
import { prisma } from '../../lib/prisma';
import UserCard from '../../components/UserCard/UserCard';
export default async function() {
    const users = await prisma.user.findMany()
    console.log(users)

    return (
        <div>
            {users.map((user) => {
                return <UserCard key={user.id} {...user}/>
            })}
        </div>
    )
}