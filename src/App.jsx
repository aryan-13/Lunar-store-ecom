import './App.css';

import { Routes, Route } from 'react-router-dom';
import {
	CartPage,
	HomePage,
	Login,
	Signup,
	WishlistPage,
	ProductListing,
} from '../src/pages';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductListing />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/wishlist" element={<WishlistPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
