import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";


const TodoItems = () => {

  const {todoItems} = useContext(TodoItemsContext);

  return (
    <div className={styles["items-container"]}>
      {todoItems.map((itme) => (
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
