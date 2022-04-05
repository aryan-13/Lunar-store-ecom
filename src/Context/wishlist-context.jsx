import { useContext, createContext, useReducer } from 'react';
const wishlistContext = createContext();

const wishlistProducts = [];

function WishlistProvider({ children }) {
	const addToWishlist = (state, product) => {
		if (state.some((item) => item.id === product.id)) return state;
		else return [...state, product];
	};
	const removeFromWishlist = (state, product) => {
		return state.filter((item) => item.id !== product.id);
	};

	const wishlistReducer = (state, action) => {
		switch (action.type) {
			case 'ADD_TO_WISHLIST':
				return addToWishlist(state, action.payload);
			case 'REMOVE_FROM_WISHLIST':
				return removeFromWishlist(state, action.payload);
			default:
				return state;
		}
	};
	const [wishlist, wishlistDispatch] = useReducer(
		wishlistReducer,
		wishlistProducts
	);

	return (
		<wishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
			{children}
		</wishlistContext.Provider>
	);
}

const useWishlist = () => useContext(wishlistContext);
export { useWishlist, WishlistProvider };
