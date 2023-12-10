"use client";

import { CartProductType } from "@/app/product/ProductDetail";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

const btnStyles = "border-[1.2px]  border-slate-300 px-2 rounded";

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartCounter,
  cartProduct,
  handleQuantityIncrease: handleQuantityIncrease,
  handleQuantityDecrease: handleQuantityDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      <div>
        {cartCounter ? null : <div className="font-semibold">QUALITY:</div>}
        <div className="flex gap-4 items-center text-base">
          <button className={btnStyles} onClick={handleQuantityDecrease}>
            -
          </button>
          <div>{cartProduct.quantity}</div>
          <button className={btnStyles} onClick={handleQuantityIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetQuantity;
