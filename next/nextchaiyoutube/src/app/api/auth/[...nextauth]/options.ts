import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/config/db";
import UserModel from "@/lib/model/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" },
            },
            async authorize(credentials: any): Promise<any> {
                await dbConnect();
                try {
                    const user = await UserModel.findOne({
                        $or: [{ userName: credentials.username }, { email: credentials.email }],
                    });
                    if (!user) {
                        throw new Error("No User Found");
                    }
                    if (!user.isVerified) {
                        throw new Error("Please Verify Your Email");
                    }
                    if (credentials.password === user.password) {
                        throw new Error("Invalid Password");
                    }
                    return user;
                } catch (error: any) {
                    console.warn(error.message);
                    return null; // Returning null indicates failed authentication
                }
            },
        }),
    ],
    callbacks:{
        async session({session, token}){//user came from return authorize function
            if (token) {
                session.user._id = token._id;
                session.user.isVerified = token.isVerified;
                session.user.isAcceptingMessage = token.isAcceptingMessage;
                session.user.userName = token.userName;
            }
            return session;
        },
        async jwt({token, user}){
            if (user) {
                token._id = user._id?.toString();
                token.isVerified = user.isVerified;
                token.isAcceptingMessage = user.isAcceptingMessage;
                token.userName = user.userName;
            }
            return token;
        },
    },
    pages: {
        signIn: "/sign-in",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXT_AUTH_SECRET,
};