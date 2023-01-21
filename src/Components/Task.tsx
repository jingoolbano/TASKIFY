import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Todo } from "../modulw";

interface Props {
  todo: Todo;
  todoes: Todo[];
  setTodoes: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Task = ({ todo, todoes, setTodoes }: Props) => {
  const handleDone = (id: number) => {
    setTodoes(
      todoes.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoes(todoes.filter((task) => task.id !== id));
  };

  return (
    <div className="flex w-[100%] lg:w-[30%] rounded-md p-5 mt-4 bg-slate-200 items-center ">
      {todo.isDone ? (
        <s className="flex-1 p-1 text-lg">{todo.todo}</s>
      ) : (
        <span className="flex-1 p-1 text-lg">{todo.todo}</span>
      )}

      <div className="flex items-center">
        <span
          className="mr-2 cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        >
          <MdDelete />
        </span>
        <span className="cursor-pointer" onClick={() => handleDone(todo.id)}>
          <IoCheckmarkDoneSharp />
        </span>
      </div>
    </div>
  );
};

export default Task;
