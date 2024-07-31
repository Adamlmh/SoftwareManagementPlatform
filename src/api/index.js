import service from "../utils/axios";

//登录API
export function loginAPI(data) {
  return service({
    url: "http://47.113.224.195:31108/login",
    method: "post",
    data,
  });
}

//发送验证码
export function sendVerificationCode(email) {
  // console.log(`发送验证码`);
  const data = {
    email: email,
  };
  console.log(data);
  return service({
    url: "http://47.113.224.195:31108/account/sendVerificationCode",
    method: "post",
    data,
  });
}
//注册
export function register(email, verificationCode, password) {
  const data = {
    email,
    verificationCode,
    password,
  };
  // console.log("发送注册", data);
  return service({
    url: "http://47.113.224.195:31108/account/register",
    method: "post",
    data,
  });
}
//登录
export function accountLogin(account, password, role = 1) {
  const data = {
    account,
    password,
    role,
  };
  // console.log("发送登录", data);
  return service({
    url: "http://47.113.224.195:31108/account/login",
    method: "post",
    data,
  });
}

//修改密码
export function updatePassword(email, password) {
  const data = {
    email,
    password,
  };
  // console.log("发送修改密码", data);
  return service({
    url: "http://47.113.224.195:31108/account/updatePassword",
    method: "post",
    data,
  });
}
//获得首页个人用户名与头像
export function homePageUserInfo(userId) {
  const params = {
    userId,
  };
  // console.log("发送获得用户名与头像", params);
  return service({
    url: "http://47.113.224.195:31108/account/homePageUserInfo",
    method: "get",
    params,
  });
}

//首页分页展示软件
export function homePageShowSoftware(
  page,
  softwareName = "",
  tages = [],
  pageSize
) {
  const params = {
    page,
    // softwareName,
    // tages,
    pageSize,
  };
  // console.log("发送首页分页展示", params);
  return service({
    url: "http://47.113.224.195:31108/software/homePageShowSoftware",
    method: "get",
    params,
  });
}

//软件热门排行
export function softwareRanking() {
  console.log("发现软件热门排行");
  return service({
    url: "http://47.113.224.195:31108/software/softwareRanking",
    method: "get",
  });
}

//软件详情页 上半部分基本软件信息
export function basicSoftwareInfo(softwareId) {
  const params = {
    softwareId,
  };
  // console.log("发送件详情页 上半部分基本软件信息", params);
  return service({
    url: "http://47.113.224.195:31108/software/basicSoftwareInfo",
    method: "get",
    params,
  });
}

//软件详情页 下半部分 普通/专业 软件信息
export function detailedSoftwareInfo(softwareId) {
  const params = {
    softwareId,
  };
  // console.log("发送首软件详情页 下半部分 普通/专业 软件信息", params);
  return service({
    url: "http://47.113.224.195:31108/software/detailedSoftwareInfo",
    method: "get",
    params,
  });
}

//软件详情页下半 历史查看
export function historySoftwareVersion(softwareId, versionType) {
  const params = {
    softwareId,
    versionType,
  };
  // console.log("软件详情页下半 历史查看", params);
  return service({
    url: "http://47.113.224.195:31108/software/historySoftwareVersion",
    method: "get",
    params,
  });
}

//展示用户未授权的软件，即未购买或者已过期的软件
export function showRequiredAuthSoftware(userId) {
  const params = {
    userId,
  };
  console.log("展示用户未授权的软件，即未购买或者已过期的软件", params);
  return service({
    url: "http://47.113.224.195:31108/software/showRequiredAuthSoftware",
    method: "get",
    params,
  });
}
//展示用户已经购买的软件，即未购买或者已过期的软件
export function AvailableSoftware(userId) {
  const params = {
    userId,
  };
  console.log("展示用户未授权的软件，即未购买或者已过期的软件", params);
  return service({
    url: "http://47.113.224.195:31108/user/PagedQueryAvailableSoftware",
    method: "get",
    params,
  });
}

//首页实时通知新版本
export function checkLatestSoftware(userId) {
  const params = {
    userId,
  };
  // console.log("首页实时通知新版本", params);
  return service({
    url: "http://47.113.224.195:31108/software/checkLatestSoftware",
    method: "get",
    params,
  });
}

