import React, { useEffect, useState } from "react";
import { HomeCard } from "../data-display/HomeCard";
import { HomeHeader } from "../layout/HomeHeader";
import { PlusOutlined, StarFilled } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { BackendUrls, httpRequest } from "../../utils/backend-url";
import { OrganizationModal } from "../feedback/OrganizationModal";
import classes from "./styles/Home.module.css";
import { Organization } from "../data-display/Organization";
import { message, Spin } from "antd";

// TODO: home too poosheye auth????????

export const Home = (props) => {
  const [showOrganizationModal, setShowOrganizationModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orgName, setOrgName] = useState([]);
  const [update, setUpdate] = useState(false);
  const router = useRouter();
  const exitHandler = () => {
    Cookies.remove("token");
    router.push("/login");
  };
  const cancelHandler = () => {
    setShowOrganizationModal(false);
    setShowModal(false);
  };
  useEffect(() => {
    // TODO: agar error dasht chi????
    setLoading(true);
    httpRequest(BackendUrls.organization, "GET")
      .then((res) => {
        setOrgName(res.data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        error.response.data
          ? message.error(error.response.data.detail)
          : message.error("خطایی رخ داده است");
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
        {loading ? (
          <Spin spinning={loading} tip="درحال بارگذاری" />
        ) : (
          orgName.map((item) => (
            <Organization
              orgNameTitle={item.name}
              id={item.id}
              projects={item.projects ? item.projects : []}
              setUpdate={setUpdate}
            />
          ))
        )}
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
