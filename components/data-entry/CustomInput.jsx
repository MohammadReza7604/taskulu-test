import { Form, Input } from "antd";
import React from "react";
import classes from "./styles/CustomInput.module.css";

export const CustomInput = (props) => {
  return (
    <Form.Item
      className={classes.login_form}
      name={props.names}
      rules={props.rules}
    >
      <Input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
      />
    </Form.Item>
  );
};
