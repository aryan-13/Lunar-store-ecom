import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CartCard from '../Components/CartCard';
import { useCart } from '../Context/cart-context';
import CartPriceCard from '../Components/CartPriceCard';
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
					<div class="flex-col cart-total ">
						{/* <!-- ----PRICE DETAILS --> */}
						<CartPriceCard />
						{/* <!-- ------------------ --> */}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default CartPage;
