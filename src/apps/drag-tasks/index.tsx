import { useState } from "react";
import "./styles/index.scss";
import { Task } from "./types/tasks-types";
import { MoveLeft, MoveRight } from "lucide-react";
import { TASKS } from "./types/tasks-constants";

export default function DragTasks() {
  const [undoneTasks, setUndoneTasks] = useState<Task[]>(TASKS);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);
  const [chkTasks, setChkTasks] = useState<Task[]>([]);

  const getCheckedItem = (_task: Task, _case: string) => {
    if (_case === "u2d") {
      let checkedTasks = undoneTasks.filter((t) => t.id === _task.id);
      setChkTasks((tsks) => [...tsks, ...checkedTasks]);
    } else {
      let checkedTasks = doneTasks.filter((t) => t.id === _task.id);
      setChkTasks((tsks) => [...tsks, ...checkedTasks]);
    }
  };

  const moveSelectedToDone = () => {
    chkTasks.forEach((t: Task) => {
      if (!doneTasks.includes(t)) {
        moveToDone(t);
      }
    });
  };
  const moveSelectedToUnDone = () => {
    chkTasks.forEach((t: Task) => {
      if (!undoneTasks.includes(t)) {
        moveToUnDone(t);
      }
    });
  };

  const moveToDone = (t: Task) => {
    setUndoneTasks((prevTasks) => prevTasks.filter((task) => task.id !== t.id));
    setDoneTasks((prevTasks) => [...prevTasks, t]);
    setChkTasks((prevTasks) => prevTasks.filter((task) => task.id !== t.id));
  };
  const moveToUnDone = (t: Task) => {
    setDoneTasks((prevTasks) => prevTasks.filter((task) => task.id !== t.id));
    setUndoneTasks((prevTasks) => [...prevTasks, t]);
    setChkTasks((prevTasks) => prevTasks.filter((task) => task.id !== t.id));
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
                      onChange={() => getCheckedItem(t, "u2d")}
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
              <button
                className="move-btn right"
                disabled={undoneTasks.length < 1}
                onClick={moveSelectedToDone}
              >
                <MoveRight />
              </button>
              <button
                onClick={moveSelectedToUnDone}
                disabled={doneTasks.length < 1}
                className="move-btn left"
              >
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
                      onChange={() => getCheckedItem(t, "d2u")}
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
