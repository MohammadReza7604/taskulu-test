import Text from "antd/lib/typography/Text";
import React from "react";
import { GoCalendar } from "react-icons/go";
import jMoment from "moment-jalaali";
import classes from "./styles/BoardCard.module.css";

export const BoardCard = (props) => {
  return (
    <div className={classes.box} onClick={props.onClick} status={props.status}>
      <div className={classes.task_title}>
        <Text>{props.taskTitle}</Text>
      </div>
      <div className={classes.task_date}>
        <GoCalendar />
        <Text>{jMoment(props.taskCreateDate).format("jYYYY/jM/jD")}</Text>
      </div>
    </div>
  );
};
