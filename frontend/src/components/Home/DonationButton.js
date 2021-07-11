import React, {useState, useEffect} from 'react'
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HNmqhBRlnUVKZqLxvciKAeVTJXA6EA48nsHWoiml6EksDI4jqCjgytR9R3hlPkMwFIMgjXG3P4yb7QbIODKd8TR00g3KlvJVs');

const DonationButton = ({amount, classRef}) => {
    const [donationAmount, setDonationAmount] = useState(null)

    useEffect(() => {
        if(donationAmount){
            console.log(donationAmount)
            //Create payload that will be sent to the backend
          const payload = {
            amount: donationAmount.amount
          }
          // Get Stripe.js instance
          const stripe = stripePromise;

          // Call your backend to create the Checkout Session
          const response = fetch('/api/create-checkout-session', { 
           method: 'POST',
           headers: {
            "Accept": "application/json",
            "Content-Type": "Application/json"
           },
           body: JSON.stringify(payload)
           });

           const session = response.json();

            // When the customer clicks on the button, redirect them to Checkout.
            const result = stripe.redirectToCheckout({
              sessionId: session.id,
            });

            if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
                alert(`${result.error.message}`);
              }

        }
    }, [donationAmount]);

    const handleButtonClick = async (amount) => {
        await setDonationAmount({"amount": amount})
    }

    return (
        <div>
            <button className={`donate-card ${classRef}`} onClick={()=>{handleButtonClick(amount)}}>
               {typeof amount == "number"  ? '£' : null} {amount}
            </button>
        </div>
    )
}

export default DonationButton
