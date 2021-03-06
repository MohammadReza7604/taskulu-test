import React from "react";
import { Button, Form, Input, message, Spin, Typography } from "antd";
import { ListBox } from "../data-display/ListBox";
import classes from "./styles/ProjectLists.module.css";
import { BackendUrls, httpRequest } from "../../utils/backend-url";
import { GoPlus } from "react-icons/go";

const { Text } = Typography;
export const ProjectLists = (props) => {
  const [form] = Form.useForm();
  const finishFormHandler = () => {
    const params = {
      name: form.getFieldsValue().name,
      project: props.projectId,
    };
    httpRequest(BackendUrls.list, "POST", params)
      .then((res) => {
        form.resetFields();
        props.setUpdate((r) => !r);
      })
      .catch((error) => {
        error.response.data
          ? message.error(error.response.data.detail)
          : message.error("خطایی رخ داده است");
      });
  };

  return (
    <div className={classes.main}>
      {props.loading ? (
        <Spin spinning={props.loading} tip="درحال بارگذاری..." />
      ) : props.lists === undefined ? (
        []
      ) : (
        props.lists.map((item) => {
          return (
            <div className={classes.board}>
              <div className={classes.header}>
                <Text>{item.name}</Text>
              </div>
              <div className={classes.body}>
                <ListBox
                  listId={item.id}
                  dos={item.dos}
                  taskLists={props.lists}
                  setUpdate={props.setUpdate}
                />
              </div>
            </div>
          );
        })
      )}
      <Form form={form} onFinish={finishFormHandler}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "پرکردن فیلد الزامی است" }]}
        >
          <div className={classes.new_list_box}>
            <Input type="text" placeholder="ایجاد لیست جدید" name="name" />
            <Button
              type="text"
              htmlType="submit"
              size="large"
              icon={<GoPlus />}
            />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
