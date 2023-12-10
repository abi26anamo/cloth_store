import React from "react";
import Container from "@/app/components/Container";
import getOrders from "@/actions/getOrders";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import ManageOrderClient from "./ManageOrderClient";
const ManageOrders = async () => {
  const orders = await getOrders();

  console.log("orders", orders);

  const user = await getCurrentUser();

  if (!user || user.role !== "ADMIN") {
    return <NullData title="Oops! Access Denied" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <ManageOrderClient orders={orders} />
      </Container>
    </div>
  );
};

export default ManageOrders;
