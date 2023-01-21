import React from "react";
import { Todo } from "../modulw";
import Task from "./Task";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="flex flex-wrap justify-evenly w-[90%] p-5">
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} todoes={todos} setTodoes={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
