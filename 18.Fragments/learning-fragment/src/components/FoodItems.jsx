import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
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
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
