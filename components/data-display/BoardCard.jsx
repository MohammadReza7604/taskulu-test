import Text from "antd/lib/typography/Text";
import React from "react";
import { GoCalendar } from "react-icons/go";
import classes from "./styles/BoardCard.module.css";

export const BoardCard = () => {
  return (
    <div className={classes.box}>
      <div className={classes.task_title}>
        <Text>Task</Text>
      </div>
      <div className={classes.task_date}>
        <GoCalendar />
        <Text>8 اردیبهشت</Text>
      </div>
    </div>
  );
};
