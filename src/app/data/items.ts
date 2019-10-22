import {Item} from './item.interface';


export const ITEMS: Item[] = [
  {name: "Trinity Force", as: 40, movement: 5, flatMovement: 10, price: 3733, img: "Trinity_Force_item.png"},
  {name: "Wit's end", as: 50, movement: 5, flatMovement: 0, price: 2900, img: "Wits_End_item.png"},
  {name: "Runaan's Hurricane", as: 40, movement: 7, flatMovement: 0, price: 2600, img: "Runaans_Hurricane_item.png"},
  {name: "Phantom Dancer", as: 30, movement: 12, flatMovement: 0, price: 2600, img: "Phantom_Dancer_item.png"},
  {name: "Rapid Firecannon", as: 30, movement: 5, flatMovement: 0, price: 2600, img: "Rapid_Firecannon_item.png"},
  {name: "Statikk Shiv", as: 40, movement: 5, flatMovement: 0, price: 2600, img: "Statikk_Shiv_item.png"},
  {name: "Guinsoo's Rageblade", as: 73, movement: 0, flatMovement: 0, price: 3100, img: "Guinsoos_Rageblade_item.png"},
  {name: "Zz'Rot Portal", as: 0, movement: 20, flatMovement: 0, price: 2700, img: "ZzRot_Portal_item.png"},
  {name: "Righteous Glory", as:0, movement: 75, flatMovement: 0, price: 2650, img: "Righteous_Glory_item.png"},
];

export const BOOTS: Item[] = [
  {name: "Berserker's Greaves", as: 35, movement: 0, flatMovement: 45, price: 1100, img: "Berserkers_Greaves_item.png"},
  {name: "Boots of Swiftness", as:0, movement:0, flatMovement: 55, price: 900, img: "Boots_of_Swiftness_item.png"}
];

ITEMS.forEach( i => {
  i.img = "assets/img/" + i.img;
});
BOOTS.forEach( i => {
  i.img = "assets/img/" + i.img;
});

