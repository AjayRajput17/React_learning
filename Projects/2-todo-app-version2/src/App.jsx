import AppName from "./Componant/AppName.jsx";
import AddTodo from "./Componant/AddTodo.jsx";
import TodoItems from "./Componant/TodoItems.jsx";

import "./App.css";
function App() {
  const todoitems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go to collage",
      dueDate: "4/10/23",
    },
    {
      name: "Like this Video",
      dueDate: "4/10/23",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoitems={todoitems}></TodoItems>
    </center>
  );
}

export default App;
