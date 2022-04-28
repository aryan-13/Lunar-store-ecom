import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Navbar, FilterBar, ProductCard } from '../Components/index';
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
	let filteredByCategory =
		filter.categories.length === 0
			? modifiedProducts
			: filterByCategory(modifiedProducts, filter.categories);
	let filteredByRating = filterByRating(filteredByCategory, filter.rating);
	return (
		<div className="home-container flex-col">
			<Navbar />
			<div class="flex-row prod-filter-container">
				<FilterBar />
				<div className="flex-col product-section ">
					<div className="heading-5 bold-1">
						Showing{' '}
						<span className="color-primary">{filteredByRating.length}</span> of{' '}
						{products.length} Products
					</div>
					<div className="flex-row product-section">
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
		</div>
	);
}

export default ProductListing;
