import { useEffect, useState } from "react";
import "./styles/index.scss";

interface Todo {
  done?: string;
  id: number;
  title: string;
}

const data: Todo[] = [
  { id: 1, title: "hello" },
  { id: 2, title: "hola" },
  { id: 3, title: "hiii" },
];

function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(data);
  }, []);

  const handleClick = (id: number, status: string) => {
    let prevTodos = [...todos];
    prevTodos[id - 1]["done"] = status;
    setTodos(prevTodos);
    // setTodos((prevTodos) =>
    //   prevTodos.map((todo) =>
    //     todo.id === id ? { ...todo, done: status } : todo
    //   )
    // );
  };

  return (
    <>
      <div className="todoListContainer">
        {todos?.map((item) => {
          return (
            <div key={item.id} className="todoItem">
              <div className="title">{item.title}</div>
              <input
                type="checkbox"
                checked={item.done === "done" ? true : false}
              />
              <button onClick={() => handleClick(item.id, "done")}>Done</button>
              <button onClick={() => handleClick(item.id, "notDone")}>
                Update
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ToDoList;
