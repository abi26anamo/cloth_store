import prisma from "@/libs/prismadb";
interface Iparams {
  productId?: string;
}

export default async function getProductsById(params: Iparams) {
  try {
    const { productId } = params;

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
      
      if (!product) {
        return null;
      }

      return product;
  } catch (error: any) {
    console.log("error",error)
    throw new Error(error);
  }
}
