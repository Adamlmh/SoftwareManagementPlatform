import service from "../utils/axios";

//登录API
export function loginAPI(data) {
  return service({
    url: "/login",
    method: "post",
    data,
  });
}
