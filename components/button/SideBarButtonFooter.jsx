import Text from "antd/lib/typography/Text";
import React from "react";

import classes from "./styles/SideBarButtonFooter.module.css";

export const SideBarButtonFooter = (props) => {
  return (
    <div className={classes.footer_btn}>
      {props.image}
      <Text>{props.text}</Text>
    </div>
  );
};
