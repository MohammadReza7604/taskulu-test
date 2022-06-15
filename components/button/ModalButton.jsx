import React from "react";
import { Button } from "antd";
import Text from "antd/lib/typography/Text";
import classes from "./styles/ModalButton.module.css";

export const ModalButton = (props) => {
  return (
    <Button
      type="text"
      className={[classes.modal_btn, props.className].join(" ")}
    >
      {props.image}
      <Text>{props.text}</Text>
    </Button>
  );
};
