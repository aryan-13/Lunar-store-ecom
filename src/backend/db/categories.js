import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Shirts",
    image: "https://res.cloudinary.com/difqzsduz/image/upload/v1647713860/Lunar%20store/shirts_rbqvvb.png"

  },
  {
    _id: uuid(),
    categoryName: "Bottoms",
    image: "https://res.cloudinary.com/difqzsduz/image/upload/v1647713859/Lunar%20store/bottoms_wyvjx6.png"

  },
  {
    _id: uuid(),
    categoryName: "Tshirts",
    image: "https://res.cloudinary.com/difqzsduz/image/upload/v1647713861/Lunar%20store/tee_uvwq1g.png"

    
  },
  {
    _id: uuid(),
    categoryName: "Jackets",
    image: "https://res.cloudinary.com/difqzsduz/image/upload/v1647713860/Lunar%20store/outerwear_sdxg4u.png"
    
  },
];
