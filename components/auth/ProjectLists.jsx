import React from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { BoardCard } from "../data-display/BoardCard";
import { ListBox } from "../data-display/ListBox";
import classes from "./styles/Board.module.css";
import axios from "axios";
import { BackendUrls, BaseUrl } from "../../utils/backend-url";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { TaskModal } from "../feedback/TaskModal";

const { Text } = Typography;
export const ProjectLists = (props) => {
  const [form] = Form.useForm();
  const token = Cookies.get("token");
  const [showTaskBox, setShowTaskBox] = useState(false);
  const [update, setUpdate] = useState(true);
  const [lists, setLists] = useState([]);
  const finishFormHandler = () => {
    const params = {
      name: form.getFieldsValue().name,
      project: props.projectId,
    };
    httpRequest(BackendUrls.list, "POST", params)
      .then((res) => {
        form.resetFields();
        setUpdate(true);
      })
      .finally(() => {
        setUpdate(false);
      });
  };

  return (
    <div className={classes.main}>
      {props.lists === undefined
        ? []
        : props.lists.map((item) => {
            return (
              <div className={classes.board}>
                <div className={classes.header}>
                  <Text>{item.name}</Text>
                </div>
                <div className={classes.body}>
                  <ListBox
                    onClick={() => setShowTaskBox(true)}
                    cardsTodo={
                      <>
                        {showTaskBox && console.log("True")}
                        <BoardCard
                          onClick={() => console.log("Hi")}
                          status={1}
                        />
                      </>
                    }
                    cardsDoing={
                      <>
                        <BoardCard status={2} />
                      </>
                    }
                    cardsDone={
                      <>
                        <BoardCard status={3} />
                      </>
                    }
                  />
                </div>
              </div>
            );
          })}
      <Form form={form} onFinish={finishFormHandler}>
        <Form.Item name="name">
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
      <TaskModal />
    </div>
  );
};
