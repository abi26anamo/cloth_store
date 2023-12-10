import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb";
export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();
    
    if (!session?.user?.email) {
      console.log("No email found in session");
      return null;
    }

    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session?.user?.email,
      },
      include: {
        orders:true,
      }
    });
    
    // console.log("Current User:", currentUser);

    if (!currentUser) {
      console.log("User not found in the database");
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

