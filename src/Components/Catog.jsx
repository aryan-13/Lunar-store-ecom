import { useNavigate } from 'react-router-dom';
import { useFilter } from '../Context/filter-context';

const Catog = () => {
	const { filterDispatch } = useFilter();
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/products`;
		navigate(path);
	};
	return (
		<section class="flex-col home-catog ">
			<h3 class="heading-4 bold-3">
				Shop <span class="color-primary">By</span> Category
			</h3>
			<div class="flex-row catog-cont">
				{}
				<div
					class="catog-box"
					onClick={() => {
						filterDispatch({ type: 'CLEAR_ALL' });
						filterDispatch({ type: 'CATEGORY_CHECKED', payload: 'Bottoms' });
						routeChange();
					}}
				>
					<img
						src="https://res.cloudinary.com/difqzsduz/image/upload/v1647713859/Lunar%20store/bottoms_wyvjx6.png"
						alt=""
						class="responsive-img"
					/>
					<div class="overlay">
						<div class="overlay-text">Bottoms</div>
					</div>
				</div>
				<div
					class="catog-box"
					onClick={() => {
						filterDispatch({ type: 'CLEAR_ALL' });
						filterDispatch({ type: 'CATEGORY_CHECKED', payload: 'Tshirts' });
						routeChange();
					}}
				>
					<img
						src="https://res.cloudinary.com/difqzsduz/image/upload/v1647713861/Lunar%20store/tee_uvwq1g.png"
						alt=""
						class="responsive-img"
					/>
					<div class="overlay">
						<div class="overlay-text">Tshirts</div>
					</div>
				</div>
				<div
					class="catog-box"
					onClick={() => {
						filterDispatch({ type: 'CLEAR_ALL' });
						filterDispatch({ type: 'CATEGORY_CHECKED', payload: 'Shirts' });
						routeChange();
					}}
				>
					<img
						src="https://res.cloudinary.com/difqzsduz/image/upload/v1647713860/Lunar%20store/shirts_rbqvvb.png"
						alt=""
						class="responsive-img"
					/>
					<div class="overlay">
						<div class="overlay-text">Shirts</div>
					</div>
				</div>
				<div
					class="catog-box"
					onClick={() => {
						filterDispatch({ type: 'CLEAR_ALL' });
						filterDispatch({ type: 'CATEGORY_CHECKED', payload: 'Jackets' });
						routeChange();
					}}
				>
					<img
						src="https://res.cloudinary.com/difqzsduz/image/upload/v1647713860/Lunar%20store/outerwear_sdxg4u.png"
						alt=""
						class="responsive-img"
					/>
					<div class="overlay">
						<div class="overlay-text">Jackets</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Catog;
