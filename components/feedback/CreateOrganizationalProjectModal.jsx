import { DownOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Form,
  Input,
  Menu,
  message,
  Modal,
  Select,
  Space,
} from "antd";
import Title from "antd/lib/typography/Title";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { BackendUrls, BaseUrl } from "../../utils/backend-url";
import { CustomInput } from "../data-entry/CustomInput";
import classes from "./styles/CreateOrganizationalProjectModal.module.css";

export const CreateOrganizationalProjectModal = (props) => {
  const [form] = Form.useForm();
  const token = Cookies.get("token");
  const finishFormHandler = () => {
    const params = {
      name: form.getFieldsValue().name,
      sazman: props.id,
    };
    axios
      .post(BaseUrl + BackendUrls.project, params, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        message.success("با موفقیت ایجاد شد");
        props.setModalVisibility((r) => !r);
        props.setUpdate((r) => !r);
        console.log(res);
      });
  };

  return (
    <>
      <Modal
        visible={props.isModalVisible}
        footer={null}
        width={430}
        onCancel={props.onCancel}
      >
        <div className={classes.modal}>
          <Title level={3}>ایجاد پروژه جدید</Title>
          <Form form={form} onFinish={finishFormHandler}>
            <div className={classes.inputs}>
              <CustomInput
                type={"text"}
                name={"name"}
                names={"name"}
                placeholder={"عنوان پروژه"}
              />
            </div>
            <div className={classes.buttons}>
              <Button>بارگذاری</Button>

              <Button
                type="primary"
                htmlType="submit"
                className={classes.button}
              >
                بساز
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};
