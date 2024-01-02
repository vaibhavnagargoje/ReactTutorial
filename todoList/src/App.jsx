import AddTodo from "./components/AddTodo";
import AppName from "./components/appName";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <hr />
      <div className="items-container">
        <TodoItem></TodoItem>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
