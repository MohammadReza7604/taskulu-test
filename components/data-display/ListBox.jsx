import React, { useEffect, useState } from "react";
import { BackendUrls, httpRequest } from "../../utils/backend-url";
import { BoardCard } from "./BoardCard";
import classes from "./styles/ListBox.module.css";
import { TaskCreate } from "./TaskCreate";
import { TaskList } from "./TaskList";

export const ListBox = (props) => {
  const [show, setShow] = useState({ visible: false, status: 0 });
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    httpRequest(BackendUrls.task, "GET").then((res) => {
      setTaskList(res.data);
    });
  }, []);
  return (
    <div className={classes.box}>
      <TaskList
        statusName={"Todo"}
        cards={
          <>
            <BoardCard status={1} />
            {show.status === 1 && (
              <TaskCreate
                status={1}
                listId={props.listId}
                onClick={() => setShow(false)}
              />
            )}
          </>
        }
        onClick={() => setShow({ visible: true, status: 1 })}
      />
      <TaskList
        statusName={"Doing"}
        cards={
          <>
            <BoardCard />
            {show.status === 2 && (
              <TaskCreate
                status={1}
                listId={props.listId}
                onClick={() => setShow(false)}
              />
            )}
          </>
        }
        onClick={() => setShow({ visible: true, status: 2 })}
      />
      <TaskList
        statusName={"Done"}
        cards={
          <>
            <BoardCard />
            {show.status === 3 && (
              <TaskCreate
                status={1}
                listId={props.listId}
                onClick={() => setShow(false)}
              />
            )}
          </>
        }
        onClick={() => setShow({ visible: true, status: 3 })}
      />
    </div>
  );
};
