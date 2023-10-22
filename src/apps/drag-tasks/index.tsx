import { useState } from "react";
import "./styles/index.scss";
import { Task } from "./types/tasks-types";
import { MoveLeft, MoveRight } from "lucide-react";

let tasks = [
  { id: 1, text: "task A" },
  { id: 2, text: "task B" },
  { id: 3, text: "task C" },
  { id: 4, text: "task D" },
  { id: 5, text: "task E" },
  { id: 6, text: "task F" },
];

export default function DragTasks() {
  const [undoneTasks, setUndoneTasks] = useState<Task[]>(tasks);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);
  const [chkTasks, setChkTasks] = useState<Task[]>([]);
  let checkedTask: Task;

  const getCheckedItem = (_id: number, _case: string) => {
    if (_case === "u2d") {
      let checkedTasks = undoneTasks.filter((t) => t.id === _id);
      setChkTasks((tsks) => [...tsks, ...checkedTasks]);
    } else {
      let checkedTasks = doneTasks.filter((t) => t.id === _id);
      setChkTasks((tsks) => [...tsks, ...checkedTasks]);
    }
  };

  const moveUndoneToDone = () => {
    let newUndoneTasks: Task[] = undoneTasks.filter(
      (t) => !chkTasks.find((chktsk) => t.id === chktsk.id)
    );
    setUndoneTasks(newUndoneTasks);
    let newDoneTasks = [...doneTasks];
    newDoneTasks = [...newDoneTasks, ...chkTasks];
    setChkTasks([]);
    setDoneTasks(newDoneTasks);
    checkedTask = { id: 0, text: "" };
  };
  const moveDoneToDone = () => {
    let newDoneTasks = doneTasks.filter(
      (t) => !chkTasks.find((chktsk) => t.id === chktsk.id)
    );
    setDoneTasks(newDoneTasks);
    let newUndoneTasks = [...undoneTasks];
    newUndoneTasks = [...newUndoneTasks, ...chkTasks];
    setChkTasks([]);
    setUndoneTasks(newUndoneTasks);
    checkedTask = { id: 0, text: "" };
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="tasks">
            <h2>Undone Tasks</h2>
            {undoneTasks
              .sort((a, b) => a.id - b.id)
              .map((t) => {
                return (
                  <div className="task-box" key={t.id}>
                    <input
                      type="checkbox"
                      name={t.text}
                      value={t.text}
                      onChange={() => getCheckedItem(t.id, "u2d")}
                    />
                    <label htmlFor="">{t.text}</label>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="box">
          <div className="tasks">
            <div className="swap-buttons">
              <button className="move-btn right" onClick={moveUndoneToDone}>
                <MoveRight />
              </button>
              <button onClick={moveDoneToDone} className="move-btn left">
                <MoveLeft />
              </button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="tasks">
            <h2>Done Tasks</h2>
            {doneTasks
              .sort((a, b) => a.id - b.id)
              .map((t) => {
                return (
                  <div className="task-box" key={t?.id}>
                    <input
                      type="checkbox"
                      name={t?.text}
                      value={t?.text}
                      onChange={() => getCheckedItem(t.id, "d2u")}
                    />
                    <label htmlFor="">{t?.text}</label>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
