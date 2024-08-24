import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";

function App() {
  let foodItems = [
    "Dal",
    "Green Vegetable",
    "Roti",
    "Salate",
    "Milk",
    "Chikan",
  ];
  return (
    // <React.Fragment>
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
    // </React.Fragment>
  );
}

export default App;
