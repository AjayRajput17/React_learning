import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {

  const [calVal,setCalVal] = useState("");
  
  const onButtonClick = (buttonText)=> {
   
    if(buttonText === 'C'){
      setCalVal("");
    } else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayvalue = calVal + buttonText;
      setCalVal(newDisplayvalue);
    }
  }


  return (
    <center>
      <div className={styles["calculator"]}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;
