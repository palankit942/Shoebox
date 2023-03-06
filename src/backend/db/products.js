import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    brand: "El Paso",
    title: "Women Solid Heeled Boots",
    price: "1000",
    rating: "4.9",
    prodImage: require("../../assets/boot_1.webp"),
    categoryName: "boot-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Twin Toes",
    title: "Women Heeled Boots",
    price: "599",
    rating: "2.5",
    prodImage: require("../../assets/boot_2.webp"),
    categoryName: "boot-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "DressBerry",
    title: "Women mid-top Boots",
    price: "799",
    rating: "3.4",
    prodImage: require("../../assets/boot_3.webp"),
    categoryName: "boot-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "El Paso",
    title: "Women Flat Boots",
    price: "999",
    rating: "4.2",
    prodImage: require("../../assets/boot_4.webp"),
    categoryName: "boot-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Delize",
    title: "Women Heeled Boots",
    price: "1299",
    rating: "1.5",
    prodImage: require("../../assets/boot_5.webp"),
    categoryName: "boot-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "El Paso",
    title: "Women mid-top Boots",
    price: "1499",
    rating: "3.9",
    prodImage: require("../../assets/boot_6.webp"),
    categoryName: "boot-f",
    inStock: false,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "London Steps",
    title: "Women Heeled Boots",
    price: "1500",
    rating: "4.5",
    prodImage: require("../../assets/boot_7.webp"),
    categoryName: "boot-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "El Paso",
    title: "Women High Heeled Boots",
    price: "899",
    rating: "1.9",
    prodImage: require("../../assets/boot_8.webp"),
    categoryName: "boot-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "DressBerry",
    title: "Women mid-top Boots",
    price: "1200",
    rating: "3.5",
    prodImage: require("../../assets/boot_9.webp"),
    categoryName: "boot-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Roadster",
    title: "Women Heeled Boots",
    price: "1399",
    rating: "2.5",
    prodImage: require("../../assets/boot_10.webp"),
    categoryName: "boot-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Twin Toes",
    title: "Women Colorblocked Sneakers",
    price: "799",
    rating: "4.1",
    prodImage: require("../../assets/casual_1f.webp"),
    categoryName: "casual-f",
    inStock: true,
    isFastDelivery: true
  },
  {
    _id: uuid(),
    brand: "DressBerry",
    title: "Women Solid Sneakers",
    price: "899",
    rating: "3.9",
    prodImage: require("../../assets/casual_2f.webp"),
    categoryName: "casual-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "H&M",
    title: "Women Tranies",
    price: "699",
    rating: "2.5",
    prodImage: require("../../assets/casual_3f.webp"),
    categoryName: "casual-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Shoetopia",
    title: "Women Woven Design",
    price: "1299",
    rating: "4.5",
    prodImage: require("../../assets/casual_4f.webp"),
    categoryName: "casual-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "London Rag",
    title: "Colorblocked Sneakers",
    price: "999",
    rating: "2.9",
    prodImage: require("../../assets/casual_5f.webp"),
    categoryName: "casual-f",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "U.S. Polo",
    title: "Men Sneakers",
    price: "899",
    rating: "3.5",
    prodImage: require("../../assets/casual_1.webp"),
    categoryName: "casual-m",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Roadster",
    title: "Men Sneakers",
    price: "1999",
    rating: "1.5",
    prodImage: require("../../assets/casual_2.webp"),
    categoryName: "casual-m",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Highlander",
    title: "Men Perforations Driving Shoes",
    price: "699",
    rating: "4.5",
    prodImage: require("../../assets/casual_3.webp"),
    categoryName: "casual-m",
    inStock: true,
    isFastDelivery: true
  },
  {
    _id: uuid(),
    brand: "H&M",
    title: "Men Woven Traines",
    price: "1299",
    rating: "4.1",
    prodImage: require("../../assets/casual_4.webp"),
    categoryName: "casual-m",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Roadster",
    title: "Men Sneakers",
    price: "999",
    rating: "3.9",
    prodImage: require("../../assets/casual_5.webp"),
    categoryName: "casual-m",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Adidas",
    title: "Men Walking Shoes",
    price: "1399",
    rating: "3.9",
    prodImage: require("../../assets/sports_1.webp"),
    categoryName: "sport-m",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Adidas",
    title: "Men Running Shoes",
    price: "1599",
    rating: "4.1",
    prodImage: require("../../assets/sports_2.webp"),
    categoryName: "sport-m",
    inStock: false,
    isFastDelivery: true
  },
  {
    _id: uuid(),
    brand: "HRX",
    title: "Men Core Running Shoes",
    price: "1299",
    rating: "4.5",
    prodImage: require("../../assets/sports_3.webp"),
    categoryName: "sport-m",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Red Tape",
    title: "Men Walking Shoes",
    price: "1999",
    rating: "3.5",
    prodImage: require("../../assets/sports_4.webp"),
    categoryName: "sport-m",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "CLYMB",
    title: "Men Running Sports Shoes",
    price: "899",
    rating: "4.2",
    prodImage: require("../../assets/sports_5.webp"),
    categoryName: "sport-m",
    inStock: true,
    isFastDelivery: true
  },
  {
    _id: uuid(),
    brand: "Sir Corbett",
    title: "Men Oxford Formal Shoes",
    price: "599",
    rating: "4.1",
    prodImage: require("../../assets/formal_1.webp"),
    categoryName: "formal-m",
    inStock: false,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Sir Corbett",
    title: "Formal Shoes",
    price: "999",
    rating: "2.5",
    prodImage: require("../../assets/formal_2.webp"),
    categoryName: "formal-m",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Sir Corbett",
    title: "Men Solid Derbys",
    price: "899",
    rating: "3.8",
    prodImage: require("../../assets/formal_3.webp"),
    categoryName: "formal-m",
    inStock: true,
    isFastDelivery: false
  },
  {
    _id: uuid(),
    brand: "Provogue",
    title: "Men Solid Formal Loafers",
    price: "799",
    rating: "4.5",
    prodImage: require("../../assets/formal_4.webp"),
    categoryName: "formal-m",
    inStock: true,
    isFastDelivery: true
  },
  {
    _id: uuid(),
    brand: "Liberty",
    title: "Men Solid Leather Formal Shoes",
    price: "699",
    rating: "3.5",
    prodImage: require("../../assets/formal_5.webp"),
    categoryName: "formal-m",
    inStock: true,
    isFastDelivery: false
  }
];
