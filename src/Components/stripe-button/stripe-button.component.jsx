import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForString = price * 100;
	const publishableKey = 'pk_test_2yT6kOBQITBUecQTG1bDSxyW00XCVXL7Xu';

	const onToken = token => {
		console.log(token);
		alert('Payment successful');
	};

	return (
		<StripeCheckout
			label="Pay Now!"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/Cuz.svg"
			description={`Your total is $${price}`}
			amount={priceForString}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
