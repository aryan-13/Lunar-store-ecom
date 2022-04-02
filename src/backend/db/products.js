import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		// TSHIRTS
		_id: uuid(),

		name: 'Nob Head Oversized T-Shirt',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/12/25155136/Bonkerscorner_jaded_love_co-ord_set_63-1024x1536.jpg',
		price: 999,
		category: 'tshirt',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Untamed Faded Effect Oversized T-Shirt',
		image:
			'https://assets.bonkerscorner.com/uploads/2022/01/24122640/Bonkerscorner_Untamed_leopard_faded_oversized_tshirt_02-1200x1800.jpg',
		price: 999,
		category: 'tshirt',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Motordrip Faded Effect Oversized T-shirt',
		image:
			'https://assets.bonkerscorner.com/uploads/2022/01/23160759/Bonkerscorner_Motordrip_oversized_tshirt_55-1200x1800.jpg',
		price: 999,
		category: 'tshirt',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Signature Baller Oversized Jersey Set',
		image:
			'https://assets.bonkerscorner.com/uploads/2022/01/23110952/Bonkerscorner_signature_baller_oversized_jersey_set_36-1200x1800.jpg',
		price: 999,
		category: 'tshirt',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	// BOTTOMS
	{
		_id: uuid(),

		name: 'Jade Joggers',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/08/07090219/Bonkerscorner_Jade_jogger%E2%80%99s0721-1200x1800.jpg',
		price: 999,
		category: 'bottoms',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Little Snitch Black Joggers',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/08/17140232/SAYA0410-1200x1800.jpg',
		price: 999,
		category: 'bottoms',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Maroon Utility Straight Fit Pants',
		image:
			'https://assets.bonkerscorner.com/uploads/2022/01/11120251/Bonkerscorner_maroon_utility_pants_179-1200x1800.jpg',
		price: 999,
		category: 'bottoms',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Black Utility Straight Fit Pant',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/04/06121639/Bonkerscorner_-Blackpant_4-1200x1800.jpg',
		price: 999,
		category: 'bottoms',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	// JACKETS
	{
		_id: uuid(),

		name: 'Matcha Oversized Zipper',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/12/25155136/Bonkerscorner_jaded_love_co-ord_set_63-1024x1536.jpg',
		price: 999,
		category: 'jacket',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Brown Oversized Zipper',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/12/25155136/Bonkerscorner_jaded_love_co-ord_set_63-1024x1536.jpg',
		price: 999,
		category: 'jacket',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Black Oversized Zipper',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/12/25155136/Bonkerscorner_jaded_love_co-ord_set_63-1024x1536.jpg',
		price: 999,
		category: 'jacket',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Black Oversized Shacket',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/12/25155136/Bonkerscorner_jaded_love_co-ord_set_63-1024x1536.jpg',
		price: 999,
		category: 'jacket',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	// SHIRTS
	{
		_id: uuid(),

		name: 'Green Plaid Flannel Oversized Shirt',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/12/25155136/Bonkerscorner_jaded_love_co-ord_set_63-1024x1536.jpg',
		price: 999,
		category: 'shirt',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Beige Plaid Flannel Oversized Shirt',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/12/25155136/Bonkerscorner_jaded_love_co-ord_set_63-1024x1536.jpg',
		price: 999,
		category: 'shirt',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Black & White Checkered Plaid Oversized Shirt',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/12/25155136/Bonkerscorner_jaded_love_co-ord_set_63-1024x1536.jpg',
		price: 999,
		category: 'shirt',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		_id: uuid(),

		name: 'Dark Navy Blue Checkered Plaid Oversized Shirt',
		image:
			'https://assets.bonkerscorner.com/uploads/2021/12/25155136/Bonkerscorner_jaded_love_co-ord_set_63-1024x1536.jpg',
		price: 999,
		category: 'shirt',
		discountPercentage: '30%',
		discountPrice: 699,
		inStock: true,
		rating: 3.9,
		desc: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
];
