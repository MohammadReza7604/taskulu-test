import React, { useEffect, useState } from "react";
import { HomeCard } from "../data-display/HomeCard";
import { HomeHeader } from "../layout/HomeHeader";
import { PlusOutlined, StarFilled } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import { BackendUrls, BaseUrl } from "../../utils/backend-url";
import { OrganizationModal } from "../feedback/OrganizationModal";
import classes from "./styles/Home.module.css";
import { Organization } from "../data-display/Organization";

export const Home = (props) => {
  const token = Cookies.get("token");

  const [showOrganizationModal, setShowOrganizationModal] = useState(false);
  const [orgName, setOrgName] = useState([]);

  const [update, setUpdate] = useState(false);

  const router = useRouter();
  const exitHandler = () => {
    Cookies.remove("token");
    router.push("/");
  };
  const cancelHandler = () => {
    setShowOrganizationModal(false);
    setShowModal(false);
  };
  useEffect(() => {
    axios
      .get(BaseUrl + BackendUrls.organization, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setOrgName(res.data);
      });
  }, [update]);

  return (
    <div className={classes.home}>
      <HomeHeader username={"نام کاربری"} exitClick={exitHandler} />
      <div className={classes.contents}>
        <div className={classes.with_star}>
          <div className={classes.star_title}>
            <StarFilled />
            <Title level={5}>پروژه های ستاره دار</Title>
          </div>
          <HomeCard onClick={() => router.push("/task")} />
        </div>
        {orgName.map((item) => (
          <Organization
            orgNameTitle={item.name}
            id={item.id}
            projects={item.projects ? item.projects : []}
            setUpdate={setUpdate}
          />
        ))}
        <div
          className={classes.create_organization}
          onClick={() => setShowOrganizationModal(true)}
        >
          <Text>ایجاد سازمان</Text>
          <PlusOutlined />
        </div>
      </div>

      <OrganizationModal
        isModalVisible={showOrganizationModal}
        setModalVisibility={setShowOrganizationModal}
        setUpdate={setUpdate}
        onCancel={cancelHandler}
      />
    </div>
  );
};
