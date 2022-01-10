import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const PUBLIC_KEY =
  "pk_test_51KG8zTHw25hVTr4IgUcdnDRcyQY0L22f1BrTh12YkcW0yBjiXuGrSzXICmg1EX9Z2hvDfz6T2yzYVmVPXDOzIAzw00PtS8qTlj";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
