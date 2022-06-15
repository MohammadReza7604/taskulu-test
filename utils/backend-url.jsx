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
export const HttpMethod = {
  GET: "GET",
  POST: "POST",
};
export const sendRequest = (httpMethod, backendUrls, data) => {
  const token = Cookies.get("token");
  if (httpMethod === HttpMethod.GET) {
    axios({
      method: httpMethod,
      url: BaseUrl + backendUrls,
      data,
      headers: { Authorization: "Bearer " + token },
    }).then((response) => {
      return response;
    });
  } else {
    axios({
      method: httpMethod,
      url: BaseUrl + backendUrls,
      headers: { Authorization: "Bearer " + token },
    }).then((response) => {
      return response;
    });
  }
};
