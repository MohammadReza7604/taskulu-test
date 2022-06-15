import React from "react";
import { IoIosHome } from "react-icons/io";
import { HiOutlineChevronRight } from "react-icons/hi";
import Text from "antd/lib/typography/Text";
import { SideBarButton } from "../button/SideBarButton";
import { BsCardText } from "react-icons/bs";
import { BiStopwatch } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { AiTwotoneSetting } from "react-icons/ai";
import { SideBarButtonFooter } from "../button/SideBarButtonFooter";
import classes from "./styles/SideBar.module.css";
import { useRouter } from "next/router";

export const SideBar = (props) => {
  const router = useRouter();
  return (
    <>
      <div className={classes.sider}>
        <div>
          <div className={classes.sider_header}>
            <SideBarButtonFooter
              onClick={() => router.push("/home")}
              image={
                <>
                  <IoIosHome />
                  <HiOutlineChevronRight />
                </>
              }
              text={props.projectTitle}
            />
          </div>
          <div>
            <SideBarButton image={<BsCardText />} text={"کارها"} />
            <SideBarButton image={<BiStopwatch />} text={"زمان های کاری"} />
            <div className={classes.item}>
              <IoIosChatbubbles />
              <Text>گفتگوها</Text>
              <BsPlusLg style={{ marginRight: "80px" }} />
            </div>
            <SideBarButton image={<BsDot />} text={"گفتگوهای همگانی"} />
          </div>
        </div>
        <div className={classes.footer}>
          <SideBarButtonFooter image={<ImUsers />} text={"مدیریت کاربران"} />
          <SideBarButtonFooter image={<AiTwotoneSetting />} text={"تنظیمات"} />
        </div>
      </div>
    </>
  );
};
