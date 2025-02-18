import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const nextAuthOption: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ profile }) {
            console.log("====PROFILE====");
            
            console.log(profile);
            
            if(!profile?.email) {
                console.log("USER NOT CONSENT TO GIVING THE EMAIL INFORMATION");
                throw new Error("User should consent to giving email address!");
            }

            await prisma.$connect();

            await prisma.student.upsert({
                where: {
                    email: profile.email
                },
                create: {
                    email: profile.email,
                    fullname: profile.name!,
                },
                update: {
                    fullname: profile.name!
                }
            })

            await prisma.$disconnect();
            
            return true;
        },
    },
};

const handler = NextAuth(nextAuthOption);
export { handler as GET, handler as POST, nextAuthOption as authOptions };