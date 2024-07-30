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
  console.log(`发送验证码`)
  const data = {
    email: email,
  };
  console.log(data)
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
    password
  };
  console.log('发送注册', data)
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
    role
  };
  console.log('发送登录', data)
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
  console.log('发送修改密码', data)
  return service({
    url: "http://47.113.224.195:31108/account/updatePassword",
    method: "post",
    data,
  });
}
//获得首页个人用户名与头像
export function homePageUserInfo(userId) {
  const params = {
    userId
  };
  console.log('发送获得用户名与头像', params)
  return service({
    url: "http://47.113.224.195:31108/account/homePageUserInfo",
    method: "get",
    params,
  });
}

//首页分页展示软件
export function homePageShowSoftware(page, softwareName = '', tages = [], pageSize) {
  const params = {
    page,
    // softwareName,
    // tages,
    pageSize
  };
  console.log('发送首页分页展示', params)
  return service({
    url: "http://47.113.224.195:31108/software/homePageShowSoftware",
    method: "get",
    params,
  });
}

//软件热门排行
export function softwareRanking() {
  console.log('发现软件热门排行')
  return service({
    url: "http://47.113.224.195:31108/software/softwareRanking",
    method: "get",
  });
}

//软件详情页 上半部分基本软件信息
export function basicSoftwareInfo(softwareId) {
  const params = {
    softwareId
  };
  console.log('发送件详情页 上半部分基本软件信息', params)
  return service({
    url: "http://47.113.224.195:31108/software/basicSoftwareInfo",
    method: "get",
    params,
  });
}

//软件详情页 下半部分 普通/专业 软件信息
export function detailedSoftwareInfo(softwareId) {
  const params = {
    softwareId
  };
  console.log('发送首软件详情页 下半部分 普通/专业 软件信息', params)
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
    versionType
  };
  console.log('软件详情页下半 历史查看', params)
  return service({
    url: "http://47.113.224.195:31108/software/historySoftwareVersion",
    method: "get",
    params,
  });
}


//展示用户未授权的软件，即未购买或者已过期的软件
export function showRequiredAuthSoftware(userId) {
  const params = {
    userId
  };
  console.log('展示用户未授权的软件，即未购买或者已过期的软件', params)
  return service({
    url: "http://47.113.224.195:31108/software/showRequiredAuthSoftware",
    method: "get",
    params,
  });
}
//首页实时通知新版本
export function checkLatestSoftware(userId) {
  const params = {
    userId
  };
  console.log('首页实时通知新版本', params)
  return service({
    url: "http://47.113.224.195:31108/software/checkLatestSoftware",
    method: "get",
    params,
  });
}

//确认购买授权


// 检验授权
export function getCommit(softwareId, userId, versionType, version) {
  const data = {
    softwareId, 
    userId,
     versionType, 
     version
  };
  return service({
    url: "http://47.113.224.195:31108/auth/checkAuth",
    method: "post",
    data,
  });
}