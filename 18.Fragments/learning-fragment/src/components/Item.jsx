import style from "./Item.module.css";

const Item = ({ foodItem ,bought ,handleBuyButton }) => {
  // let { foodItem } = props;

  // const handleButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} Item being bought`)
  // }

  return (
    <li className={`${style["kg-item"]}  list-group-item  ${bought && "active"}`}>
      <span className={`${style["kg-span"]}`}>{foodItem}</span>
      <button   className={`${style.button} btn btn-info `}
   
      // onClick={handleButtonClicked}
      // onClick={(event) => handleButtonClicked(event)}
      onClick={handleBuyButton}
      >Buy</button>
    </li>
  );
};

export default Item;
