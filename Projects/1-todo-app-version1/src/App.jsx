import AppName from "./Componant/AppName.jsx";
import AddTodo from "./Componant/AddTodo.jsx";
import TodoItem1 from "./Componant/TodoItem1.jsx";
import TodoItem2 from "./Componant/TodoItem2.jsx";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="items-container">
        <AddTodo></AddTodo>
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
