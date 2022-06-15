import React from "react";
import "antd/dist/antd.css";
import classes from "../styles/project-page.module.css";
import { BoardHeader } from "../../components/layout/BoardHeader";
import { SideBar } from "../../components/layout/SideBar";
import { Project } from "../../components/auth/Project";

const TaskPage = () => {
  return (
    <div className={classes.wrapper}>
      <SideBar />
      <div className={classes.task}>
        <BoardHeader />
        <Project />
      </div>
    </div>
  );
};
export default TaskPage;
