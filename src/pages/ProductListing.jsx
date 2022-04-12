import React from 'react';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import FilterBar from '../Components/FilterBar';
import ProductCard from '../Components/ProductCard';
import {
	useFilter,
	sortByPrice,
	filterByCategory,
	filterByRating,
} from '../Context/filter-context';
function ProductListing() {
	const [products, setProducts] = React.useState([]);
	const getData = async () => {
		const data = await axios.get('/api/products');
		try {
			console.log(data.data.products);
			setProducts(data.data.products);
		} catch {
			console.log('error');
		}
	};
	useEffect(() => {
		getData();
	}, []);
	const { filter } = useFilter();

	let modifiedProducts =
		filter.sortBy === '' ? products : sortByPrice(products, filter.sortBy);
	console.log('modifiedPro', modifiedProducts);
	let filteredByCategory =
		filter.categories.length === 0
			? modifiedProducts
			: filterByCategory(modifiedProducts, filter.categories);
	console.log('filter Category: ', filter.categories);
	console.log('MP:', filteredByCategory);
	let filteredByRating = filterByRating(filteredByCategory, filter.rating);
	return (
		<div className="home-container flex-col">
			<Navbar />
			<div class="flex-row prod-filter-container">
				<FilterBar />
				<div className="flex-row product-section ">
					{filteredByRating.map((product) => {
						return (
							<ProductCard
								product={product}
								key={product.id}
								page={'productListing'}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ProductListing;
