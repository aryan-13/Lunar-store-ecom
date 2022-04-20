import './CartComponents.css';
import { Link } from 'react-router-dom';
function EmptyCart({ text }) {
	return (
		<div className="empty-cart-card">
			<h5 className="heading-5">{text}</h5>
			<div className="u-margin-bottom-small"></div>
			<Link to="/products" class="btn btn-primary btn-sm">
				Shop Now
			</Link>
		</div>
	);
}

export default EmptyCart;
