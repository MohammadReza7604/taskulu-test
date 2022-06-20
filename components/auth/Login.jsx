import React, { useState } from "react";
import { Button, Checkbox, Alert, Typography, Form, message } from "antd";
import Image from "next/image";
import Title from "antd/lib/typography/Title";
import { CustomCard } from "../data-display/CustomCard";
import { CustomInput } from "../data-entry/CustomInput";
import classes from "./styles/Login.module.css";
import { useRouter } from "next/router";
import { BackendUrls, BaseUrl, httpRequest } from "../../utils/backend-url";
import Cookies from "js-cookie";

const { Text, Link } = Typography;
export const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const router = useRouter();
  const [form] = Form.useForm();

  setTimeout(() => {
    setShowAlert(false);
  }, 10000);
  const finishFormHandler = () => {
    const params = form.getFieldsValue();
    httpRequest(BackendUrls.login, "POST", params)
      .then((res) => {
        Cookies.set("token", res.data.access);
        router.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.right_side}>
        <div className={classes.taskulu_logo}>
          <Image src="/images/taskulu-fa-blue.svg" width={162} height={42} />
        </div>
        <div className={classes.form}>
          <div className={classes.message_box}>
            {showMessage && (
              <Alert
                message="نام کاربری یا کلمه عبور اشتباه است"
                type="error"
                closable
              />
            )}
            {showAlert && (
              <Alert
                message="نشست شما منقضی شده است. برای ادامه، لطفاً دوباره وارد شوید."
                type="warning"
                closable
              />
            )}
          </div>
          <Title level={3}>ورود</Title>
          <Form
            className={classes.login_form}
            form={form}
            onFinish={finishFormHandler}
          >
            <CustomInput
              type={"text"}
              name={"username"}
              names={"username"}
              placeholder={"نام کاربری، مانندbilbo"}
              rules={[{ required: true, message: "نام کاربری را وارد کنید" }]}
            />
            <CustomInput
              type={"password"}
              name={"password"}
              names={"password"}
              placeholder={"گذرواژه مانند .........."}
              rules={[
                { required: true, message: "لطفاً گذرواژه خود را وارد کنید." },
              ]}
            />
            <Checkbox>من را برای ۳۰ روز به یاد داشته باش </Checkbox>
            <div className={classes.btn}>
              <Button onClick={() => router.push("register")}>عضویت</Button>
              <Button type="primary" htmlType="submit">
                ورود
              </Button>
            </div>
          </Form>
          <div className={classes.card_item}>
            <CustomCard
              photo={false}
              description="اتصال با گوگل"
              className={classes.card_google}
              onClick={() => router.push("https://www.google.com/")}
            />
            <CustomCard
              photo={true}
              description="اتصال با گیت هاب"
              className={classes.card_github}
              onClick={() => router.push("https://www.github.com/")}
            />
            <Link className={classes.forget_pass} href="#">
              فراموشی گذرواژه
            </Link>
          </div>
        </div>
        <div className={classes.footer}>
          <Text> پشتیبانی</Text>
          <Text> | </Text>
          <Text>Taskulu </Text>
        </div>
      </div>

      <div className={classes.left_side}>
        <div className={classes.text}>
          <Title level={3}>برنامه امروزتون چیه؟</Title>
          <Title level={5}>وقتشه کار رو شروع کنیم</Title>
        </div>
      </div>
    </div>
  );
};
