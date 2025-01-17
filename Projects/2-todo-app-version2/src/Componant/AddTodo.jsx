import { useState, useRef} from "react";
import style from "./AddTodo.module.css";
import { MdAddTask } from "react-icons/md";

function AddTodo({ onNewItem }) {

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const [todoname, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
    
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
    
  // };

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoname = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoname, dueDate);

    // setDueDate("");
    // setTodoName("");

  };

  return (
    <div className={`${style["item-input"]} container text-center `}>
      <form className="row kg-row" onSubmit={handleAddButton} >
            
          <div className="col-6">
            <input
              type="text"
              ref={todoNameElement}
              placeholder="Enter Todo Here"
              // value={todoname}
              // onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date"
            ref={dueDateElement}
            // value={dueDate} 
            // onChange={handleDateChange} 
             />
          </div>
          <div className="col-2">
            <button
              // type="button"
              className="btn btn-success aj-button"
              // onClick={handleAddButton}

              
            >
              <MdAddTask />
            </button>
          </div>
        
      </form>
    </div>
  );
}

export default AddTodo;
