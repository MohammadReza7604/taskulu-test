import { DownOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Title from "antd/lib/typography/Title";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BackendUrls, BaseUrl } from "../../utils/backend-url";
import { CreateOrganizationalProjectModal } from "../feedback/CreateOrganizationalProjectModal";
import { CardProject } from "./CardProject";
import classes from "./styles/Organization.module.css";

const { Link } = Typography;
export const Organization = (props) => {
  const token = Cookies.get("token");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
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
