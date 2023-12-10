import Container from "../../components/Container";
import ProductDetail from "../ProductDetail";
import ListRating from "@/app/product/[productId]/ListRating";
import getProductsById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";
import AddRating from "./AddRating";
import { getCurrentUser } from "@/actions/getCurrentUser";
interface ProductProps {
  productId?: string;
}

const Product = async ({ params }: { params: ProductProps }) => {
  const product = await getProductsById(params);
  const user = await getCurrentUser();
  if (!product) {
    return <NullData title="Oops! Product not found" />;
  }
  return (
    <div>
      <Container>
        <ProductDetail product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>
            <AddRating product={product} user={user} />
            <ListRating product={product} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
