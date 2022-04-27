import { createContext, useContext, useReducer } from 'react';

const filterContext = createContext();

const initFilterState = {
	sortBy: '',
	price: 0,
	gender: '',
	categories: [],
	rating: 1,
};
const sortByPrice = (productList, sortBy) => {
	if (sortBy === 'LOW_TO_HIGH')
		return productList.sort((a, b) => a.discountPrice - b.discountPrice);
	else if (sortBy === 'HIGH_TO_LOW')
		return productList.sort((a, b) => b.discountPrice - a.discountPrice);
	else return productList;
};

const filterByCategory = (productList, filterCategories) => {
	return productList.filter((item) => {
		return filterCategories.includes(item.category);
	});
};

const filterByRating = (productList, maxRating) => {
	return productList.filter((product) => product.rating >= maxRating);
};

const filterReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SORT_BY':
			return { ...state, sortBy: action.payload };
		case 'CATEGORY_CHECKED':
			return {
				...state,
				categories: state.categories.includes(action.payload)
					? state.categories.filter(
							(category) =>
								category.toLowerCase() !== action.payload.toLowerCase()
					  )
					: [...state.categories, action.payload],
			};
		case 'RATING':
			return { ...state, rating: action.payload };
		case 'CLEAR_ALL':
			return initFilterState;
		default:
			return state;
	}
};
const FilterProvider = ({ children }) => {
	const [filter, filterDispatch] = useReducer(filterReducer, initFilterState);
	return (
		<filterContext.Provider value={{ filter, filterDispatch }}>
			{children}
		</filterContext.Provider>
	);
};
const useFilter = () => useContext(filterContext);
export {
	FilterProvider,
	useFilter,
	sortByPrice,
	filterByCategory,
	filterByRating,
};
