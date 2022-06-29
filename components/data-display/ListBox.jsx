import React, { useState } from "react";
import { TaskModal } from "../feedback/TaskModal";
import { BoardCard } from "./BoardCard";
import classes from "./styles/ListBox.module.css";
import { TaskCreate } from "./TaskCreate";
import { TaskList } from "./TaskList";

export const ListBox = (props) => {
  const [show, setShow] = useState({ visible: false, status: 0 });
  const [visible, setVisible] = useState(false);

  return (
    <div className={classes.box}>
      <TaskList
        statusName={"Todo"}
        cards={
          <>
            {props.dos.map((item) => {
              return (
                item.status === 1 && (
                  <BoardCard
                    taskTitle={item.name}
                    taskCreateDate={item.created}
                    onClick={() => setVisible(true)}
                  />
                )
              );
            })}

            {show.status === 1 && (
              <TaskCreate
                status={1}
                listId={props.listId}
                showBox={true}
                setUpdate={props.setUpdate}
                onClick={() => setVisible(true)}
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
            {props.dos.map((item) => {
              return (
                item.status === 2 && (
                  <BoardCard
                    taskTitle={item.name}
                    taskCreateDate={item.created}
                    onClick={() => setVisible(true)}
                  />
                )
              );
            })}
            {show.status === 2 && (
              <TaskCreate
                status={2}
                listId={props.listId}
                showBox={true}
                setUpdate={props.setUpdate}
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
            {props.dos.map((item) => {
              return (
                item.status === 3 && (
                  <BoardCard
                    taskTitle={item.name}
                    taskCreateDate={item.created}
                    onClick={() => setVisible(true)}
                  />
                )
              );
            })}
            {show.status === 3 && (
              <TaskCreate
                status={3}
                listId={props.listId}
                showBox={true}
                setUpdate={props.setUpdate}
              />
            )}
          </>
        }
        onClick={() => setShow({ visible: true, status: 3 })}
      />
      <TaskModal visible={visible} setVisible={setVisible} />
    </div>
  );
};
