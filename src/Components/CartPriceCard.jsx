import React from 'react';
import { useCart } from '../Context/cart-context';
function CartPriceCard() {
	const { state } = useCart();
	return (
		<div className="flex-col cart-total ">
			<div className="flex-col cart-total-heading">
				<h1 className="heading-5">Price Details</h1>

				<div className="flex-row cart-total-items ">
					<p className="p-sm">Total Price:</p>
					<span className="p-sm">${state.price}</span>
				</div>
				<div className="flex-row cart-total-items">
					<p className="p-sm">Discount:</p>
					<span className="p-sm">${state.totalDiscount}</span>
				</div>
				<div className="flex-row cart-total-items">
					<p className="p-sm">Delivery Charges:</p>
					<span className="p-sm">$50</span>
				</div>
				<div className="flex-row cart-total-items">
					<p className="p-md bold-1">Total Price:</p>
					<span className="color-primary p-md bold-1">
						${state.price - state.totalDiscount}
					</span>
				</div>
				<button className="btn btn-sm btn-primary">Place Order </button>
			</div>
		</div>
	);
}

export default CartPriceCard;
