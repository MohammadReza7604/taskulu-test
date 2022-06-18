import axios from "axios";
import Cookies from "js-cookie";

export const BackendUrls = {
  login: "accounts/login/",
  register: "accounts/register/",
  organization: "main/sazman/",
  project: "main/project/",
  list: "main/list/",
  task: "main/do/",
};
export const BaseUrl = "http://localhost:8001/";

export const httpRequest = (backendUrls, httpMethod, data) => {
  const token = Cookies.get("token");
  return axios({
    method: httpMethod,
    url: BaseUrl + backendUrls,
    data,
    headers: { Authorization: "Bearer " + token },
  });
};
