import AppName from "./Componant/AppName.jsx";
import AddTodo from "./Componant/AddTodo.jsx";
import TodoItems from "./Componant/TodoItems.jsx";
import WelcomeMessage from "./Componant/WelcomeMessage.jsx";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store.jsx";



function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
