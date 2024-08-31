import style from "./Item.module.css";

const Item = (props) => {
  let { foodItem } = props;

  return (
    <li className={`${style["kg-item"]}  list-group-item`}>
      <span className={`${style["kg-span"]}`}>{foodItem}</span>
    </li>
  );
};

export default Item;
