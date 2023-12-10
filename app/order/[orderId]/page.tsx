import getOrderById from "@/actions/getOrderById";
import Container from "../../components/Container";
import OrderDetail from "./OrderDetail";
import NullData from "@/app/components/NullData";
interface OrderProps {
  orderId?: string;
}

const Order = async ({ params }: { params: OrderProps }) => {
  const order = await getOrderById(params);

  if (!order) {
    return <NullData title="Oops! Order not found" />;
  }
  return (
    <div>
      <Container>
        <OrderDetail order={order} />
      </Container>
    </div>
  );
};

export default Order;   