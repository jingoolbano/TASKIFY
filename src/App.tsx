import "./App.css";
import InputField from "./Components/InputField";
import { useState } from "react";
import { Todo } from "./modulw";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleGo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex  flex-col items-center">
      <h1 className="text-white text-2xl md:text-4xl my-5 md:my-8 z-10 ">
        TASKIFY
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleGo={handleGo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
