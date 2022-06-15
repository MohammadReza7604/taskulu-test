import React from "react";
import { Board } from "../components/auth/Board";
import { BoardHeader } from "../components/layout/BoardHeader";
import { SideBar } from "../components/layout/SideBar";
import classes from "./styles/task-page.module.css";
import "antd/dist/antd.css";

const TaskPage = () => {
  return (
    <div className={classes.wrapper}>
      <SideBar />
      <div className={classes.task}>
        <BoardHeader />
        <Board />
      </div>
    </div>
  );
};
export default TaskPage;
