import Navbar from '../Components/Navbar';
import { useWishlist } from '../Context/wishlist-context';
import { Footer, ProductCard, EmptyCart } from '../Components/index';
function WishlistPage() {
	const { wishlist } = useWishlist();
	return (
		<div className="home-container flex-col">
			<Navbar />
			<div className="flex-col">
				<div className="u-margin-bottom-small"></div>
				<h3 className="cart-heading heading-4 bold-2 centered">
					{' '}
					Wishlist <i className="color-primary-dark fa fa-heart"></i>
				</h3>
				<section className="flex-row product-section ">
					{wishlist.length > 0 ? (
						wishlist.map((item) => {
							return (
								<ProductCard product={item} key={item.id} page={'wishlist'} />
							);
						})
					) : (
						<EmptyCart text="Your wishlist is empty" />
					)}
				</section>
			</div>

			<Footer />
		</div>
	);
}

export default WishlistPage;
