import Text from "antd/lib/typography/Text";
import React from "react";
import { BsPlusLg } from "react-icons/bs";
import classes from "./styles/BoardBox.module.css";

export const BoardBox = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.box_header}>
        <div className={classes.title_text}>
          <Text>(1)</Text>
          <Text>Todo</Text>
        </div>
        <BsPlusLg />
      </div>
      <div className={classes.cards}>{props.cards}</div>
    </div>
  );
};
