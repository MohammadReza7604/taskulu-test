import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BackendUrls, BaseUrl } from "../../utils/backend-url";
import { ProjectLists } from "../auth/ProjectLists";
import { ProjectHeader } from "../layout/ProjectHeader";
import { SideBar } from "../layout/SideBar";
import classes from "./styles/Project.module.css";

export const Project = () => {
  const router = useRouter();
  const [projectData, setProjectData] = useState([]);
  const token = Cookies.get("token");
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(BaseUrl + BackendUrls.list + "list/" + router.query.id + "/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setProjectData(res.data);
        });
    }
  }, [router.query]);
  return (
    <div className={classes.wrapper}>
      <SideBar projectTitle={projectData.name} />
      <div className={classes.task}>
        <ProjectHeader />
        <ProjectLists />
      </div>
    </div>
  );
};
