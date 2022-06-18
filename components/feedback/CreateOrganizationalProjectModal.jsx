import { Button, Form, message, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { BackendUrls, httpRequest } from "../../utils/backend-url";
import { CustomInput } from "../data-entry/CustomInput";
import classes from "./styles/CreateOrganizationalProjectModal.module.css";

export const CreateOrganizationalProjectModal = (props) => {
  const [form] = Form.useForm();
  const finishFormHandler = () => {
    const params = {
      name: form.getFieldsValue().name,
      sazman: props.id,
    };
    httpRequest(BackendUrls.project, "POST", params).then((res) => {
      message.success("با موفقیت ایجاد شد");
      props.setModalVisibility((r) => !r);
      props.setUpdate((r) => !r);
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
