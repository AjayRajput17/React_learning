import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Item from "./Item";
const FoodItems = ({ items }) => {
  // let foodItems = [
  //   "Dal",
  //   "Green Vegetable",
  //   "Roti",
  //   "Salate",
  //   "Milk",
  //   "Chikan",
  // ];
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item,event) =>{
    let newItems = [...activeItems,item];
    setActiveItems(newItems);

  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} 
        bought={activeItems.includes(item)}
        handleBuyButton={(event) => onBuyButton(item,event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
