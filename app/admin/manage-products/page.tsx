import React from "react";
import Container from "@/app/components/Container";
import ManageProductsClient from "../manage-products/manageProductsClient";
import getProducts from "@/actions/getProducts";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
const ManageProducts = async () => {
  const products = (await getProducts({ category: null })) as any;
  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    return <NullData title="Oops! Access Denied" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageProductsClient products={products} />
      </Container>
    </div>
  );
};

export default ManageProducts;
