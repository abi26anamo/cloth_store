import { NextResponse } from "next/server"; 
import prisma from "@/libs/prismadb"; 

import { getCurrentUser } from "@/actions/getCurrentUser"; 

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();
    

    if (!currentUser || currentUser.role !== "ADMIN") { 
        return NextResponse.error();
    }

    try {
        const body = await request.json(); 
        const { name, description, price, brand, category, inStock, images } = body; 
        const product = await prisma.product.create({
            data: {
                brand,
                category,
                description,
                images,
                inStock,
                name,
                price: parseFloat(price),
            },
            });
        return NextResponse.json(product);
    } catch (error) {
        console.error('creating product error:', error);
  return NextResponse.error(); 
    }

 
} 


export  async function PUT(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.error();

    if (currentUser.role !== "ADMIN") {
        return NextResponse.error();
    }


    try {
        const body = await request.json();
        const { id, inStock } = body;
        
        const product = await prisma.product.update({
            where: {
                id,
            },
            data: {
                inStock,
            },
        });
    
        return NextResponse.json(product);
    } catch (error) {

        console.error('updating product error:', error);
        return NextResponse.error();
        
    }

   
}

