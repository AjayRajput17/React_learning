import { useState, useRef} from "react";
import style from "./AddTodo.module.css";
import { MdAddTask } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {

  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const {addNewItem} = useContext(TodoItemsContext);

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoname = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoname, dueDate);

  };

  return (
    <div className={`${style["item-input"]} container text-center `}>
      <form className="row kg-row" onSubmit={handleAddButton} >
            
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here"
            
            />
          </div>
          <div className="col-4">
            <input type="date"
            ref={dueDateElement}
          
             />
          </div>
          <div className="col-2">
            <button className="btn btn-success aj-button">
              <MdAddTask />
            </button>
          </div>
        
      </form>
    </div>
  );
}

export default AddTodo;
