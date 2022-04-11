import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Context/cart-context';
import { WishlistProvider } from './Context/wishlist-context';
import { FilterProvider } from './Context/filter-context';
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<FilterProvider>
				<CartProvider>
					<WishlistProvider>
						<App />
					</WishlistProvider>
				</CartProvider>
			</FilterProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
