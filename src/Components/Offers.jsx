import { Link } from 'react-router-dom';
const Offers = () => {
	return (
		<section className="offers">
			<div className="flex-col offers-cont ">
				<h1 className="heading-4 bold-1">
					Members get upto extra 20% off on all products!
				</h1>
				<div className="u-margin-bottom-small"></div>
				<div className="u-margin-bottom-small"></div>
				<div className="offer-cta flex-row">
					<Link to="/signup" className="btn btn-primary btn-md">
						Register Here
					</Link>
					<Link to="/login" className="btn btn-primary btn-md">
						Login Now
					</Link>
				</div>
			</div>
		</section>
	);
};
export default Offers;
