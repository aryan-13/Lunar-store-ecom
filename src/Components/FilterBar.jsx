import { useEffect, useState } from 'react';
import { useFilter } from '../Context/filter-context';
import axios from 'axios';
function FilterBar() {
	const { filter, filterDispatch } = useFilter();
	const [categories, setCategories] = useState();
	const getCategory = async () => {
		const categories = await axios.get('/api/categories');

		try {
			setCategories(categories.data.categories);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getCategory();
	}, []);
	return (
		<div className="filter-bar">
			<div className="flex-row filter-header">
				<h4 className="heading-5 bold-2">Filters</h4>
				<button
					className="btn-2 btn-underlined"
					onClick={() => filterDispatch({ type: 'CLEAR_ALL' })}
				>
					Clear all
				</button>
			</div>
			<hr />
			<div className="u-margin-bottom-small"></div>

			<div className="filter-price">
				<p className="p-md">Price</p>
				<div className="u-margin-bottom-small"></div>
				<div className="u-margin-bottom-small"></div>

				<label className="radio-list">
					Low to High
					<input
						type="radio"
						checked={filter.sortBy === 'LOW_TO_HIGH'}
						onChange={() =>
							filterDispatch({ type: 'SET_SORT_BY', payload: 'LOW_TO_HIGH' })
						}
						name="radio"
					/>
					<span className="radio"></span>
				</label>
				<label className="radio-list">
					High to Low
					<input
						type="radio"
						name="radio"
						checked={filter.sortBy === 'HIGH_TO_LOW'}
						onChange={() =>
							filterDispatch({ type: 'SET_SORT_BY', payload: 'HIGH_TO_LOW' })
						}
					/>
					<span className="radio"></span>
				</label>
			</div>
			<hr />
			<div className="u-margin-bottom-small"></div>

			<div className="filter-category">
				<p className="p-md">Category</p>
				<div className="u-margin-bottom-small"></div>
				<div className="u-margin-bottom-small"></div>
				{categories &&
					categories.map((category) => {
						return (
							<label className="check-list">
								{category.categoryName}
								<input
									type="checkbox"
									onChange={() =>
										filterDispatch({
											type: 'CATEGORY_CHECKED',
											payload: category.categoryName,
										})
									}
									checked={filter.categories.includes(category.categoryName)}
								/>
								<span className="checkmark"></span>
							</label>
						);
					})}
			</div>
			<hr />
			<div className="u-margin-bottom-small"></div>

			<div className="filter-rating">
				<p className="p-md">Rating</p>
				<div className="u-margin-bottom-small"></div>
				<div className="u-margin-bottom-small"></div>

				<div className="slider-container">
					<div className="flex-row">
						<p className="slider-btn">1</p>
						<p className="slider-btn">2</p>
						<p className="slider-btn">3</p>
						<p className="slider-btn">4</p>
						<p className="slider-btn">5</p>
					</div>

					<input
						type="range"
						list="tickmarks"
						onChange={(e) =>
							filterDispatch({ type: 'RATING', payload: e.target.value })
						}
						min="1"
						max="5"
						step="1"
						className="slider"
					/>
				</div>
			</div>
		</div>
	);
}

export default FilterBar;
