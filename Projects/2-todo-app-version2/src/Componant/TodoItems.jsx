import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
console.log(styles.itemsContainer);
const TodoItems = ({ todoitems }) => {
  return (
    <div className={styles["items-container"]}>
      {todoitems.map((itme) => (
        <TodoItem
          key={itme.name}
          todoName={itme.name}
          todoDate={itme.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
