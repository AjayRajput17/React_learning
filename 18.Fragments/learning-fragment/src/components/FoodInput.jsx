import styles from "./FoodInput.module.css";

const FoodInput =({handleKeyDown})=>{

        // const handleOnChange = (event) => {
        //     console.log(event.target.value)
        // }

        return < input type="text" placeholder="Enter Food Item Here" 
        className={styles.foodInput}
        // onChange={(event) =>console.log(event.target.value)}
        onKeyDown={ handleKeyDown}
        
        />
}

export default FoodInput