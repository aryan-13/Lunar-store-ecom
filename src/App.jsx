import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListing from './pages/ProductListing';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductListing />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/wishlist" element={<WishlistPage />} />
			</Routes>
		</div>
	);
}

export default App;
