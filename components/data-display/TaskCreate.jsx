import { Button, Form, Input } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { BackendUrls, httpRequest } from "../../utils/backend-url";
import classes from "./styles/TaskCreate.module.css";

export const TaskCreate = (props) => {
  const [form] = Form.useForm();
  const [showTaskCreateBox, setShowTaskCreateBox] = useState(props.showBox);
  const finishFormHandler = () => {
    const params = {
      name: form.getFieldsValue().name,
      explain: "description",
      created: moment().format("YYYY-MM-DD"),
      status: props.status,
      listt: props.listId,
    };
    httpRequest(BackendUrls.task, "POST", params)
      .then((res) => {
        console.log(res.data);
      })
      .finally(() => {
        setShowTaskCreateBox(false);
      });
  };
  return (
    <>
      {showTaskCreateBox && (
        <Form form={form} onFinish={finishFormHandler}>
          <div className={classes.wrapper}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "این فیلد الزامی است" }]}
            >
              <Input placeholder="عنوان کار" type={"text"} name="name" />
            </Form.Item>
            <div className={classes.buttons}>
              <Button type="primary" htmlType="submit" size="small">
                ذخیره
              </Button>
              <Button
                size="small"
                type="text"
                onClick={() => setShowTaskCreateBox(false)}
              >
                لغو
              </Button>
            </div>
          </div>
        </Form>
      )}
    </>
  );
};
