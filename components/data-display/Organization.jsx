import { DownOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Title from "antd/lib/typography/Title";
import Image from "next/image";
import React, { useState } from "react";
import { CreateOrganizationalProjectModal } from "../feedback/CreateOrganizationalProjectModal";
import { CardProject } from "./CardProject";
import classes from "./styles/Organization.module.css";

const { Link } = Typography;
export const Organization = (props) => {
  const [showModal, setShowModal] = useState(false);
  const cancelHandler = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.organization}>
      <div className={classes.organization_title}>
        <Image width={20} height={20} src={"/images/office.png"} />
        <Title level={5}>{props.orgNameTitle}</Title>
        <Link onClick={() => setShowModal(true)}>ایجاد پروژه</Link>
        <Link>
          تنظیمات <DownOutlined />
        </Link>
      </div>
      <div className={classes.card_project}>
        {props.projects.map((item) => (
          <CardProject title={item.name} id={item.id} />
        ))}
      </div>
      <CreateOrganizationalProjectModal
        isModalVisible={showModal}
        onCancel={cancelHandler}
        setModalVisibility={setShowModal}
        setUpdate={props.setUpdate}
        id={props.id}
      />
    </div>
  );
};
