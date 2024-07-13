import I1 from "../img/IceCream/i1.png";
import F1 from "../img/Fruits/f1.png";
import C3 from "../img/Curry/c3.png";
import Fi1 from "../img/Fish/fi1.png";

import c1 from '../img/Curry/c1.png'
import c2 from '../img/Curry/c2.png'
import c3 from '../img/Curry/c3.png'
import c4 from '../img/Curry/c4.png'
import c6 from '../img/Curry/c6.png'
import c7 from '../img/Curry/c7.png'

import cu1 from '../img/Curry/cu1.png'
import cu2 from '../img/Curry/cu2.png'
import cu3 from '../img/Curry/cu3.png'
import cu4 from '../img/Curry/cu4.png'
import cu5 from '../img/Curry/cu5.png'
import cu6 from '../img/Curry/cu6.png'

import d1 from '../img/Drinks/d1.png'
import d2 from '../img/Drinks/d2.png'
import d3 from '../img/Drinks/d3.png'
import d4 from '../img/Drinks/d4.png'
import d5 from '../img/Drinks/d5.png'
import d6 from '../img/Drinks/d6.png'
import d7 from '../img/Drinks/d7.png'
import d8 from '../img/Drinks/d8.png'

import fi1 from '../img/Fish/fi1.png'
import fi2 from '../img/Fish/fi2.png'
import fi3 from '../img/Fish/fi3.png'
import fi4 from '../img/Fish/fi4.png'
import fi5 from '../img/Fish/fi5.png'

import r1 from '../img/Rice/r1.png'
import r2 from '../img/Rice/r2.png'
import r3 from '../img/Rice/r3.png'
import r4 from '../img/Rice/r4.png'
import r5 from '../img/Rice/r5.png'

import f1 from '../img/Fruits/f1.png'
import f2 from '../img/Fruits/f2.png'
import f3 from '../img/Fruits/f3.png'
import f4 from '../img/Fruits/f4.png'
import f5 from '../img/Fruits/f5.png'
import f6 from '../img/Fruits/f6.png'
import f7 from '../img/Fruits/f7.png'
import f8 from '../img/Fruits/f8.png'
import f9 from '../img/Fruits/f9.png'
import f10 from '../img/Fruits/f10.png'

import i1 from '../img/IceCream/i1.png'
import i2 from '../img/IceCream/i2.png'
import i3 from '../img/IceCream/i3.png'
import i4 from '../img/IceCream/i4.png'
import i5 from '../img/IceCream/i5.png'
import i6 from '../img/IceCream/i6.png'
import i7 from '../img/IceCream/i7.png'


export const heroData = [
  {
    id: 1,
    name: "Icecream",
    decp: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh Strawberries",
    price: "10.25",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    decp: "Mixed Kebab Plate",
    price: "8.25",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: Fi1,
  },
];

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "Chicken",
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "Curry",
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "Rice",
  },
  {
    id: 4,
    name: "Fish",
    urlParamName: "Fish",
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "Fruits",
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "IceCreams",
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "Drinks",
  },
];

export const foodItemsData = [
  {
      category: "Chicken",
      imageURL: c1,
      title: "Chicken Manchurian",
      calories: 65,
      price: 10
  },
  {
      category: "Chicken",
      imageURL: c2,
      title: "Chicken 65",
      calories: 80,
      price: 120
  },
  {
      category: "Chicken",
      imageURL: c3,
      title: "Chicken Kebab",
      calories: 85,
      price: 12
  },
  {
      category: "Chicken",
      imageURL: c4,
      title: "Roasted Chicken",
      calories: 65,
      price: 85
  },
  {
      category: "Chicken",
      imageURL: c6,
      title: "Chicken Kebab Plate",
      calories: 65,
      price: 10
  },
  {
      category: "Chicken",
      imageURL: c7,
      title: "ItemName",
      calories: 20,
      price: "Item Price"

  },

  {

      category: "Curry",
      imageURL: cu1,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Curry",
      imageURL: cu2,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Curry",
      imageURL: cu3,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Curry",
      imageURL: cu4,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Curry",
      imageURL: cu5,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Curry",
      imageURL: cu6,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },


  {
      category: "Drinks",
      imageURL: d1,
      title: "Red Bull",
      calories: 20,
      price: 40
  },
  {
      category: "Drinks",
      imageURL: d2,
      title: "Pepsi",
      calories: 20,
      price: 30
  },
  {
      category: "Drinks",
      imageURL: d3,
      title: "Monster",
      calories: 20,
      price: 60
  },
  {
      category: "Drinks",
      imageURL: d4,
      title: "Cocktail",
      calories: 60,
      price: 80
  },
  {
      category: "Drinks",
      imageURL: d5,
      title: "Sprite",
      calories: 45,
      price: 30
  },
  {
      category: "Drinks",
      imageURL: d6,
      title: "Fanta",
      calories: 45,
      price: 30
  },
  {
      category: "Drinks",
      imageURL: d7,
      title: "Mango Shake",
      calories: 20,
      price: 20
  },
  {
      category: "Drinks",
      imageURL: d8,
      title: "Coka Cola",
      calories: 20,
      price: 30
  },


  {
      category: "Fish",
      imageURL: fi1,
      title: "Fish Kebab",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Fish",
      imageURL: fi2,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Fish",
      imageURL: fi3,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Fish",
      imageURL: fi4,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Fish",
      imageURL: fi5,
      title: "ItemName",
      calories: 20,
      price: "Item Price"

  },

  {
      category: "Rice",
      imageURL: r1,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Rice",
      imageURL: r2,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Rice",
      imageURL: r3,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Rice",
      imageURL: r4,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Rice",
      imageURL: r5,
      title: "ItemName",
      calories: 20,
      price: "Item Price"

  },

  {
      category: "Fruits",
      imageURL: f1,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Fruits",
      imageURL: f2,
      title: "Pineapple",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Fruits",
      imageURL: f3,
      title: "Blue Berries",
      calories: 80,
      price: 200
  },
  {
      category: "Fruits",
      imageURL: f4,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Fruits",
      imageURL: f5,
      title: "Strawberries",
      calories: 80,
      price: 12
  },
  {
      category: "Fruits",
      imageURL: f6,
      title: "Pomegranate",
      calories: 120,
      price: 15
  },
  {
      category: "Fruits",
      imageURL: f7,
      title: "Rasperry",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "Fruits",
      imageURL: f8,
      title: "Cherry",
      calories: 65,
      price: 80
  },
  {
      category: "Fruits",
      imageURL: f9,
      title: "Bananas",
      calories: 20,
      price: "50/Kg"
  },
  {
      category: "Fruits",
      imageURL: f10,
      title: "Watermelon",
      calories: "30 Per 100 grams",
      price: "Item Price"
  },


  {
      category: "IceCream",
      imageURL: i1,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "IceCream",
      imageURL: i2,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "IceCream",
      imageURL: i3,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "IceCream",
      imageURL: i4,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "IceCream",
      imageURL: i5,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "IceCream",
      imageURL: i6,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },
  {
      category: "IceCream",
      imageURL: i7,
      title: "ItemName",
      calories: 20,
      price: "Item Price"
  },

]