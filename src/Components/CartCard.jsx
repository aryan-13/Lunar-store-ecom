import React from 'react';
import { useCart } from '../Context/cart-context';
import { useWishlist } from '../Context/wishlist-context';
function CartCard({ CartProduct }) {
	const { dispatch } = useCart();
	const { wishlistDispatch } = useWishlist();
	return (
		<div className=" flex-row product-card ">
			<div className="prod-img">
				<img src={CartProduct.image} alt="" className="responsive-img" />
			</div>
			<div className="prod-card-body flex-col">
				<h5 className="heading-5 bold-2">{CartProduct.name}</h5>
				<span className="p-md color-primary-dark bold-1" id="price">
					{'$' + CartProduct.price}
				</span>
				<div className="flex-row inc-dec">
					<button
						className="btn-icon-secondary"
						onClick={() =>
							dispatch({ type: 'DECREASE_QUANTITY', payload: CartProduct })
						}
					>
						<i className="fa fa-minus"></i>
					</button>
					<span id="quantity">{CartProduct.inCartQuantity}</span>

					<button
						className="btn-icon-secondary"
						onClick={() =>
							dispatch({ type: 'INCREASE_QUANTITY', payload: CartProduct })
						}
					>
						<i className="fa fa-plus"></i>
					</button>
				</div>
				<button
					onClick={() =>
						wishlistDispatch({ type: 'ADD_TO_WISHLIST', payload: CartProduct })
					}
					className="btn btn-sm btn-primary"
				>
					Move to Wishlist{' '}
				</button>
			</div>

			<button
				className="btn btn-tertiary-icon"
				id="close-btn"
				onClick={() =>
					dispatch({ type: 'REMOVE_FROM_CART', payload: CartProduct })
				}
			>
				<i className="fas fa-times"></i>
			</button>
		</div>
	);
}

export default CartCard;
