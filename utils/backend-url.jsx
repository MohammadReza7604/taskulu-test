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

/* 
  TODO: nabayad inja check konim ke url chi hast baraye gozahtane token
        bayad agar token bood bezarid agar nabud nazarid
*/
export const httpRequest = (backendUrls, httpMethod, data) => {
  const token = Cookies.get("token");
  const authorization =
    token === undefined ? null : { Authorization: "Bearer " + token };
  return axios({
    method: httpMethod,
    url: BaseUrl + backendUrls,
    data: data,
    headers: authorization,
  });
};
