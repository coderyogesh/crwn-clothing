import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton= ({ price })  => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J2TH2SAk6ew1ec5EGcc5PziwCdiH5tPE4gaLmRtIXAnb9FfGCNIQjs9QGYRPjy0MAXooslrAU7F9gf3omvggTj600DlqJQR8M';

    const onToken = token => {
    console.log(token);
    alert('Payment Successful');
    }


    return (
        <StripeCheckout 
        label ='Pay Now'
        name ='CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image ='https://svgshare.com/i/CUz.svg'
        description = {`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token= {onToken}
        stripeKey = {publishableKey}
        />
    );
};
export default StripeCheckoutButton;
