import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CartCard from '../Components/CartCard';
import { useCart } from '../Context/cart-context';
import CartPriceCard from '../Components/CartPriceCard';
import EmptyCart from '../Components/CartComponents/EmptyCart';
function CartPage() {
	const { state } = useCart();
	const cartProds = state.cartProducts;

	return (
		<div class="home-container flex-col">
			<Navbar />

			<section className="cart">
				<h3 className="cart-heading heading-4 bold-2 centered">
					{' '}
					CART <i className="color-primary-dark fa fa-shopping-cart"></i>{' '}
				</h3>
				<div className="u-margin-bottom-medium"></div>
				<div className="u-margin-bottom-small"></div>
				{cartProds.length > 0 ? (
					<div className="flex-row wrapper">
						<div class="flex-col cart-card-box">
							{cartProds.map((prod) => {
								return <CartCard CartProduct={prod} key={prod.id} />;
							})}
						</div>
						<div className="u-margin-bottom-medium"></div>
						<CartPriceCard />
					</div>
				) : (
					<EmptyCart text="Your cart is empty" />
				)}
			</section>
			<Footer />
		</div>
	);
}

export default CartPage;
