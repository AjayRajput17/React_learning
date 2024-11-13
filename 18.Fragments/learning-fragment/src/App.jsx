import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Item from "./components/Item";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import {useState} from "react";
function App() {
  // let foodItems = [
  //   "Subzi",
  //   "Green Vegetable",
  //   "Roti",
  //   "Salate",
  //   "Milk",
  //   "Chikan",
  // ];

  // let textStateArr = useState();
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];


  let [foodItems , setfoodItems] = useState([]);
 



  const OnKeyDown = (event) =>{
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems,newFoodItem];
      event.target.value = "";
      setfoodItems(newItems)
      console.log("food value enter is "+ newFoodItem)
    }
    
  };
  return (
    // <React.Fragment>
    <>
    <Container>
       <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={OnKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>Above is list of health food</p>
      </Container> */}
      </>
    // </React.Fragment>

  );
}

export default App;
