import AppName from "./Componant/AppName.jsx";
import AddTodo from "./Componant/AddTodo.jsx";
import TodoItems from "./Componant/TodoItems.jsx";
import WelcomeMessage from "./Componant/WelcomeMessage.jsx";
import { TodoItemsContext } from "./store/todo-items-store.jsx";
import "./App.css";
import { useState } from "react";
function App() {
  
  const [todoItems,setTodoItems] = useState([]);
  
  const addNewItem = (itemname, itemDueDate) =>{
    setTodoItems( (currValue) =>  [
      ...currValue,
        {name: itemname, dueDate: itemDueDate}
      ]);
  }

  const deleteItem = (todoItemName) => {
      const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
      setTodoItems(newTodoItems);
  }

  return (
  
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem
    }}>
    <center className="todo-container">
      <AppName></AppName> 
      <AddTodo></AddTodo>
      <WelcomeMessage></WelcomeMessage>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContext.Provider>
    
  );

}

export default App;
