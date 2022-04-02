import { useContext, createContext, useReducer } from 'react';

const cartContext = createContext();

const cart = {
	cartProducts: [],
	price: 0,
	totalDiscount: 0,
	totalPrice: 0,
};
const CartProvider = ({ children }) => {
	const calculateCartPrice = () => {
		let totalPrice = 0;
		for (let i = 0; i < cart.cartProducts.length; i++) {
			totalPrice +=
				cart.cartProducts[i].price * cart.cartProducts[i].inCartQuantity;
			console.log(totalPrice);
		}
		return totalPrice;
	};
	const addtocart = (state, product) => {
		console.log(state.cartProducts, product);

		const updatedProduct = {
			...product,
			inCartQuantity: 1,
		};
		return {
			...state,
			price: calculateCartPrice(),
			cartProducts: [...state.cartProducts, updatedProduct],
		};
	};
	const removeFromCart = (state, product) => {
		const updatedCart = state.cartProducts.filter(
			(item) => item.id !== product.id
		);
		return {
			...state,
			price: calculateCartPrice(),
			cartProducts: updatedCart,
		};
	};
	const increaseQuantity = (state, product) => {
		const updatedProduct = state.cartProducts.map((item) => {
			if (item.id === product.id) {
				return {
					...item,
					price: calculateCartPrice(),
					inCartQuantity: item.inCartQuantity + 1,
				};
			}
			return item;
		});
		return {
			...state,
			price: calculateCartPrice(),
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
				price: calculateCartPrice(),
				cartProducts: updatedCart,
			};
		} else {
			const updatedProduct = state.cartProducts.map((item) => {
				if (item.id === product.id) {
					return { ...item, inCartQuantity: item.inCartQuantity - 1 };
				}
				return item;
			});
			console.log('DECREASING Q:', product.inCartQuantity);
			return {
				...state,
				price: calculateCartPrice(),
				cartProducts: updatedProduct,
			};
		}
	};
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
