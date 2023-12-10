import prisma from "@/libs/prismadb";

export default async function getOrders() {
  try {
    const orders = prisma.order.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createDate: "desc",
      },
    });
    return orders; 
  } catch (error: any) {
    console.log("order error",error)
    throw new Error(error);
  }
}
