import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Item from "./components/Item";
import "./App.css";
function App() {
  let foodItems = [
    "Subzi",
    "Green Vegetable",
    "Roti",
    "Salate",
    "Milk",
    "Chikan",
  ];
  return (
    // <React.Fragment>
    <>
      <h1 className="food-heading">Healthy Food</h1>

      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
    // </React.Fragment>
  );
}

export default App;
