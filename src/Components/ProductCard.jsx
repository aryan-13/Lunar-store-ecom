import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/cart-context';
import { useWishlist } from '../Context/wishlist-context';

function ProductCard({ product, page }) {
	const { state, dispatch } = useCart();
	const { wishlistDispatch } = useWishlist();
	const checkInCart = () => {
		if (state.cartProducts.some((item) => item.id === product.id)) {
			return false;
		} else return true;
	};
	return (
		<div>
			<div className="vertical-card">
				<div className="card-img">
					<img src={product.image} alt="" />
				</div>
				<div className="card-text">
					<h3 className="card-title ">{product.name}</h3>
					<span className="bold-3">{product.rating}⭐</span>

					<div className="card-price">
						₹ {product.discountPrice}{' '}
						<span className="card-price-striked">₹ {product.price}</span>
						<span className="card-price-percent bold-2">
							{product.discountPercentage}
						</span>
					</div>
				</div>
				<div className="card-btn">
					<div className="button-box">
						{checkInCart() ? (
							<button
								onClick={() => {
									dispatch({ type: 'ADD_TO_CART', payload: product });
								}}
								className="btn btn-primary btn-sm"
							>
								ADD TO CART
							</button>
						) : (
							<Link to="/cart" className="btn btn-primary btn-sm">
								GO TO CART
							</Link>
						)}
						<i className="fa fa-shopping-cart btn-box-icon btn-sm"></i>
					</div>
					{page === 'productListing' ? (
						<button
							className="btn btn-tertiary-icon card-btn-icon"
							onClick={() =>
								wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: product })
							}
						>
							<i className="fas fa-heart"></i>
						</button>
					) : (
						<button
							className="btn btn-tertiary-icon card-btn-icon"
							onClick={() =>
								wishlistDispatch({
									type: 'REMOVE_FROM_WISHLIST',
									payload: product,
								})
							}
						>
							<i className="fas fa-trash"></i>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
