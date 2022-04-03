import React from 'react';
import { useCart } from '../Context/cart-context';

function ProductCard({ product }) {
	const { state, dispatch } = useCart();
	const checkInCart = () => {
		for (let i = 0; i < state.cartProducts.length; i++) {
			if (state.cartProducts[i].id === product.id) {
				return false;
			}
		}
		return true;
	};
	return (
		<div>
			<div className="vertical-card">
				<div className="card-img">
					<img src={product.image} alt="" />
				</div>
				<div className="card-text">
					<h3 className="card-title">{product.name}</h3>
					<div className="card-price">
						{product.discountPrice}{' '}
						<span className="card-price-striked">{product.price}</span>
					</div>
				</div>
				<div className="card-btn">
					<div className="button-box">
						{checkInCart() ? (
							<button
								onClick={() => {
									dispatch({ type: 'ADD_TO_CART', payload: product });
									console.log(product.inCartQuantity);
								}}
								className="btn btn-primary btn-sm"
							>
								ADD TO CART
							</button>
						) : (
							<button
								onClick={() => {
									console.log('Go TO CART');
								}}
								className="btn btn-primary btn-sm"
							>
								GO TO CART
							</button>
						)}
						<i className="fa fa-shopping-cart btn-box-icon btn-sm"></i>
					</div>
					<button className="btn btn-tertiary-icon card-btn-icon">
						<i className="fas fa-heart"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
