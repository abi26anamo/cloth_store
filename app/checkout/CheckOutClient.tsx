"use client";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Button from "../components/Button";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

console.log("key", process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const CheckOutClient = () => {
  const router = useRouter();
  const { cartProducts, paymentIntent, handleSetPayementIntent } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  console.log("cartProducts", cartProducts),
    useEffect(() => {
      if (cartProducts) {
        setLoading(true);
        setError(false);

        fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cartProducts,
            payment_intent_id: paymentIntent,
          }),
        })
          .then((res) => {
            setLoading(false);
            if (res.status === 401) {
              return router.push("/login");
            }
            return res.json();
          })
          .then((data) => {
            setClientSecret(data.paymentIntent.client_secret);
            handleSetPayementIntent(data.paymentIntent.id);
          })
          .catch((error: any) => {
            setError(true);
            toast.error("Something went wrong");
            console.log("error at created order", error);
          });
      }
    }, [cartProducts, paymentIntent]);
  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

 

  const handleSetPaymentSuccess = useCallback((value: boolean) => {
    setPaymentSuccess(value);
  }, []);

  return (
    <div className="w-3/4 pl-80">
      {clientSecret && cartProducts && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm
            clientSecret={clientSecret}
            handleSetPayementSuccess={handleSetPaymentSuccess}
          />
        </Elements>
      )}
      {loading && <div className="text-center">Loading checkout....</div>}
      {error && (
        <div className="text-center text-rose-500">Error loading checkout</div>
      )}
      {paymentSuccess && (
        <div className="flex items-center flex-col gap-4">
          <div className="text-teal-500 text-center">Payment Success</div>
          <div className="max-w-[220px] w-full">
            <Button
              label="View Your Orders"
              onClick={() => router.push("/orders")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutClient;
