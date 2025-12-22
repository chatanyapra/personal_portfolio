// app/api/auth/[...nextauth]/route.ts
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import User from '@/models/userModel';
type ExtendedUser = {
  id: string;
  name: string;
  image?: string | null;
  isAdmin?: boolean;
};

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Record<'username' | 'password', string> | undefined) {
        if (!credentials) return null;
        await connectToDB();

        const user = await User.findOne({ username: credentials.username }); // you hardcoded "chatanya" before!
        if (!user) throw new Error('No user found');
        if (!user.password) throw new Error('User has no password set');

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password as string
        );

        if (!isPasswordCorrect) throw new Error('Invalid password');

        return {
          id: user._id.toString(),
          name: user.username,
          image: user.image || null,
          isAdmin: user.isAdmin || false, // ✅ no 'as any'
        } satisfies ExtendedUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as ExtendedUser;
        token.id = u.id;
        token.name = u.name;
        token.image = u.image;
        token.isAdmin = u.isAdmin || false;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = String(token.id);
      session.user.isAdmin = Boolean(token.isAdmin);
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// 👇 export both the handler and authOptions
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
