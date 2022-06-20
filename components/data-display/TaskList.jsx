import Text from "antd/lib/typography/Text";
import React from "react";
import { BsPlusLg } from "react-icons/bs";
import classes from "./styles/TaskList.module.css";

export const TaskList = (props) => {
  return (
    <>
      <div className={classes.box_header}>
        <div className={classes.title_text}>
          {/* <Text>({props.numberOfCards})</Text> */}
          <Text>{props.statusName}</Text>
        </div>
        <BsPlusLg onClick={props.onClick} />
      </div>
      <div className={classes.cards}>{props.cards}</div>
    </>
  );
};