//确认购买授权

//全部软件首页
export function allSoftwarePage(params) {
  params = {
    pageSize: 12,
    page: 1,
    softwareName: "",
    tags: [],
    ...params,
  };
  console.log("全部软件首页", params);
  return service({
    url: "http://47.113.224.195:31108/software/homePageShowSoftware",
    method: "get",
    params,
  });
}

//订阅购买展示
export function subscribeSoftwarePage(params) {
  params = {
    page: 1,
    userId: localStorage.getItem("userId"),
    ...params,
  };
  console.log("订阅购买展示", params);
  return service({
    url: `http://47.113.224.195:31108/software/showRequiredAuthSoftware`,
    method: "get",
    params,
  });
}
// 检验授权
export function getCommit(softwareId, userId, versionType, version) {
  const data = {
    softwareId,
    userId,
    versionType,
    version,
  };
  return service({
    url: "http://47.113.224.195:31108/auth/checkAuth",
    method: "post",
    data,
  });
}
// 用户点击下载
export function downloadSoftware(softwareId, userId, versionType, version) {
  const data = {
    softwareId,
    userId,
    versionType,
    version,
  };
  return service({
    url: "http://47.113.224.195:31108/software/downloadSoftware",
    method: "post",
    data,
  });
}
//我的产品首页渲染
export function myProductPage(params) {
  params = {
    softwareName: "",
    page: 1,
    tages: "",
    userId: localStorage.getItem("userId"),
    ...params,
    pageSize: 12,
  };
  return service({
    url: `http://47.113.224.195:31108/admin/homePageShowAllSoftware`,
    method: "get",
    params,
  });
}
// 个人页面更改个人信息
export function updateUserInfo(username, description, userId, headImage = "") {
  const formData = new FormData();
  formData.append("username", username); // 添加普通字段
  formData.append("description", description);
  formData.append("userId", userId);
  formData.append("headImage", headImage);

  return service({
    url: "http://47.113.224.195:31108/user/updateUserInfo",
    method: "post",
    data: formData,
    headers: {
      // 不要设置 Content-Type，浏览器会自动处理
      "Content-Type": "multipart/form-data",
    },
  });
}
// 回显指纹信息
export function getFingerprint(userId) {
  const params = {
    userId,
  };
  return service({
    url: "http://47.113.224.195:31108/hardware/getFingerprint",
    method: "get",
    params,
  });
}
// 删除指纹信息
export function deleteFingerprint(userHardwareId) {
  const params = {
    userHardwareId,
  };
  return service({
    url: "http://47.113.224.195:31108/hardware/deleteFingerprint",
    method: "DELETE",
    params,
  });
}
// 上传指纹信息
export function insertFingerprint(userId, fingerprint, hardwareName) {
  const data = {
    userId,
    fingerprint,
    hardwareName,
  };
  return service({
    url: "http://47.113.224.195:31108/hardware/insertFingerprint",
    method: "post",
    data,
  });
}

//确认购买授权
export function purchaseAuth(userId, fingerprint, totalPrize, softwareList) {
  const data = {
    userId,
    fingerprint,
    totalPrize,
    softwareList,
  };
  console.log("购买", data);
  return service({
    url: "http://47.113.224.195:31108/auth/purchaseAuth",
    method: "post",
    data,
  });
}
//管理员修改软件信息
export function updateSoftwareInfo(data) {
  return service({
    url: "http://47.113.224.195:31108/admin/updateSoftwareBasicInfo",
    method: "post",
    data,
  });
}

//回显已购买的授权许可
export function getLicense(userId) {
  const params = {
    userId,
  };
  return service({
    url: "http://47.113.224.195:31108/auth/getLicense",
    method: "get",
    params,
  });
}

// 用户上传软件
export function softwareUpload(formData) {

  return service({
    url: "http://47.113.224.195:31108/software/upload",
    method: "post",
    data: formData,
    headers: {
      // 不要设置 Content-Type，浏览器会自动处理
      "Content-Type": "multipart/form-data",
    },
  });
}