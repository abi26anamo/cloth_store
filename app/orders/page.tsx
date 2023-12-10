import React from "react";
import Container from "@/app/components/Container";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import getOrdersByUserId from "@/actions/getOrdersByUserId";
import OrderClient from "./OrdersClient";
const Orders = async () => {

  const user = await getCurrentUser();

  if (!user) {
    return <NullData title="Oops! Access Denied" />;
    }
    
    const orders = await getOrdersByUserId(user.id)

    if (!orders) {
        return <NullData title="No orders yet"/>
    }

  return (
    <div className="pt-8">
      <Container>
        <OrderClient orders={orders} />
      </Container>
    </div>
  );
};

export default Orders;
