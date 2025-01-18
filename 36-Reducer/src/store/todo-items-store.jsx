import { createContext } from "react";
import {  useReducer } from "react";
import "../App.css";


export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

function todoItemsReducer(currTodoItems, action) {
  let newTodoItem = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItems,
      { name: action.payload.itemname, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currTodoItems.filter(
      (item) => item.name !== action.payload.itemname
    );
  }

  return newTodoItem;
}

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemname, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemname,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemname: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return <TodoItemsContext.Provider
    value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}
  >
    {children}
  </TodoItemsContext.Provider>;
  
  
};

export default TodoItemsContextProvider;
