import service from "../utils/axios";

//登录API
export function loginAPI(data) {
  return service({
    url: "/login",
    method: "post",
    data,
  });
}

//发送验证码
export function sendVerificationCode(email) {
  console.log(`发送验证码`)
  // const data = {
  //   email: email,
  // };
  // return service({
  //   url: "/account/register/sendVerificationCode",
  //   method: "post",
  //   data,
  // });
}