import React from "react";
import { Typography } from "antd";
import { BoardCard } from "../data-display/BoardCard";
import { BoardBox } from "../data-display/BoardBox";
import classes from "./styles/Board.module.css";
import axios from "axios";
import { BackendUrls, BaseUrl } from "../../utils/backend-url";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const { Text } = Typography;
export const ProjectLists = () => {
  const token = Cookies.get("token");
  const router = useRouter();

  useEffect(() => {
    axios
      .get(BaseUrl + BackendUrls.task, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.board}>
        <div className={classes.header}>
          <Text>List name </Text>
        </div>
        <div className={classes.body}>
          <BoardBox
            cards={
              <>
                <BoardCard /> <BoardCard /> <BoardCard />
              </>
            }
          />
        </div>
      </div>
      <div className={classes.new_board_box}>
        <input type="text" placeholder="ایجاد لیست جدید" />
      </div>
    </div>
  );
};
