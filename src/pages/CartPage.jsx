import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CartCard from '../Components/CartCard';
import { useCart } from '../Context/cart-context';
function CartPage() {
	const { state, dispatch } = useCart();
	const cartProds = state.cartProducts;

	return (
		<div>
			<Navbar />
			<section className="cart">
				{/* <!-- HEADING --> */}
				<h3 className="cart-heading heading-4 bold-2 centered">
					{' '}
					CART <i className="color-primary-dark fa fa-shopping-cart"></i>{' '}
				</h3>
				{/* <!-- MARGINS --> */}
				<div className="u-margin-bottom-medium"></div>
				<div className="u-margin-bottom-small"></div>
				{/* <!-- WRAPPING CONTAINER FOR CARD AND PRICE DETAILS --> */}
				<div className="flex-row wrapper">
					<div className="flex-col cart-card-box">
						{cartProds.map((prod) => {
							return <CartCard CartProduct={prod} key={prod.id} />;
						})}
					</div>
					<div className="u-margin-bottom-medium"></div>
					{/* <!-- ----PRICE DETAILS --> */}
					<div className="flex-col cart-total ">
						<div className="flex-col cart-total-heading">
							<h1 className="heading-5">Price Details</h1>

							<div className="flex-row cart-total-items ">
								<p className="p-sm">Total Price:</p>
								<span className="p-sm">{state.price}</span>
							</div>
							<div className="flex-row cart-total-items">
								<p className="p-sm">Discount:</p>
								<span className="p-sm">$4</span>
							</div>
							<div className="flex-row cart-total-items">
								<p className="p-sm">Delivery Charges:</p>
								<span className="p-sm">$2</span>
							</div>
							<div className="flex-row cart-total-items">
								<p className="p-md bold-1">Total Price:</p>
								<span className="color-primary p-md bold-1">$18</span>
							</div>
							<a href="" className="btn btn-sm btn-primary">
								Place Order{' '}
							</a>
						</div>
					</div>
					{/* <!-- ------------------ --> */}
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default CartPage;
