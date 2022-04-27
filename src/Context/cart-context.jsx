import { useContext, createContext, useReducer } from 'react';

const cartContext = createContext();

const cart = {
	cartProducts: [],
	price: 0,
	totalDiscount: 0,
	wishlistProduct: [],
};
const CartProvider = ({ children }) => {
	const addtocart = (state, product) => {
		const updatedProduct = {
			...product,
			inCartQuantity: 1,
		};
		return {
			...state,
			price: state.price + product.price,
			totalDiscount:
				state.totalDiscount + (product.price - product.discountPrice),
			cartProducts: [...state.cartProducts, updatedProduct],
		};
	};
	const removeFromCart = (state, product) => {
		const updatedCart = state.cartProducts.filter(
			(item) => item.id !== product.id
		);
		return {
			...state,
			price: state.price - product.price,
			totalDiscount:
				state.totalDiscount - (product.price - product.discountPrice),
			cartProducts: updatedCart,
		};
	};
	const increaseQuantity = (state, product) => {
		const updatedProduct = state.cartProducts.map((item) => {
			if (item.id === product.id) {
				return {
					...item,
					inCartQuantity: item.inCartQuantity + 1,
				};
			}
			return item;
		});
		return {
			...state,
			price: product.price + state.price,
			totalDiscount:
				state.totalDiscount + (product.price - product.discountPrice),

			cartProducts: updatedProduct,
		};
	};
	const decreaseQuantity = (state, product) => {
		if (product.inCartQuantity < 2) {
			const updatedCart = state.cartProducts.filter(
				(item) => item.id !== product.id
			);
			return {
				...state,
				price: state.price - product.price,
				totalDiscount:
					state.totalDiscount - (product.price - product.discountPrice),

				cartProducts: updatedCart,
			};
		} else {
			const updatedProduct = state.cartProducts.map((item) => {
				if (item.id === product.id) {
					return { ...item, inCartQuantity: item.inCartQuantity - 1 };
				}
				return item;
			});
			return {
				...state,
				price: state.price - product.price,
				totalDiscount:
					state.totalDiscount - (product.price - product.discountPrice),
				cartProducts: updatedProduct,
			};
		}
	};
	const addToWishlist = (state, product) => {};
	const reducer = (state, action) => {
		switch (action.type) {
			case 'ADD_TO_CART':
				return addtocart(state, action.payload);
			case 'INCREASE_QUANTITY':
				return increaseQuantity(state, action.payload);
			case 'DECREASE_QUANTITY':
				return decreaseQuantity(state, action.payload);
			case 'REMOVE_FROM_CART':
				return removeFromCart(state, action.payload);
			case 'ADD_TO_WISHLIST':
				return addToWishlist(state, action.payload);
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, cart);

	return (
		<cartContext.Provider value={{ state, dispatch }}>
			{children}
		</cartContext.Provider>
	);
};
const useCart = () => useContext(cartContext);
export { useCart, CartProvider };
