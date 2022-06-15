import React, { useState } from "react";
import { Button, Checkbox, Alert, Typography, Form, message, Spin } from "antd";
import Image from "next/image";
import Title from "antd/lib/typography/Title";
import { CustomCard } from "../data-display/CustomCard";
import { CustomInput } from "../data-entry/CustomInput";
import classes from "./styles/Register.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { BackendUrls, BaseUrl } from "../../utils/backend-url";
import NextNProgress from "nextjs-progressbar";

const { Text, Link } = Typography;

export const Register = () => {
  const [showAlert, setShowAlert] = useState(true);
  const router = useRouter();
  const [form] = Form.useForm();

  setTimeout(() => {
    setShowAlert(false);
  }, 10000);
  const errorFailedHandler = (error) => {
    const getError = form.getFieldError();
    console.log(getError);
  };

  const finishFormHandler = () => {
    const params = form.getFieldsValue();

    axios
      .post(BaseUrl + BackendUrls.register, params)
      .then((response) => {
        router.push("/");
      })
      .catch((error) => {
        errorFailedHandler();
      });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.right_side}>
        <div className={classes.taskulu_logo}>
          <Image src="/images/taskulu-fa-blue.svg" width={162} height={42} />
        </div>
        <div className={classes.form}>
          {showAlert && (
            <Alert
              message="نشست شما منقضی شده است. برای ادامه، لطفاً دوباره وارد شوید."
              type="warning"
              closable
            />
          )}
          <Title level={3}>عضویت</Title>

          <Form
            className={classes.login_form}
            form={form}
            onFinish={finishFormHandler}
            onFinishFailed={errorFailedHandler}
          >
            <CustomInput
              names={"username"}
              type={"text"}
              placeholder={"نام کاربری، مانندbilbo"}
              rules={[{ required: true, message: "نام کاربری را وارد کنید" }]}
            />
            <CustomInput
              type={"email"}
              names={"email"}
              placeholder={"ایمیل، مانند bilbo@example.com"}
              rules={[
                {
                  pattern:
                    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                  message: "ایمیل صحیح نمی‌باشد",
                },
                { required: true, message: "ایمیل را وارد کنید" },
              ]}
            />
            <CustomInput
              type={"password"}
              names={"password"}
              placeholder={"گذرواژه مانند .........."}
              rules={[{ required: true, message: "گذرواژه را وارد کنید" }]}
            />
            <CustomInput
              type={"password"}
              names={"password2"}
              placeholder={"تکرار گذرواژه"}
              rules={[
                { required: true, message: " تکرار گذرواژه را وارد کنید " },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("دو گذرواژه که وارد کردید مطابقت ندارند!")
                    );
                  },
                }),
              ]}
            />
            <Checkbox>من را برای ۳۰ روز به یاد داشته باش </Checkbox>
            <div className={classes.btn}>
              <Button onClick={() => router.push("/")}>ورود</Button>
              <Button type="primary" htmlType="submit">
                عضویت
              </Button>
            </div>
          </Form>
          <div className={classes.card_item}>
            <CustomCard
              photo={false}
              description="اتصال با گوگل"
              className={classes.card_google}
              onClick={() => {
                router.push("https://google.com");
              }}
            />
            <CustomCard
              photo={true}
              description="اتصال با گیت هاب"
              className={classes.card_github}
              onClick={() => router.push("https://www.github.com/")}
            />
          </div>
          <Link href="#">فراموشی گذرواژه</Link>
          <div className={classes.footer}>
            <Text> پشتیبانی</Text>
            <Text> | </Text>
            <Text>Taskulu </Text>
          </div>
        </div>
      </div>

      <div className={classes.left_side}>
        <div className={classes.text}>
          <Title className={classes.title} level={3}>
            برنامه امروزتون چیه؟
          </Title>
          <Title level={5}>وقتشه کار رو شروع کنیم</Title>
        </div>
      </div>
    </div>
  );
};
