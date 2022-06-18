import Text from "antd/lib/typography/Text";
import React from "react";
import classes from "./styles/SideBarButton.module.css";

export const SideBarButton = (props) => {
  return (
    <div type="text" className={classes.sidebar_btn}>
      {props.image}
      <Text>{props.text}</Text>
    </div>
  );
};
