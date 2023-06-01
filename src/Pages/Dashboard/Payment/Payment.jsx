import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
const Payment = () => {
  return (
    <div className="w-full">
      <SectionTitle
        subHeading="Please Provide"
        heading="Payment"
      ></SectionTitle>
      <h2 className="text-4xl">Pay for the food</h2>

      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
