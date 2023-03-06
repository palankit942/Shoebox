import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Casual (M)",
    categoryImage: require("../../assets/casual_1.webp"),
    categoryValue: "casual-m",
    description:
      "casual shoes for male",
  },
  {
    _id: uuid(),
    categoryName: "Formal (M)",
    categoryImage: require("../../assets/formal_1.webp"),
    categoryValue: "formal-m",
    description:
      "formal shoes for male",
  },
  {
    _id: uuid(),
    categoryName: "Sports (M)",
    categoryImage: require("../../assets/sports_1.webp"),
    categoryValue: "sport-m",
    description:
      "sports shoes for male",
  },
  {
    _id: uuid(),
    categoryName: "Casual (F)",
    categoryImage: require("../../assets/casual_1f.webp"),
    categoryValue: "casual-f",
    description:
      "casual shoes for female",
  },
  {
    _id: uuid(),
    categoryName: "Boots (F)",
    categoryImage: require("../../assets/boot_1.webp"),
    categoryValue: "boot-f",
    description:
      "boots for female",
  }
];
