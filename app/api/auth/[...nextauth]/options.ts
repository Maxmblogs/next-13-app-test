import type { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';
import  CredentialsProvider  from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'Username: ',
                    type: 'text',
                    placeholder: 'Your-cool-username!'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Your-awesome-password: '
                }
            },
            async authorize(credentials) {
                const user = {id: '32', name: 'Max', password: 'nextauth'}

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                }else {
                    return null
                }

            }
        })
    ],
    
}

