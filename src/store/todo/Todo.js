import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAsyncTodos,
  getAsyncTodos,
  editAsyncTodos,
  deleteAsyncTodos,
} from "./todoReduser";
import { MdDelete } from "react-icons/md";

function Todo() {
  const [valueTodo, setValueTodo] = useState("");
  const { todos, loading, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  const toggleTodo = (item) => {
    dispatch(
      editAsyncTodos({
        id: item.id,
        compeleted: !item.compeleted,
        todo: item.todo,
      })
    );
  };

  const renderTodo = () => {
    let value = "";

    if (todos) {
      value = todos.map((item) => (
        <div
          key={item.id}
          onClick={() => toggleTodo(item)}
          className={`cursor-pointer select-none flex justify-between items-center bg-yellow-400 mb-3 px-4 py-2 rounded-md w-full ${
            item.compeleted && "bg-gray-600 text-white"
          }`}
        >
          <p className="text-2xl">{item.todo}</p>
          {item.compeleted && (
            <p className="text-xl italic font-bold">Successed</p>
          )}
          <MdDelete
            size="30px"
            onClick={() => dispatch(deleteAsyncTodos({ id: item.id }))}
          />
        </div>
      ));
    } else if (loading) {
      value = <p>loading...</p>;
    } else if (error) {
      value = <p>{error}</p>;
    }

    return value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAsyncTodos(valueTodo));
    setValueTodo("");
  };

  return (
    <div className="h-full w-[100vw] px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white ">
      <div>
        <h1 className="text-5xl text-center italic font-bold border-b pb-3 mb-5">
          Todos
        </h1>
        {renderTodo()}
        <hr />
      </div>
      <form onSubmit={handleSubmit} className="mt-6">
        <h1 className="text-4xl italic font-bold  pb-3 mb-2">Add todo</h1>
        <input
          value={valueTodo}
          required
          onChange={(e) => setValueTodo(e.target.value)}
          className="w-[220px] text-black px-2 py-1 text-xl outline-none border-none rounded-md shadow-sm shadow-black transition-all duration-150 mr-28 ring-offset-2 focus:ring-2 ring-blue-600 "
          placeholder="add todo"
        />
        <button
          type="submit"
          className="w-[180px] bg-blue-700 h-[32px] px-2 py-1 text-lg text-center shadow-sm shadow-black transition-all duration-200 rounded hover:bg-purple-700 hover:scale-105"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Todo;
