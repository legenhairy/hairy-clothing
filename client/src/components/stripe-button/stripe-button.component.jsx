import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_kAA04ORrGyiEbvlVtvBxk2nY00IhIKvEo7';

  const onToken = token => {
  	axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error))
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card.'
      );
    }) 
  }

  return (
  	<StripeCheckout 
  	  label='Pay Now'
  	  name='Hairy Clothing Ltd.'
  	  billingAddress
  	  shippingAddress
  	  image='https://svgshare.com/i/CUz.svg'
  	  description={`Your total is $${price}`}
  	  amount={priceForStripe}
  	  panelLabel='Pay Now'
  	  token={onToken}
  	  stripeKey={publishableKey}
  	/>
  );
}

export default StripeCheckoutButton;