import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BackendUrls, BaseUrl, httpRequest } from "../../utils/backend-url";
import { ProjectLists } from "../auth/ProjectLists";
import { ProjectHeader } from "../layout/ProjectHeader";
import { SideBar } from "../layout/SideBar";
import classes from "./styles/Project.module.css";

export const Project = () => {
  const router = useRouter();
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    if (router.query.id) {
      httpRequest(
        BackendUrls.list + "list/" + router.query.id + "/",
        "GET"
      ).then((res) => {
        console.log("Project", res.data.lists);
        setProjectData(res.data);
      });
    }
  }, [router.query]);
  return (
    <div className={classes.wrapper}>
      <SideBar projectTitle={projectData.name} />
      <div className={classes.task}>
        <ProjectHeader />
        <ProjectLists projectId={projectData.id} lists={projectData.lists} />
      </div>
    </div>
  );
};
