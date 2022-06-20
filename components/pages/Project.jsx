import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BackendUrls, httpRequest } from "../../utils/backend-url";
import { ProjectLists } from "../auth/ProjectLists";
import { ProjectHeader } from "../layout/ProjectHeader";
import { SideBar } from "../layout/SideBar";
import classes from "./styles/Project.module.css";

export const Project = () => {
  const router = useRouter();
  const [projectData, setProjectData] = useState([]);
  const [update, setUpdate] = useState(false);
  const exitHandler = () => {
    Cookies.remove("token");
    router.push("/");
  };
  useEffect(() => {
    if (router.query.id) {
      httpRequest(
        BackendUrls.list + "list/" + router.query.id + "/",
        "GET"
      ).then((res) => {
        console.log("Project", res.data.lists.dos);
        setProjectData(res.data);
      });
    }
  }, [router.query, update]);
  return (
    <div className={classes.wrapper}>
      <SideBar projectTitle={projectData.name} />
      <div className={classes.task}>
        <ProjectHeader username={"نام کاربری"} exitClick={exitHandler} />
        <ProjectLists
          projectId={projectData.id}
          lists={projectData.lists}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};
