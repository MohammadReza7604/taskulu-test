import { Input, message } from "antd";
import React, { useState } from "react";
import { BoardCard } from "./BoardCard";
import classes from "./styles/ListBox.module.css";
import { TaskCreate } from "./TaskCreate";
import { TaskList } from "./TaskList";

export const ListBox = (props) => {
  const [showTaskCreateBoxTodo, setShowTaskCreateBoxTodo] = useState(false);
  const [showTaskCreateBoxDoing, setShowTaskCreateBoxDoing] = useState(false);
  const [showTaskCreateBoxDone, setShowTaskCreateBoxDone] = useState(false);

  return (
    <div className={classes.box}>
      <TaskList
        statusName={"Todo"}
        numberOfCards={2}
        cards={
          <>
            <BoardCard />
            {showTaskCreateBoxTodo && <TaskCreate status={1} />}
          </>
        }
        onClick={() => setShowTaskCreateBoxTodo(true)}
      />
      <TaskList
        statusName={"Doing"}
        numberOfCards={2}
        cards={
          <>
            <BoardCard />
            {showTaskCreateBoxDoing && <TaskCreate status={2} />}
          </>
        }
        onClick={() => setShowTaskCreateBoxDoing(true)}
      />
      <TaskList
        statusName={"Done"}
        numberOfCards={2}
        cards={
          <>
            <BoardCard />
            {showTaskCreateBoxDone && <TaskCreate status={3} />}
          </>
        }
        onClick={() => setShowTaskCreateBoxDone(true)}
      />
    </div>
  );
};
