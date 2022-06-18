import React from "react";
import { Button, Form, Input, message, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import classes from "./styles/OrganizationModal.module.css";
import { CustomInput } from "../data-entry/CustomInput";
import axios from "axios";
import { BackendUrls, BaseUrl, httpRequest } from "../../utils/backend-url";
import Cookies from "js-cookie";

export const OrganizationModal = (props) => {
  const [form] = Form.useForm();
  const finishFormHandler = () => {
    const data = form.getFieldsValue();
    httpRequest(BackendUrls.organization, "POST", data).then((res) => {
      message.success("با موفقیت ایجاد شد");
      props.setModalVisibility((r) => !r);
      props.setUpdate((r) => !r);
    });
  };
  return (
    <Modal
      visible={props.isModalVisible}
      footer={null}
      width={430}
      onCancel={props.onCancel}
    >
      <div className={classes.modal}>
        <Form form={form} onFinish={finishFormHandler}>
          <div className={classes.content}>
            <Title level={5}>عنوان سازمان</Title>
            <CustomInput
              type={"text"}
              name={"name"}
              names={"name"}
              placeholder={"عنوان پروژه"}
            />
          </div>
          <div className={classes.buttons}>
            <Button onClick={props.cancel}>لغو</Button>
            <Button
              htmlType="submit"
              type="primary"
              disabled={props.disabled}
              onClick={props.onClick}
            >
              بساز
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};
