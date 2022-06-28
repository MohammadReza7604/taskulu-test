import React from "react";
import "antd/dist/antd.css";
import { Login } from "../components/auth/Login";

export const getServerSideProps = (context) => {
  const token = context.req.cookies.token;
  console.log(token);
  if (!token) {
    return {
      redirect: {
        destination: "/",
        persistent: false,
      },
    };
  }
  return {
    props: {
      isLogged: true,
    },
  };
};

const Login = (props) => {
  return <Login />;
};

export default Login;
