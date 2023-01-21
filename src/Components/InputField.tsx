import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleGo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleGo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex items-center relative w-[90%] "
      onSubmit={(e) => {
        handleGo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task ..."
        className="w-full rounded-[50px] p-[20px] text-2xl transition-all duration-500 border-none focus:outline-none"
      />
      <button
        type="submit"
        className="absolute w-[50px] h-[50px] m-3 rounded-[50px] right-0 border-none text-[15px] bg-slate-500 text-white transition-all duration-500 hover:bg-slate-700 active:transform active:scale-75"
      >
        GO
      </button>
    </form>
  );
};

export default InputField;
