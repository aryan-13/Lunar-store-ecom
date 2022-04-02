import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListing from './pages/ProductListing';
import CartPage from './pages/CartPage';
function App() {
	return (
		<div className="App home-container flex-col">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductListing />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
		</div>
	);
}

export default App;
