import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Menu, Switch } from "antd";
import Search from "antd/lib/input/Search";
import Title from "antd/lib/typography/Title";
import Image from "next/image";
import React from "react";
import classes from "./styles/HomeHeader.module.css";

export const HomeHeader = (props) => {
  const onSearch = (value) => console.log(value);
  const menu = (
    <Menu>
      <Menu.Item onClick={props.usernameClick}>{props.username}</Menu.Item>
      <Menu.Item onClick={props.exitClick}>خروج</Menu.Item>
    </Menu>
  );

  return (
    <div className={classes.main_header}>
      <div className={classes.home_header}>
        <div className={classes.project_title}>
          <HomeOutlined />
          <Title level={4}>صفحه اصلی</Title>
          <PlusOutlined className={classes.plus} />
        </div>
        <div className={classes.header_nav}>
          <Switch defaultChecked />
          <Search
            placeholder="جستجو پروژه ها"
            onSearch={onSearch}
            className={classes.search_input}
          />
          <Dropdown overlay={menu} trigger={["click"]}>
            <Badge dot={true}>
              <Image
                width={45}
                height={45}
                className={classes.avatar}
                src="data:image/png;base64,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"
              />
            </Badge>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
