import React from 'react';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import FilterBar from '../Components/FilterBar';
import ProductCard from '../Components/ProductCard';
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
	return (
		<div className="home-container flex-col">
			<Navbar />
			<div class="flex-row prod-filter-container">
				<FilterBar />
				<div className="flex-row product-section ">
					{products.map((product) => {
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
