import { Button, Form, Input } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import React, { useState } from "react";
import { BackendUrls, BaseUrl, httpRequest } from "../../utils/backend-url";
import classes from "./styles/TaskCreate.module.css";

export const TaskCreate = (props) => {
  const [form] = Form.useForm();
  const token = Cookies.get("token");
  const [showTaskCreateBox, setShowTaskCreateBox] = useState(false);
  const finishFormHandler = () => {
    const params = {
      name: form.getFieldsValue().name,
      explain: "aaa",
      created: moment().format("YYYY-MM-DD"),
      status: props.status,
      listt: 21,
    };
    console.log(params);

    httpRequest(BackendUrls.task, "POST", params).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <Form form={form} onFinish={finishFormHandler}>
      <Form.Item name="name">
        <div className={classes.wrapper}>
          <Input placeholder="عنوان کار" type={"text"} name="name" />
          <div className={classes.buttons}>
            <Button type="primary" htmlType="submit" size="small">
              ذخیره
            </Button>
            <Button size="small" type="text">
              لغو
            </Button>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};
